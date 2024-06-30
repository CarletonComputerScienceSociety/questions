import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 4$ be an integer. What does
		$$
			3 \cdot { n\choose 3} + 6n \cdot {n \choose 2} + n^3
		$$
		count?
`;

const label1 = String.raw`The number of ways to choose an ordered triple
		<p style="text-align: center; margin: 0.5rem 0;">
			(beer bottle, cider bottle, wine bottle)
		</p>
		in a set consisting of $n$ beer bottles, $n$ cider bottles, and $n$ wine bottles.`;
const label2 = String.raw`The number of ways to choose a 3-element subset of a set consisting of $n$ beer bottles, $n$ cider bottles, and $n$ wine bottles.`;
const label3 = String.raw`The number of ways to choose 3 elements (with repetitions allowed) in a set consisting of $n$ beer bottles, $n$ cider bottles, and $n$ wine bottles.`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
