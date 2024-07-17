import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
  Consider the recursive algorithm $ FIB $, which takes as input an integer $ n \geq 0 $.
\begin{verbatim}
Algorithm Fib(n):
if n = 0 or n = 1
then f = n
else f = Fib(n - 1) + Fib(n - 2)
endif
return f
\end{verbatim}
When running $ FIB(5) $, how many calls are there to $ FIB(2) $? 
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$1$", correct: false },
    { label: "$2$", correct: true },
    { label: "$3$", correct: false },
    { label: "$4$", correct: false },
  ],
};
