import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer and consider a $2 \times n$ board $B_n$ consisting of a total of $2n$ square cells.
		The top part of the figure below shows $B_{13}$.
		
		<img width="421" height="163" style="display: block; max-width: 100%; height: auto; margin: 1rem auto;"
			src="data:image/png;base64,
			iVBORw0KGgoAAAANSUhEUgAAAaUAAACjAQMAAAAQMpNEAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMA/MKYcw8AAACySURBVGje
			7ZexDcIwEAA9BmMEZQBWcZUFGIA18DZUVAxBRU1J99hCIBE5RT7R5xPdSa80OclnF5aDKHgprUsIfxN701Rml/8cid7SrZAuuuii
			i64Fum6Fa1ejrbFPKZ1/1qPL07OOQxbnRRdddNFF17Jdpq82AAAAKw4i8jSymjJYWBu2TvLhbmDF79fIinrLdRe7sd6uNjN+hcXy
			3bXV86LLd9fE+8vtvYyF5dGa8f31BinwIpXAsQmNAAAAAElFTkSuQmCC">
		
		A <em>brick</em> is a horizontal or vertical board consisting of 2 square cells; see the bottom part of the figure
		above. A <em>tiling</em> of the board $B_n$ is a placement of bricks on the board such that
		<ul style="margin: 0.5rem 0;">
			<li>the bricks exactly cover $B_n$ and</li>
			<li>no two bricks overlap.</li>
		</ul>
		The figure below shows a tiling of $B_{13}$.
		
		<img width="421" height="66" style="display: block; max-width: 100%; height: auto; margin: 1rem auto;"
			src="data:image/png;base64,
			iVBORw0KGgoAAAANSUhEUgAAAaUAAABCAQMAAADNKltjAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMA/MKYcw8AAABRSURBVEjH
			Y/hPBvhBpq4DDAxgzIBEJyBhA6iYARJbYlTXqK5RXaO6RnWN6sKuC6M2eoCkyx4q9gGJ/YM0XaP116iuUV2jukZ1jeqiti569r8A
			WBcKX0qCyKUAAAAASUVORK5CYII=">
		
		Let $T_n$ be the number of different tilings of the board $B_n$. Which of the following is true for any $n \geq 3$?
`;

const label1 = String.raw`$T_n = T_{n + 1} + T_{n + 2}$`;
const label2 = String.raw`$T_n = T_{n - 1} + T_{n - 2}$`;
const label3 = String.raw`$T_n = 2 \cdot T_{n - 1} + T_{n - 2}$`;
const label4 = String.raw`$T_n = T_{n - 1} + 2 \cdot T_{n - 2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
