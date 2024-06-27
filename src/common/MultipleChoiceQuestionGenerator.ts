export interface MultipleChoiceQuestionOption {
  label: string;
  correct: boolean;
}

export interface MultipleChoiceQuestion {
  body: string;
  options: MultipleChoiceQuestionOption[];
}

export class MultipleChoiceQuestionGenerator {
  // this should return the default question
  question(): MultipleChoiceQuestion {
    throw new Error("Not implemented");
  }

  // this is how the base questions should be retrieved
  getQuestion(shuffle: boolean = false): MultipleChoiceQuestion {
    const question = this.question();
    return {
      body: question.body,
      options: shuffle
        ? this.shuffleOptions(question.options)
        : question.options,
    };
  }

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
