import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 5$ and $n \geq 5$ be integers. Let $P$ be a set consisting of $m$ strictly positive
		integers, and let $N$ be a set consisting of $n$ strictly negative integers. Consider 5-element
		subsets $A$ of $P \cup N$ such that the product of the elements in $A$ is strictly positive. How
		many such subsets $A$ are there?
`;

const label1 =
  "${n \\choose 5} + {n \\choose 3} \\cdot {m \\choose 2} + n \\cdot {m \\choose 4}$";
const label2 =
  "${m \\choose 5} + {m \\choose 3} \\cdot {n \\choose 2} + m \\cdot {n \\choose 4}$";
const label3 = "${m+n \\choose 5} - {n \\choose 5}$";
const label4 = "${m \\choose 5} \\cdot {n \\choose 5}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
