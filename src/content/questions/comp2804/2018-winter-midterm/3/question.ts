import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 12 characters, where each character is an element of the set $\{a,b,c,d,e\}$.
		The positions in such strings are numbered as $1,2,3,\dots,12$. <br>
		
		How many such strings contain at least two $a$'s?
`;

const label1 = String.raw`$5^{12} - 4^{12} - 12 \cdot 4^{11}$`;
const label2 = String.raw`$5^{12} - 4^{12} - 12 \cdot 4^{12}$`;
const label3 = String.raw`$12^{5} - 12^{4} - 12 \cdot 11^{4}$`;
const label4 = String.raw`$12^{5} - 12^{4} - 12 \cdot 12^{4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
