import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D_1$ and $D_2$ be the result of tossing a $6$-sided die twice. Define the random variables
\[  X=2\cdot D_1 \]
and
\[ Y=
	\begin{cases}
		1 & \text{if $D_1+D_2=7$}         \\
		0 & \text{otherwise.}  \enspace .
	\end{cases}
\]
Which of the following is true?`;

const label1 = String.raw`$X$ and $Y$ are independent`;
const label2 = String.raw`$X$ and $Y$ are not independent`;
const label3 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
