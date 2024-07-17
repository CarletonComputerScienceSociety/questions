import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a set of 100 integers; 30 of these are positive and the other 70 integers in $S$ are
		negative. We choose, uniformly at random, a 20-element subset of $S$. What is the probability that
		at least one of the elements in this subset is positive?
`;

const label1 = String.raw`$\left. {30 \choose 1} \middle/ {100 \choose 20} \right.$`;
const label2 = String.raw`$\left. {30 \choose 1}{70 \choose 19} \middle/ {100 \choose 20} \right.$`;
const label3 = String.raw`$1 - \left. {70 \choose 20} \middle/ {100 \choose 20} \right.$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
