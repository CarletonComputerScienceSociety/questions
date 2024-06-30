import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group of 5 people. Each person in this group was born in a uniformly random month (from
		the 12 months of the year), independent of the other people's month of birth. What is the
		probability that at least 2 of these 5 people were born in the same month?
`;

const label1 = String.raw`$1 - \frac{12!}{12^{4} \cdot 7!}$`;
const label2 = String.raw`$1 - \frac{11!}{12^{4} \cdot 7!}$`;
const label3 = String.raw`$1 - \frac{11!}{12^{4} \cdot 6!}$`;
const label4 = String.raw`$1 - \frac{11!}{12^{4} \cdot 8!}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
