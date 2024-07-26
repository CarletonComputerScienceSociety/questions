import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D_1$ and $D_2$ be the result of tossing a $6$-sided die twice. Define the random variables
\[  X=\max\{D_1,D_2\} \]
and
\[ Y=D_1+D_2 \enspace . \]
Which of the following is true?`;

const label1 = String.raw`$X$ and $Y$ are independent`;
const label2 = String.raw`$X$ and $Y$ are not independent`;
const label3 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
