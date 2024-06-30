import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 15, where each character is a lowercase letter or an uppercase letter.
		How many such strings contain at least two lowercase letters?
`;

const label1 = String.raw`$52^{15} - 26^{15} - 15 \cdot 26^{14}$`;
const label2 = String.raw`$52^{15} - 26^{15} - 15 \cdot 26^{15}$`;
const label3 = String.raw`$52^{15} - 15 \cdot 26^{15}$`;
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
