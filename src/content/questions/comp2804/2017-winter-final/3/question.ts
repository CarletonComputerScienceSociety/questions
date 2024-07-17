import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $B$ be a set consisting of 45 bottles. Out of these, 17 are beer bottles, and the remaining 28
		are cider bottles. Consider subsets of $B$ that contain
		<ul style="margin: 0.5rem 0;">
			<li>
				exactly 5 beer bottles and zero or more cider bottles,
			</li>
		</ul>
		or
		<ul style="margin: 0.5rem 0;">
			<li>
				exactly 5 cider bottles and zero or more beer bottles.
			</li>
		</ul>
		How many such subsets are there?
`;

const label1 = "${17 choose 5} cdot 2^{28} + 2^{17} cdot {28 choose 5}$";
const label2 =
  "${17 choose 5} cdot 2^{28} + 2^{17} cdot {28 choose 5} - {17 choose 5} cdot {28 choose 5}$";
const label3 = "$2^{45} - {17 choose 5} - {28 choose 5}$";
const label4 = "$2^{45} - {17 choose 5} cdot {28 choose 5}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
