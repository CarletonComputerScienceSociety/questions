import { MultipleChoiceQuestionGenerator } from "@common/MultipleChoiceQuestionGenerator";
import type {
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOption,
} from "@common/MultipleChoiceQuestionGenerator";

class Generator extends MultipleChoiceQuestionGenerator {
  question(): MultipleChoiceQuestion {
    return {
      body: "What is the capital of Canada?",
      options: [
        { label: "Ottawa", correct: true },
        { label: "Toronto", correct: false },
        { label: "Montreal", correct: false },
        { label: "Vancouver", correct: false },
      ],
    };
  }

  generateQuestion(): MultipleChoiceQuestion {
    return {
      body: this.question().body,
      options: this.createRandomOptions(),
    };
  }

  createRandomOptions(): MultipleChoiceQuestionOption[] {
    const options = ["A", "B", "C", "D"];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    const correctIndex = Math.floor(Math.random() * 4);
    return shuffledOptions.map((label, index) => ({
      label: index === correctIndex ? "Ottawa" : label,
      correct: index === correctIndex ? true : false,
    }));
  }
}

export default Generator;
