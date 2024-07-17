import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Fibonacci numbers are defined as follows: $ f_0 = 0, f_1 = 1 $, and $ f_n = f_{n-1} + f_{n-2} $ for $n \geq 2 $. 
Consider the recursive algorithm $ FIB $, which takes as input an integer $ n \geq 0$.
\begin{verbatim}
Algorithm Fib(n):
if n = 0 or n = 1
then f = n
else f = Fib(n - 1) + Fib(n - 2)
endif
return f
\end{verbatim}
For $ n \geq 2 $, run algorithm $ FIB(n)$ and let $ a_n $ be the number of times that $ FIB(0) $ is called. 
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$a_n = f_{n-1}$", correct: false },
    { label: "$a_n = f_n$", correct: true },
    { label: "$a_n = f_n - 1$", correct: false },
    { label: "$a_n = f_{n+1}$", correct: false },
  ],
};
