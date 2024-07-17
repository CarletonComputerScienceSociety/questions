import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer. Consider functions
		$$
			f : \{1,2,3,\dots,n\} \rightarrow \{1,2,3,\dots,7n\}
		$$
		such that, for each $i$ with $1 \leq i \leq n$, $f(i)$ is divisible by 7. How many such functions
		are there?
`;

const label1 = String.raw`$(7n)^{n}$`;
const label2 = String.raw`$n^{7n}$`;
const label3 = String.raw`$n^{n}$`;
const label4 = String.raw`$7^{n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
