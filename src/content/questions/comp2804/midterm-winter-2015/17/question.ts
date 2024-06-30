import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In order to celebrate that the COMP 2804 midterm went well, you go to your neighborhood pub. This
		pub has 16 different beers on tap:
		<ul style="margin: 0.5rem 0;">
			<li>
				There are 7 beers of the <em>pilsner</em> type.
			</li>
			<li>
				There are 5 beers of the <em>India pale ale</em> type.
			</li>
			<li>
				There are 4 beers of the <em>German wheatbeer</em> type.
			</li>
		</ul>
		You order 4 different beers with at least one beer of each type. What is the number of ways in which
		you can do this? (The order in which you order the beers does not matter.)
`;

const label1 = "${16 \\choose 4}$";
const label2 =
  "${7 \\choose 2} \\cdot 5 \\cdot 4 + 7 \\cdot {5 \\choose 2} \\cdot 4 + 7 \\cdot 5 \\cdot {4 \\choose 2}$";
const label3 =
  "${16 \\choose 4} - {7 \\choose 3} - {5 \\choose 3} - {4 \\choose 3}$";
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
