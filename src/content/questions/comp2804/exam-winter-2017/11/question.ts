import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group consisting of 7 girls and 6 boys. Elisa is one of the girls. How many ways are
		there to arrange these 13 people on a horizontal line such that Elisa has 2 neighbors, both of whom
		are girls? (The order on the line matters.)
`;

const label1 = String.raw`$11 \cdot {6 \choose 2} \cdot 10!$`;
const label2 = String.raw`$11 \cdot 6 \cdot 5 \cdot 10!$`;
const label3 = String.raw`$12 \cdot 6 \cdot 5 \cdot 10!$`;
const label4 = String.raw`$13 \cdot 6 \cdot 5 \cdot 10!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
