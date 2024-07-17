We'll take a slow and systematic approach to this question
<ul>
<li> Let S be the set of all possible outcomes 
$ |S| = 2^5 = 32$
	<li> Let's determine $A$ 
the first three flips are fixed: 1 
the last 2 flips can be either heads or tails: $ 2^2 = 4 $ 
$ |A| = 1 cdot 4 = 4 $ 
$ Pr(A) = frac{4}{32} = frac{1}{8} $
	<li> Let's determine $B$ 
We choose 2 of the 5 positions to be tails: $ binom{5}{2} $ 
We could also choose 3 of the 5 positions to be tails: $ binom{5}{3} $ 
We could also choose 4 of the 5 positions to be tails: $ binom{5}{4} $ 
We could also choose 5 of the 5 positions to be tails: $ binom{5}{5} $ 
$ |B| = binom{5}{2} + binom{5}{3} + binom{5}{4} + binom{5}{5} $ 
$ |B| = 10 + 10 + 5 + 1 $ 
$ |B| = 26 $ 
$ Pr(B) = frac{26}{32} = frac{13}{16} $
	<li> Let's determine $A cap B$ 
If the first three flips are heads and you want to have at least two tails, then the two tails must be the last 2 flips 
$ |A cap B| = 1 $ 
$ Pr(A cap B) = frac{1}{32} $
</ul>
Now, let's check whether it's independent 
$ Pr(A cap B) = Pr(A) cdot Pr(B) $ 
$ frac{1}{32} = frac{1}{8} cdot frac{13}{16} $ 
$ frac{1}{32} = frac{13}{128} $ 
Since the two sides are not equal, the events are not independent
