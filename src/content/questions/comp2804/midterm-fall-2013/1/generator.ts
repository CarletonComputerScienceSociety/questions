import { MultipleChoiceQuestionGenerator } from "@common/MultipleChoiceQuestionGenerator";
import type {
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOption,
} from "@common/MultipleChoiceQuestionGenerator";

class Generator extends MultipleChoiceQuestionGenerator {
  question(): MultipleChoiceQuestion {
    return {
      body: "You are given 5 books and 7 bookshelves. How many ways are there to place these books on the shelves? (The order on the shelves matters.)",
      options: [
        { label: "${7}\\choose{5}$", correct: false },
        { label: "$\\frac{11!}{6!}$", correct: true },
        { label: "$\\frac{11!}{7!}$", correct: false },
        { label: "$\\frac{12!}{7!}$", correct: false },
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
    const options = [
      "$\\frac{11!}{6!}$",
      "$\\frac{11!}{7!}$",
      "$\\frac{12!}{7!}$",
      "$\\frac{12!}{7!}$",
    ];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    const correctIndex = Math.floor(Math.random() * 4);
    return shuffledOptions.map((label, index) => ({
      label:
        index === correctIndex
          ? "$f: \\mathbb{N} \\rightarrow \\mathbb{N}$"
          : label,
      correct: index === correctIndex ? true : false,
    }));
  }
}

export default Generator;
