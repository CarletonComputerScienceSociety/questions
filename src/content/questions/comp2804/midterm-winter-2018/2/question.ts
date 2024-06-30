import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 12 characters, where each character is an element of the set $\{a,b,c,d,e\}$.
		The positions in such strings are numbered as $1,2,3,\dots,12$. <br>
		
		How many such strings have the property that
		<ul style="margin: 0.5rem 0;">
			<li>
				each even position contains an element of $\{a, b, c\}$, or
			</li>
			<li>
				each odd position contains an element of $\{d,e\}$?
			</li>
		</ul>
`;

const label1 = String.raw`$6^{3} \cdot 6^{5} + 6^{2} \cdot 6^{5}$`;
const label2 = String.raw`$3^{6} \cdot 5^{6} + 2^{6} \cdot 5^{6}$`;
const label3 = String.raw`$3^{6} \cdot 5^{6} + 2^{5} \cdot 5^{6} - 2^{6} \cdot 3^{6}$`;
const label4 = String.raw`$6^{3} \cdot 6^{5} + 6^{2} \cdot 6^{5} - 6^{2} \cdot 6^{3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
