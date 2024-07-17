import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer. A bag contains $n$ red balls and $n$ blue balls. We choose a uniformly
		random subset of two balls. Define the event
		[defs]
		  A = "this subset consists of one red ball and one blue ball".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\left. n^2 \middle/ {2n \choose 2} \right.$`;
const label2 = String.raw`$\left. {2n \choose 2} \middle/ n^2 \right.$`;
const label3 = String.raw`$\left. n^2 \middle/ {n \choose 2} \right.$`;
const label4 = String.raw`$\left. {n \choose 2} \middle/ n^2 \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
