import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "What is the coefficient of $ x^{12}y^{12} $ in the expansion of $ {(3x-7y)}^{24} $?",
  options: [
    { label: "$-3^{12}7^{12}{{24}\\choose{12}}$", correct: false },
    { label: "$(3x)^{12}(-7y)^{12}{{24}\\choose{12}}$", correct: true },
    { label: "$21^{12}{{24}\\choose{12}}$", correct: false },
    { label: "$(3x)^{12}(7y)^{12}{{24}\\choose{12}}$", correct: false },
  ],
};
