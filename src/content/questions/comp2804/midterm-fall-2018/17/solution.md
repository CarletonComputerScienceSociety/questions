There are two options to doing this
<ul>
<li> First, we need to choose 7 questions to answer correctly from the 17 questions: $ binom{17}{7} $ 
For each of the 7 questions, there is a $ frac{1}{4} $ chance of answering correctly: $ {(frac{1}{4})}^7 $ 
For each of the 10 questions, there is a $ frac{3}{4} $ chance of answering incorrectly: $ {(frac{3}{4})}^{10} $ 
Pr$(A) = binom{17}{7} cdot {(frac{1}{4})}^7 cdot {(frac{3}{4})}^{10} $ 
	      Pr$(A) = binom{17}{7} cdot {(frac{1}{4})}^{17} cdot 3^{10} $ 
Pr$(A) = frac{ binom{17}{7} cdot 3^{10}}{4^{17}} $
	<li> Let A be the event that you answer exactly 7 questions correctly. 
	      Choose 7 questions to answer correctly from the 17 questions: $ binom{17}{7} $ 
	      For each of the 7 questions that you get correct, there is only 1 proper choice: $1 cdot 1 cdot ldots cdot 1 = 1^7$ 
For each of the 10 questions that you get wrong, there are 3 proper choices: $3 cdot 3 cdot ldots cdot 3 = 3^{10}$ 
$|A| = binom{17}{7} cdot 1^7 cdot 3^{10}$ 
The entire set of all possible combinations is just $|S|=4^{17}$ 
$ Pr(A) = frac{|A|}{|S|}$ 
$ Pr(A) = frac{ binom{17}{7} cdot 1^7 cdot 3^{10}}{4^{17}} $
</ul>
