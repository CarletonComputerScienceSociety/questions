import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given 20 beer bottles $B_1,B_2,\dots,B_{20}$ and 50 cider bottles $C_1,C_2,\dots,C_{50}$.
		Consider subsets of these 70 bottles, that contain at least 3 beer bottles (and any number of cider
		bottles). How many such subsets are there?
`;

const label1 = String.raw`$2^{70} - 2^{50} - 20 - {20 \choose 2}$`;
const label2 = String.raw`$2^{70} - 2^{50} - 20 \cdot 2^{50} - {20 \choose 2} \cdot 2^{50}$`;
const label3 = String.raw`$2^{70} - 2^{50} - 20 \cdot 2^{50}$`;
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
