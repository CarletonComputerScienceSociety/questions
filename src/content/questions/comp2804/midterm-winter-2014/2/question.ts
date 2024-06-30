import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 9 boys and 15 girls. How many ways are there to arrange these 24 people on a line if all
		boys stand next to each other and all girls stand next to each other?
`;

const label1 = "$\\frac{24!}{9!15!}$";
const label2 = "${24 \\choose 9}(9!)(15!)$";
const label3 = "$(9!)(15!)$";
const label4 = "$2(9!)(15!)$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
