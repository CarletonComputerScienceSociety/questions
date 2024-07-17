import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Carleton's Computer Science program has $f$ female students and $m$ male students, where $f \geq 1$
		and $f + m \geq 8$. The Carleton Computer Science Society has a Board of Directors consisting of a
		President, five Vice-Presidents, and two Cider-Presidents (whose task is to buy cider for the
		President). All members of the Board of Directors are Computer Science students. The President is
		female, cannot be Vice-President, and cannot be Cider-President. A Vice-President cannot be Cider-President.
		In how many ways can a Board of Directors be chosen?
`;

const label1 = String.raw`$f \cdot {f+m-1 \choose 7}$`;
const label2 = String.raw`$f + {f+m-1 \choose 5} + {f+m-6 \choose 2}$`;
const label3 = String.raw`$f \cdot {f+m-1 \choose 5} \cdot {f+m-6 \choose 2}$`;
const label4 = String.raw`$f \cdot {f+m \choose 5} \cdot {f+m \choose 2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
