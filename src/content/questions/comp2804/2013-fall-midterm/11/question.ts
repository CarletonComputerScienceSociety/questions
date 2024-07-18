import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $ f: \mathbb{N} \rightarrow \mathbb{N} $ is defined by 
$ f(0) = 14 $ 
$ f(n+1) = f(n) + 4n - 5 $ for $ n \geq 0 $ 
What is $ f(n) $? 
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$f(n) = 2n^{2} + 6n + 14$", correct: false },
    { label: "$f(n) = 2n^{2} - 6n + 14$", correct: false },
    { label: "$f(n) = 2n^{2} + 7n + 14$", correct: false },
    { label: "$f(n) = 2n^{2} - 7n + 14$", correct: true },
  ],
};
