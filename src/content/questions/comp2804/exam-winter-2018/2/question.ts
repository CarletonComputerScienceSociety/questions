import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given 20 beer bottles $B_1,B_2,\dots,B_{20}$ and 50 cider bottles $C_1,C_2,\dots,C_{50}$.
		Consider subsets of these 70 bottles, that contain exactly 12 beer bottles (and any number of cider
		bottles) or exactly 12 cider bottles (and any number of beer bottles). How many such subsets are
		there?
`;

const label1 = "${20 \\choose 12} + {50 \\choose 12}$";
const label2 =
  "${20 \\choose 12} + {50 \\choose 12} - {20 \\choose 12} \\cdot {50 \\choose 12}$";
const label3 =
  "${20 \\choose 12} \\cdot 2^{50} + {50 \\choose 12} \\cdot 2^{20}$";
const label4 =
  "${20 \\choose 12} \\cdot 2^{50} + {50 \\choose 12} \\cdot 2^{20} - {20 \\choose 12} \\cdot {50 \\choose 12}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
