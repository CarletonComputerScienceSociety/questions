import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given 20 beer bottles $B_1,B_2,\dots,B_{20}$ and 50 cider bottles $C_1,C_2,\dots,C_{50}$.
		Consider subsets of these 70 bottles, consisting of 30 bottles, exactly 12 of which are beer
		bottles. How many subsets are there?
`;

const label1 = "${20 \\choose 12} \\cdot {38 \\choose 18}$";
const label2 = "${20 \\choose 12} \\cdot {50 \\choose 18}$";
const label3 = "${50 \\choose 12} \\cdot {20 \\choose 18}$";
const label4 = "${70 \\choose 30} \\cdot {20 \\choose 12}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
