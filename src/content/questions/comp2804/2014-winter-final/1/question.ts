import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A password consists of 28 characters, each character being a lowercase letter. A password must
		contain exactly one vowel (i.e., <em>a</em>, <em>e</em>, <em>i</em>, <em>o</em>, or <em>u</em>).
		How many passwords are there?
`;

const label1 = String.raw`$5 \cdot 21^{27}$`;
const label2 = String.raw`$28 \cdot 5 \cdot 21^{27}$`;
const label3 = String.raw`$28 \cdot 5 \cdot 27^{21}$`;
const label4 = String.raw`$28 \cdot 5 \cdot 26^{27}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
