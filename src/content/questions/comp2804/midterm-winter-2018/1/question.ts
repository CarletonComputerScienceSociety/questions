import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 12 characters, where each character is an element of the set $\{a,b,c,d,e\}$.
		The positions in such strings are numbered as $1,2,3,\dots,12$. <br>
		
		How many such strings have the property that
		<ul style="margin: 0.5rem 0;">
			<li>
				each even position contains an element of $\{a,b,c\}$, and
			</li>
			<li>
				each odd position contains an element of $\{d,e\}$?
			</li>
		</ul>
`;

const label1 = String.raw`$6^6$`;
const label2 = String.raw`$5^{12}$`;
const label3 = String.raw`$6^3 \cdot 6^2$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
