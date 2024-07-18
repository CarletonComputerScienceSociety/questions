<ul>
	<li> Let S be the set of all possible outcomes when assigning a month of birth to each person. <br/>
	Each person can be born in any of the 12 months: $ 12^5 $ v
	$ |S| = {12}^5 $
	<li>  Let A be the event that no people were born in the same month. <br/>
	The first person can be born in any of the 12 months. <br/>
	The second person can be born in any of the 11 remaining months. <br/>
	The third person can be born in any of the 10 remaining months. <br/>
	The fourth person can be born in any of the 9 remaining months. <br/>
	The fifth person can be born in any of the 8 remaining months. <br/>
	$ |A| = 12 \times 11 \times 10 \times 9 \times 8 = \frac{11!}{7!}$ <br/>
	$ Pr(A) = \frac{|A|}{|S|} = \frac{11!}{7! \cdot 12^5} $
	<li> Let B be the event that at least 2 people were born in the same month. <br/>
	$ Pr(B) = 1 - Pr(A) $ <br/>
	$ Pr(B) = 1 - \frac{11!}{7! \cdot 12^5} $
</ul>
