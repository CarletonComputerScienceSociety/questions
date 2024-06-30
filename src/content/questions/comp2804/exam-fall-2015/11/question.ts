import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Nick gets 75 bananas for his birthday. He decides to eat them all over a period of 5 days. In order
		to do this, Nick makes a banana-schedule, which specifies the number of bananas he is going to eat
		on the first day, on the second day, etc., up to the fifth day. For example, (20, 20, 10, 20, 5),
		(40, 13, 0, 20, 2), and (40, 13, 20, 2, 0) are three different banana-schedules. What is the
		total number of banana-schedules?
`;

const label1 = "${79 \\choose 4}$";
const label2 = "${79 \\choose 5}$";
const label3 = "${80 \\choose 4}$";
const label4 = "${80 \\choose 5}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
