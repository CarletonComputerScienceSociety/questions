import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Each student has a student number which is a string of five digits, in which no digit occurs more
		than once. Thus, 94631 is a valid student number, whereas 94641 is not valid. <br>
		
		What is the minimum number of students such that we can guarantee that at least two of them have the
		same student number?
`;

const label1 = String.raw`$1 + 10^{5}$`;
const label2 = String.raw`$1 + 5^{10}$`;
const label3 = String.raw`$1 + \frac{10!}{5!}$`;
const label4 = String.raw`$1 + \frac{5!}{10!}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
