import { MultipleChoiceQuestionGenerator } from "@common/MultipleChoiceQuestionGenerator";
import type {
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOption,
} from "@common/MultipleChoiceQuestionGenerator";

class Generator extends MultipleChoiceQuestionGenerator {
  generateQuestion(): MultipleChoiceQuestion {
    const [stringLength, positions] = this.generateValues();
    const dynamicQuestionBody = `Consider strings of length $${stringLength}$, in which each character is one of the characters $a,b,c,d,e$.  How many such strings have exactly $${positions}$ letters $e$?`;
    return {
      body: dynamicQuestionBody,
      options: this.createOptions(stringLength, positions),
    };
  }

  generateValues(): [number, number] {
    const stringLength = Math.floor(Math.random() * 51) + 50; //generate a value between 50 and 100
    const positions = Math.floor(Math.random() * 16) + 5; //generate a value between 5 and 20

    return [stringLength, positions];
  }

  createOptions(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption[] {
    const correctOption = this.createCorrectOption(stringLength, positions);
    const incorrectOption1 = this.createIncorrectOption1(
      stringLength,
      positions,
    );
    const incorrectOption2 = this.createIncorrectOption2(
      stringLength,
      positions,
    );
    const incorrectOption3 = this.createIncorrectOption3(
      stringLength,
      positions,
    );
    const incorrectOption4 = this.createIncorrectOption4(
      stringLength,
      positions,
    );

    return this.shuffleOptions([
      correctOption,
      incorrectOption1,
      incorrectOption2,
      incorrectOption3,
      incorrectOption4,
    ]);
  }

  createCorrectOption(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\binom{${stringLength}}{${positions}}\\cdot 4^{${stringLength - positions}}$`,
      correct: true,
    };
  }

  createIncorrectOption1(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\binom{${stringLength}}{${positions}}\\cdot 5^{${stringLength - positions}}$`,
      correct: false,
    };
  } //mutliples with 5 ^ value instead of 4

  createIncorrectOption2(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\binom{${stringLength}}{5}\\cdot 5^{${stringLength - positions}}$`,
      correct: false,
    };
  } //uses number of letters instead of positions and multiples with 5 ^ value instead of 4

  createIncorrectOption3(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\binom{${stringLength}}{5}\\cdot 4^{${stringLength - positions}}$`,
      correct: false,
    };
  } //uses number of letters instead of positions

  createIncorrectOption4(
    stringLength: number,
    positions: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$5^{${positions}}\\cdot 4^{${stringLength - positions}}$`,
      correct: false,
    };
  } //does not use combinations
}

export default Generator;
