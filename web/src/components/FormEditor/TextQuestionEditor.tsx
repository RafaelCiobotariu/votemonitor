import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EditFormType } from '@/components/FormEditor/FormEditor';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface TextQuestionEditorProps {
  questionIndex: number;
}

function TextQuestionEditor({ questionIndex }: TextQuestionEditorProps) {
  const { t } = useTranslation();
  const { control } = useFormContext<EditFormType>();
  const languageCode = useWatch({
    control,
    name: `languageCode`,
  });

  return (
    <>
      <FormField
        control={control}
        name={`questions.${questionIndex}.inputPlaceholder` as const}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>{t('questionEditor.question.inputPlaceholder')}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value[languageCode]}
                  onChange={event => field.onChange({
                    ...field.value,
                    [languageCode]: event.target.value
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
}
export default TextQuestionEditor;
