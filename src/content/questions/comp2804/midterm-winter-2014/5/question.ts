import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A password consists of 12 or 13 characters, each character being one of the 10 digits $0,1,2,\dots,9$.
		A password must contain the digit 7 at least once. How many passwords are there?
`;

const label1 = String.raw`$10^{12} + 10^{13} - 9^{12} - 9^{13}$`;
const label2 = String.raw`$12^{10} + 13^{10} - 12^{9} - 13^{9}$`;
const label3 = String.raw`$10^{12} + 10^{13} - 7^{12} - 7^{13}$`;
const label4 = String.raw`$12^{10} + 13^{10} - 12^{7} - 13^{7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
