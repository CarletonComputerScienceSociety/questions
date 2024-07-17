import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A string that is obtained by rearranging the letters of the word
		<p style="text-align: center;">
			BOOGER
		</p>
		is called <em>awesome</em>, if the string does not contain the substring OO.
		Thus, GEOROB is awesome, whereas GREOOB is not awesome.
		What is the number of awesome strings?
`;

const label1 = String.raw`$6 \cdot {5 \choose 2} \cdot 3 \cdot 2$`;
const label2 = String.raw`$(6 \cdot {5 \choose 2} \cdot 3 \cdot 2) - 5!$`;
const label3 = String.raw`$6! - 5!$`;
const label4 = String.raw`$(6 \cdot {5 \choose 2} \cdot 3) - 5!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
