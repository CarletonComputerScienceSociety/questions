import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The number of different strings that can be made by reordering the 10 letters of the word AAABBCCCCC is
`;

const label1 = String.raw`$10!$`;
const label2 = String.raw`$\frac{10!}{2!3!5!}$`;
const label3 = "${10 \\choose 3}{10 \\choose 2}{10 \\choose 5}$";
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
