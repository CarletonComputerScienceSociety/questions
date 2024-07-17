import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Carleton's Computer Science program has $f$ female students and $m$ male students, where
		$f \geq 1$ and $f + m \geq 4$. The Carleton Computer Science Society has a Board of Directors
		consisting of a President and three Vice-Presidents, all of whom are Computer Science students.
		The President is female and cannot be a Vice-President. In how many ways can a Board of Directors
		be chosen?
`;

const label1 = "${f + m \\choose 4}$";
const label2 = "$f \\cdot {f + m - 1 \\choose 3}$";
const label3 = "$f \\cdot {f + m \\choose 3}$";
const label4 = "$(f - 1) \\cdot {f + m \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
