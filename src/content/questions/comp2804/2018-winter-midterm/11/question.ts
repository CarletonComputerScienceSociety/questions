import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring is called 00-<em>free</em>, if it does not contain two 0's next to each other.
			In class, we have seen that for any $m \geq 1$,
			the number of 00-free bitstrings of length $m$ is equal to the $(m+2)$-th Fibonacci number $f_{m+2}$. <br>
			
			What is the number of 00-free bitstrings of length 55 that have 0 at position 9, and 1 at position 40?
			(The positions are numbered $1,2,\dots,55$.)
`;

const label1 = String.raw`$f_7 \cdot f_{29} \cdot f_{15}$`;
const label2 = String.raw`$f_8 \cdot f_{30} \cdot f_{16}$`;
const label3 = String.raw`$f_9 \cdot f_{31} \cdot f_{17}$`;
const label4 = String.raw`$f_{10} \cdot f_{32} \cdot f_{18}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
