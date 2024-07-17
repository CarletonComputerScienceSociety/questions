import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 4 blue balls $B_1,B_2,B_3,B_4$ and 5 red balls $R_1,R_2,R_3,R_4,R_5$. We pick 3
		balls of the same color and arrange them on a horizontal line. (The order on the line matters.) How
		many arrangements are there?
`;

const label1 = String.raw`64`;
const label2 = String.raw`74`;
const label3 = String.raw`84`;
const label4 = String.raw`94`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
