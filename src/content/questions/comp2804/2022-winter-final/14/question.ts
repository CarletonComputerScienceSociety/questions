import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D_1,\ldots,D_{2n}$ be the result of rolling a $6$-sided die $2n$ times, and consider the length-$n$ sequence
\[  S=\langle (D_1+D_2), (D_3+D_4), (D_5+D_6),\ldots, (D_{2n-1}+D_n)\rangle \]
whose entries are all in the set $\{2,3,\ldots,12\}$.  Let $k$ be an integer in $\{0,\ldots,n\}$. What is the probability that $S$ contains exactly $k$ many $5$'s?`;

const label1 = String.raw`$\binom{n}{k}\cdot(\tfrac{1}{5})^k\cdot (\tfrac{4}{5})^{n-k}$`;
const label2 = String.raw`$\binom{n}{k}\cdot(\tfrac{1}{9})^k\cdot (\tfrac{8}{9})^{n-k}$`;
const label3 = String.raw`$\binom{n}{k}\cdot(\tfrac{1}{11})^k\cdot (\tfrac{10}{11})^{n-k}$`;
const label4 = String.raw`$\binom{n}{k}\cdot(\tfrac{1}{12})^k\cdot (\tfrac{11}{12})^{n-k}$`;
const label5 = String.raw`$\binom{n}{k}\cdot(\tfrac{1}{36})^k\cdot (\tfrac{35}{36})^{n-k}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
