import { MultipleChoiceQuestionGenerator } from "@common/MultipleChoiceQuestionGenerator";
import type {
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOption,
} from "@common/MultipleChoiceQuestionGenerator";

class Generator extends MultipleChoiceQuestionGenerator {
  generateQuestion(): MultipleChoiceQuestion {
    const [sizeA, sizeB] = this.createSetSizes();

    const dynamicQuestionBody = `Let $A$ be a set of size ${sizeA} and let $B$ be a set of size ${sizeB}. How many one-to-one functions $f: A \\rightarrow B$ are there?`;

    return {
      body: dynamicQuestionBody,
      options: this.createOptions(sizeA, sizeB),
    };
  }

  createSetSizes(): [number, number] {
    // Generate random sizes for sets A and B, ensuring B > A
    const sizeA = Math.floor(Math.random() * 5) + 1; // For simplicity, sizeA: 1-5
    const sizeB = sizeA + Math.floor(Math.random() * 5) + 1; // Ensure sizeB > sizeA, sizeB: 2-10
    return [sizeA, sizeB];
  }

  createOptions(sizeA: number, sizeB: number): MultipleChoiceQuestionOption[] {
    const correctOption = this.createCorrectOption(sizeA, sizeB);
    const incorrectOption1 = this.createIncorrectOption1(sizeA, sizeB);
    const incorrectOption2 = this.createIncorrectOption2(sizeA, sizeB);
    const incorrectOption3 = this.createIncorrectOption3(sizeA, sizeB);

    return this.shuffleOptions([
      correctOption,
      incorrectOption1,
      incorrectOption2,
      incorrectOption3,
    ]);
  }

  createCorrectOption(
    sizeA: number,
    sizeB: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\frac{${sizeB}!}{${sizeB - sizeA}!}$`,
      correct: true,
    };
  }

  createIncorrectOption1(
    sizeA: number,
    sizeB: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\frac{${sizeB - sizeA}!}{${sizeB}!}$`,
      correct: false,
    };
  }

  createIncorrectOption2(
    sizeA: number,
    sizeB: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\frac{${sizeB}!}{${sizeB - sizeA - 1}!}$`,
      correct: false,
    };
  }

  createIncorrectOption3(
    sizeA: number,
    sizeB: number,
  ): MultipleChoiceQuestionOption {
    return {
      label: `$\\frac{${sizeB - 1}!}{${sizeB - sizeA + 1}!}$`,
      correct: false,
    };
  }
}

export default Generator;
