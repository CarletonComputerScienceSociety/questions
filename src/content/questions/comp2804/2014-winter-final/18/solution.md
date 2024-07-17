<ul>
<li> Let S be the set of all possible outcomes when assigning a month of birth to each person. 
Each person can be born in any of the 12 months: $ 12^5 $ 
$ |S| = {12}^5 $
	<li>  Let A be the event that no people were born in the same month. 
	      The first person can be born in any of the 12 months. 
	      The second person can be born in any of the 11 remaining months. 
	      The third person can be born in any of the 10 remaining months. 
	      The fourth person can be born in any of the 9 remaining months. 
	      The fifth person can be born in any of the 8 remaining months. 
	      $ |A| = 12 \times 11 \times 10 \times 9 \times 8 = \frac{11!}{7!}$ 
$ Pr(A) = \frac{|A|}{|S|} = \frac{11!}{7! \cdot 12^5} $
<li> Let B be the event that at least 2 people were born in the same month. 
$ Pr(B) = 1 - Pr(A) $ 
$ Pr(B) = 1 - \frac{11!}{7! \cdot 12^5} $
</ul>
