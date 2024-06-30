import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Carleton Computer Science Society has a Board of Directors consisting of a President, two
		Vice-Presidents, and a five-person Advisory Board. The President cannot be Vice-President and cannot be
		on the Advisory Board. A Vice-President cannot be on the Advisory Board. Let $n$ be the number of
		students in Carleton's Computer Science program, where $n \geq 8$. In how many ways can a Board of
		Directors be chosen?
`;

const label1 = String.raw`$n{n \choose 2}{n \choose 5}$`;
const label2 = String.raw`$(n-2){n\choose 2}{n-2 \choose 5}$`;
const label3 = String.raw`$(n-5){n \choose 2}{n-1 \choose 5}$`;
const label4 = String.raw`$(n-7){n \choose 2}{n-2 \choose 5}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
