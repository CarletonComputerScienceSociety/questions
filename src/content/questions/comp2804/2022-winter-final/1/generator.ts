import { MultipleChoiceQuestionGenerator } from "@common/MultipleChoiceQuestionGenerator";
import type {
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOption,
} from "@common/MultipleChoiceQuestionGenerator";

class Generator extends MultipleChoiceQuestionGenerator {
  generateQuestion(): MultipleChoiceQuestion {
    return {
      body: "example body",
      options: [
        {
          label: "option1",
          correct: true,
        },
        {
          label: "option2",
          correct: false,
        },
        {
          label: "option3",
          correct: false,
        },
        {
          label: "option4",
          correct: false,
        },
      ],
    };
  }
}

export default Generator;
