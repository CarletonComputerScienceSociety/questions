import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer and consider a set $\mathcal{B} = \{B_1,B_2,\dots,B_n\}$ of $n$ beer
		bottles and a set $\mathcal{C} = \{C_1,C_2,\dots,C_n\}$ of $n$ cider bottles. <br>
		
		For any integer $k$ with $0 \leq k \leq n$, consider subsets $X$ of $\mathcal{B} \cup \mathcal{C}$,
		such that $X$ consists of exactly $k$ bottles and no two bottles in $X$ have the same index. (For
		example, if $B_n \in X$, then $C_n \notin X$.) <br>
		
		Let $F(n,k)$ be the number of such subsets X. <br>
		Which of the following is true for all integers $n \geq 2$ and $k$ with $1 \leq k \leq n - 1$?
`;

const label1 = String.raw`$F(n,k) = F(n-1,k)\ +$ $ F(n-1,k-1)$`;
const label2 = String.raw`$F(n,k) = F(n-1,k)\ +$ $ 2 \cdot F(n-1,k-1)$`;
const label3 = String.raw`$F(n,k) = F(n,k-1)\ +$ $ F(n-1,k-1)$`;
const label4 = String.raw`$F(n,k) = F(n,k-1)\ +$ $ 2 \cdot F(n-1,k-1)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
