import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is
		$$
			\sum_{k=0}^{45} {45 \choose k} (-3)^{2k}.
		$$
`;

const label1 = String.raw`$(-2)^{45}$`;
const label2 = String.raw`$4^{45}$`;
const label3 = String.raw`$(-8)^{45}$`;
const label4 = String.raw`$10^{45}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
