import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $b \geq 1$ and $c \geq 1$ be integers. Elisa Kazan's neighborhood pub serves $b$ different types
		of beer and $c$ different types of cider. Elisa invites 6 friends to this pub and orders 7 drinks,
		one drink (beer or cider) for each friend, and one cider for herself. Different people may get the
		same type of beer or cider. <br>
		
		In how many ways can Elisa place these orders, such that exactly 4 people get a beer?
`;

const label1 = "${6 \\choose 4} \\cdot b^{4} \\cdot c^{2}$";
const label2 = "${6 \\choose 4} \\cdot b^{4} \\cdot c^{3}$";
const label3 = "${7 \\choose 4} \\cdot b^{4} \\cdot c^{3}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
