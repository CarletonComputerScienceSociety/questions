import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given 20 beer bottles $B_1,B_2,\dots,B_{20}$ and 30 cider bottles $C_1,C_2,\dots,C_{30}$.
		Assume you arrange these 50 bottles on a horizontal line such that
		<ul style="margin: 0.5rem 0;">
			<li>
				the leftmost 10 bottles are all beer bottles, and
			</li>
			<li>
				the rightmost 10 bottles are all cider bottles.
			</li>
		</ul>
		How many such arrangements are there? (The order of the bottles matters.)
`;

const label1 = "${20 \\choose 10} \\cdot {30 \\choose 10} \\cdot 30!$";
const label2 =
  "${20 \\choose 10} \\cdot 10! \\cdot {30 \\choose 10} \\cdot 10! \\cdot 30!$";
const label3 =
  "${20 \\choose 10} \\cdot 10! \\cdot {30 \\choose 10} \\cdot 10!$";
const label4 = "$50!$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
