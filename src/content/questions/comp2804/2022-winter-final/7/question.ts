import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`A string that is obtained by rearranging the letters of the word
\[
	\mathrm{ARABICA}
\]
is \emph{stupendous} if it contains the substring $\mathrm{CAB}$. For example $\mathrm{ARA\underline{CAB}I}$ and $\mathrm{I\underline{CAB}AAR}$ are both stupendous, but $\mathrm{ARABICA}$ is not.  How many stupendous strings are there?`;

const label1 = String.raw`$70$`;
const label2 = String.raw`$60$`;
const label3 = String.raw`$50$`;
const label4 = String.raw`$40$`;
const label5 = String.raw`$30$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
