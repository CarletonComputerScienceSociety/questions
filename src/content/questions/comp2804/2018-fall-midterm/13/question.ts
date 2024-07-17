import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, where each character is one of the 26 lowercase letters $a,b,c,\dots,z$.
		Such a string is called $qq$<em>-free</em>, if it does not contain two $q$'s next to each other.
		For any integer $n \geq 1$, let $Q_n$ be the number of $qq$-free strings of length $n$. <br>
		
		Which of the following is true for any integer $n \geq 3$?
`;

const label1 = String.raw`$Q(n) = 26 \cdot Q(n-1) + 26 \cdot Q(n-2)$`;
const label2 = String.raw`$Q(n) = 25 \cdot Q(n-1) + 25 \cdot Q(n-2)$`;
const label3 = String.raw`$Q(n) = 26 \cdot Q(n-1) + 25 \cdot Q(n-2)$`;
const label4 = String.raw`$Q(n) = 25 \cdot Q(n-1) + 26 \cdot Q(n-2)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
