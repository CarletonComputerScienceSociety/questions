import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many bitstrings $s_1s_2 \dots s_{20}$ of length 20 have the property that $s_1s_2s_3 = 000$ or
		$s_2s_3s_4 = 000$?
`;

const label1 = String.raw`$2^{17} - 2^{15}$`;
const label2 = String.raw`$2^{17} - 2^{16}$`;
const label3 = String.raw`$2^{18} - 2^{16}$`;
const label4 = String.raw`$2^{18} - 2^{17}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
