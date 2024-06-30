import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 3$ be an integer. Consider a uniformly random permutation $a_1a_2 \dots a_n$ of the set
		$\{1,2,\dots,n\}$. Define the events
		[defs]
		  A = "$a_n = n$",
		  B = "$a_2 > a_1$".
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
