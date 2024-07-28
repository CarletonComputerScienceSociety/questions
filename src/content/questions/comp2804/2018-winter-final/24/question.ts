import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Elisa Kazan has successfully completed her second year as President of the Carleton Computer Science Society.
		In order to celebrate this, Elisa throws a party. She invites 15 students; thus, the total number of students
		at the party is equal to 16. Elisa has brought an unlimited amount of drinks: 5 types $C_1,C_2,C_3,C_4,C_5$
		of cider and 3 types $B_1,B_2,B_3$ of beer. Each of the 16 students gets 3 drinks; each of these drinks is
		uniformly, and independently, chosen from the 8 types of drinks. <br>
		Define the following random variable $X$:
		<ul>
  <li> X = the number of students who get exactly 2 ciders.</li>
		</ul>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$2^{4} \cdot 3^{2} \cdot \left. 5^{2} \middle/ 3^{8} \right.$`;
const label2 = String.raw`$2^{4} \cdot 3^{2} \cdot \left. 2^{5} \middle/ 8^{3} \right.$`;
const label3 = String.raw`$2^{4} \cdot 3^{2} \left. \cdot 5^{2} \middle/ 8^{3} \right.$`;
const label4 = String.raw`$3^{2} \cdot \left. 5^{2} \middle/ 8^{3} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
