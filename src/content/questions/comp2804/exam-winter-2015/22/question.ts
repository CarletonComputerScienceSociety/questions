import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
One of Lindsay and Simon is chosen uniformly at random. The person that is chosen wins \$100.
		Define the random variables $L$ and $S$ as follows:
		[defs]
		  L = the amount that Lindsay wins
		[/defs]
		and
		[defs]
		  S = the amount that Simon wins.
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`$\mathbb{E}(L) = 50$ and $\mathbb{E}(\max(L,S)) = 50$.`;
const label2 = String.raw`$\mathbb{E}(L) = 100$ and $\mathbb{E}(\max(L,S)) = 100$.`;
const label3 = String.raw`$\mathbb{E}(L) = 50$ and $\mathbb{E}(\max(L,S)) = 100$.`;
const label4 = String.raw`$\mathbb{E}(L) = 100$ and $\mathbb{E}(\max(L,S)) = 50$.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
