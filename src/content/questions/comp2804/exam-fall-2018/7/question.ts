import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A string that is obtained by rearranging the letters of the word
		<p style="text-align: center;">
			SUCCESS
		</p>
		is called <em>awesome</em>, if the string contains the substring UE or EU.
		Thus, both SCUESCS and SCSEUCS are awesome, whereas SUCCESS is not awesome.
		What is the number of awesome strings?
`;

const label1 = String.raw`30`;
const label2 = String.raw`60`;
const label3 = String.raw`90`;
const label4 = String.raw`120`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
