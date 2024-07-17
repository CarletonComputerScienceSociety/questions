import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider bitstrings of length 9. The positions in these strings are numbered as $1,2,3,\dots,9$.
		How many such bitstrings have the property that
		<ul style="margin: 0.5rem 0;">
			<li>
				the bit at each even position is 0, or
			</li>
			<li>
				the bitstring starts with 1010?
			</li>
		</ul>
`;

const label1 = String.raw`54`;
const label2 = String.raw`56`;
const label3 = String.raw`58`;
const label4 = String.raw`60`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
