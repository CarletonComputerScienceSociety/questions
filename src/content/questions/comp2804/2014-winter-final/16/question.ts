import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $C_1$ be a fair coin that has $H$ on one side and $T$ on the other side. Let $C_2$ be a coin
		that has $H$ on both sides. We choose one of $C_1$ and $C_2$ uniformly at random and flip it. Define
		the events
		[defs]
		  A = "we choose $C_2$",
		  B = "the flip resulted in $H$".
		[/defs]
		What is the conditional probability $\Pr(A|B)$?
`;

const label1 = String.raw`1/3`;
const label2 = String.raw`1/2`;
const label3 = String.raw`2/3`;
const label4 = String.raw`none of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
