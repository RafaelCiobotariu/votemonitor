import type { FormType } from '@/common/types';
import {
  Attachment,
  DateQuestionAggregate,
  MultiSelectQuestionAggregate,
  Note,
  NumberQuestionAggregate,
  RatingQuestionAggregate,
  SingleSelectQuestionAggregate,
  TextQuestionAggregate,
} from './common';

export interface Responder {
  responderId: string;
  displayName: string;
  email: string;
  phoneNumber: string;
}

export interface FormSubmissionsAggregated {
  submissionsAggregate: {
    electionRoundId: string;
    monitoringNgoId: string;
    formId: string;
    formCode: string;
    formType: FormType;
    name: Record<string, string>;
    description: Record<string, string>;
    defaultLanguage: string;
    languages: string[];
    responders: Responder[];
    submissionCount: number;
    totalNumberOfQuestionsAnswered: number;
    totalNumberOfFlaggedAnswers: number;
    aggregates: Record<
      string,
      | NumberQuestionAggregate
      | TextQuestionAggregate
      | DateQuestionAggregate
      | RatingQuestionAggregate
      | SingleSelectQuestionAggregate
      | MultiSelectQuestionAggregate
    >;
  };
  attachments: Attachment[];
  notes: Note[];
}
