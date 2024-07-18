<ul>
	<li> Let's determine $ S $ <br/> 
	S is the set of all possible outcomes of the birthdays of the students <br/> 
	$ |S| = 365^n $ <br/> 
	$ Pr(S) = \frac{365^n}{365^n} = 1 $
	<li> Let's determine $ B $ <br/> 
	B is the set of all outcomes where no students have their birthday on December 14 <br/> 
	The first student has 364 possible birthdays <br/> 
	The second student has 364 possible birthdays <br/> 
	... <br/> 
	The nth student has 364 possible birthdays <br/> 
	$ |B| = 364^n $ <br/> 
	$ Pr(B) = \frac{364^n}{365^n} $
	<li> Let's determine $ C $ <br/> 
	C is the set of all outcomes where exactly one student has their birthday on December 14 <br/> 
	Out of n students, choose 1 of them to have their birthday on December 14: $ \binom{n}{1} = n $ <br/> 
	The student with the birthday on December 14 has 1 possible birthday: 1 <br/> 
	The other students have 364 possible birthdays: $ 364^{n-1} $ <br/> 
	$ |C| = n \cdot 1 \cdot 364^{n-1} $ <br/> 
	$ Pr(C) = \frac{n \cdot 1 \cdot 364^{n-1}}{365^n} $
</ul>

Now, let's determine $ A $

$ Pr(A) = Pr(S) - Pr(B) - Pr(C) $

$ Pr(A) = 1 - \frac{364^n}{365^n} - \frac{n \cdot 1 \cdot 364^{n-1}}{365^n} $
