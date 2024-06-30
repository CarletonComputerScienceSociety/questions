import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Elisa Kazan's neighborhood pub serves 8 different types of cider; denote these types by $C_1,C_2,\dots,C_8$.
		Elisa invites 7 friends to this pub and orders one cider for each friend. Different
		friends may get the same type of cider. (Elisa came by car and, therefore, orders a glass of water
		for herself.) <br>
		In how many ways can Elisa place these orders of cider, such that exactly 4 of her friends get a
		cider of type $C_3$?
`;

const label1 = "${7 \\choose 4} \\cdot 7^3$";
const label2 = "${7 \\choose 4} \\cdot 8^3$";
const label3 = "${7 \\choose 4} \\cdot 7^4$";
const label4 = "${7 \\choose 4} \\cdot 8^4$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
