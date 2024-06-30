import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 17 boys and 17 girls. How many ways are there to arrange them on a line if all boys are
		standing next to each other and all girls are standing next to each other?
`;

const label1 = String.raw`$17! + 17!$`;
const label2 = String.raw`$2(17! + 17!)$`;
const label3 = String.raw`$(17!)^2$`;
const label4 = String.raw`$2(17!)^2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
