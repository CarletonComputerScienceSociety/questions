import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Carleton Computer Science Society (CCSS) is organizing their annual Saint Patrick's Day party.
		The CCSS has bought three types of drinks:
		<ul style="margin: 0.5rem 0;">
			<li>
				Porterhouse Brewing Co. Oyster Stout,
			</li>
			<li>
				Guinness Extra Stout,
			</li>
			<li>
				Magners Original Irish Cider.
			</li>
		</ul>
		There is an unlimited supply for each of these types. <br>
		There are 75 students at the party, and each of them gets one drink, which is chosen uniformly at random from these three types. <br>
		Let $A$ be the event
		[defs]
		  A = "exactly 50 students get Magners Original Irish Cider".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{ 75 \choose 50 } \cdot 2^{25}}{3^{75}}$`;
const label2 = String.raw`$\frac{3^{75}}{{75 \choose 50} \cdot 2^{25}}$`;
const label3 = String.raw`$\frac{75 \choose 50}{3^{75}}$`;
const label4 = String.raw`$\frac{{75 \choose 50} \cdot 3^{25}}{3^{75}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
