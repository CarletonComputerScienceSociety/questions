import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Nick eats lots of bananas. During a period of 7 days, Nick eats a total of 25 bananas. A banana schedule
		is a sequence of 7 numbers, whose sum is equal to 25, and whose numbers indicate the number of bananas
		that Nick eats on each day. Three examples of such schedules are (3,2,7,4,1,3,5), (2,3,7,4,1,3,5), and
		(3,0,9,4,1,0,8). How many banana schedules are there?
`;

const label1 = "${31 \\choose 6}$";
const label2 = "${31 \\choose 7}$";
const label3 = "${32 \\choose 6}$";
const label4 = "${32 \\choose 7}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
