import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "A password consists of 6 or 7 characters, each character being an uppercase or a lowercase letter. A password must contain at least one uppercase letter. How many passwords are there?",
  options: [
    { label: "$52^{6} + 52^{7}$", correct: false },
    { label: "$26 \\cdot 52^{5} + 26 \\cdot 52^{6}$", correct: false },
    { label: "$52^{6} + 52^{7} - 26^{6} - 26^{7}$", correct: true },
    { label: "None of the above.", correct: false },
  ],
};
