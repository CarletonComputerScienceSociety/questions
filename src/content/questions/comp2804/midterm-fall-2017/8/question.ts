import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a square with sides of length 17. This square contains $n$ points. What is the minimum
		value of $n$ such that we can guarantee that at least two of these points have distance at most
		$\left. 17 \middle/ \sqrt{2} \right.$?
`;

const label1 = String.raw`4`;
const label2 = String.raw`5`;
const label3 = String.raw`6`;
const label4 = String.raw`7`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
