import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group of 8 people, consisting of Simon, John, and 6 other people. How many ways are there
		to arrange these 8 people on a horizontal line such that Simon and John are standing next to each
		other? (The order on the line matters and Simon is either to the left or to the right of John.)
`;

const label1 = String.raw`$7 \cdot 6!$`;
const label2 = String.raw`$2 \cdot 7 \cdot 6!$`;
const label3 = String.raw`$8 \cdot 6!$`;
const label4 = String.raw`$2 \cdot 8 \cdot 6!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
