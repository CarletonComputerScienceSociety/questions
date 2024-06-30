import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 5-element subsets $\{x_1,x_2,x_3,x_4,x_5\}$ of the set $\{1,2,3,\dots,17\}$,
		where $x_1 < x_2 < x_3 < x_4 < x_5$. <br>
		How many such subsets have the property that $x_3 = 7$?
`;

const label1 = "${6 choose 2} cdot {10 choose 2}$";
const label2 = "${6 choose 2} cdot {9 choose 2}$";
const label3 = "${7 choose 2} cdot {10 choose 2}$";
const label4 = "${7 choose 2} cdot {9 choose 2}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
