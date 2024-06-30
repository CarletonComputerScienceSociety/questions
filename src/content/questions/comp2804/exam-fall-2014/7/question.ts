import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider $m \geq 7$ blue balls $B_1,B_2,\dots,B_m$ and $n \geq 7$ red balls $R_1,R_2,\dots,R_n$.
		We pick 7 balls of the same color and arrange them on a horizontal line. (The order on the line
		matters.) How many arrangements are there?
`;

const label1 = String.raw`$7!{m \choose 7} + 7!{n \choose 7}$`;
const label2 = String.raw`$m!{m \choose 7} + n!{n \choose 7}$`;
const label3 = String.raw`$7!{m + n \choose 7}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
