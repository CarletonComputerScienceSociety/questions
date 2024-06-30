import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring is called 00-<em>free</em> if it does not contain two 0's next to each other.
		In class, we have seen that for any $m \geq 1$, the number of 00-free
		bitstrings of length $m$ is equal to the $(m + 2)$-th Fibonacci number $f_{m+2}$. <br>
		
		What is the number of 00-free bitstrings of length 20 that have 0 at position 7?
		(The positions are numbered $1,2,\dots,20$.)
`;

const label1 = String.raw`$f_{7} \cdot f_{15}$`;
const label2 = String.raw`$f_{8} \cdot f_{14}$`;
const label3 = String.raw`$f_{8} \cdot f_{15}$`;
const label4 = String.raw`$f_{7} \cdot f_{14}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
