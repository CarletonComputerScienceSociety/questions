import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given that:
		<ul style="margin: 0.5rem 0;">
			<li>
				The course COMP 9999 runs over a period of one year, starting on January 1 and ending on December
				31. There is one lecture every day; thus, the total number of lectures is 365.
			</li>
			<li>
				At the beginning of each of the 365 lectures, Nick flips a fair and independent coin twice.
				If the coin comes up heads twice, then Nick eats 3 bananas during the lecture; otherwise,
				Nick eats 5 bananas during the lecture.
			</li>
		</ul>
		
		Let $X$ be the total number of bananas that Nick eats during the 365 lectures of the course COMP
		9999. What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		(n.b., you may find it useful to apply Linearity of Expectation)
`;

const label1 = String.raw`$\frac{9 \cdot 365}{2}$`;
const label2 = String.raw`$\frac{7 \cdot 365}{2}$`;
const label3 = String.raw`$\frac{5 \cdot 365}{2}$`;
const label4 = String.raw`$4 \cdot 365$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
