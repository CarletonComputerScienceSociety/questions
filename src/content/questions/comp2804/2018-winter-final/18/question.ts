import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair red coin once, and you flip a fair blue coin once, independently of each other.
		Define the random variables
		
		<!-- yes, i'm aware of the cases environment. the strings are sufficiently long i need them to word wrap on mobile -->
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td rowspan="2">$X = \bigg\{$</td>
					<td>$1\ $</td>
					<td>if the red coin flip resulted in heads$,$</td>
				</tr>
				<tr>
					<td>$0\ $</td>
					<td>if the red coin flip resulted in tails$,$</td>
				</tr>
				<tr>
					<td rowspan="2">$Y = \bigg\{$</td>
					<td>$1\ $</td>
					<td>if the blue coin flip resulted in heads$,$</td>
				</tr>
				<tr>
					<td>$0\ $</td>
					<td>if the blue coin flip resulted in tails$,$</td>
				</tr>
			</tbody>
		</table>
		
		and
		<ul>
  <li> Z = $\min(X,Y).$</li>
		</ul>
		What is the expected value $\mathbb{E}(Z)$ of the random variable $Z$?
`;

const label1 = String.raw`1/4`;
const label2 = String.raw`1/2`;
const label3 = String.raw`3/4`;
const label4 = String.raw`1`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
