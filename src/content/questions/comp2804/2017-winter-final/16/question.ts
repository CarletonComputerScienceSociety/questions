import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $A$ and $B$ be two events in some sample space. You are given that
		$$
			\begin{align}
			\Pr(A|B) &= \Pr(B|A), \\
			\Pr(A \cup B) &= 1, \\
			\Pr(A \cap B) &> 0.
			\end{align}
		$$
		Which of the following is true?
`;

const label1 = String.raw`$\Pr(A) < 1/2$`;
const label2 = String.raw`$\Pr(A) > 1/2$`;
const label3 = String.raw`$\Pr(A) < 1$`;
const label4 = String.raw`$\Pr(A) > 0$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
