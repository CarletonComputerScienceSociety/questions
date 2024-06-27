export interface MultipleChoiceQuestionOption {
  label: string;
  correct: boolean;
}

export interface MultipleChoiceQuestion {
  body: string;
  options: MultipleChoiceQuestionOption[];
}

export class MultipleChoiceQuestionGenerator {
  // this should return a generated question
  generateQuestion(): MultipleChoiceQuestion {
    throw new Error("Not implemented");
  }

  shuffleOptions(
    options: MultipleChoiceQuestionOption[],
  ): MultipleChoiceQuestionOption[] {
    return options.sort(() => Math.random() - 0.5);
  }
}
