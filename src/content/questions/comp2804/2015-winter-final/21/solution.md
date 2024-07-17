Let's just check some $ Pr(X=x \cap Y=y) = Pr(X=x) \cdot Pr(Y=y) $

<ul>
	<li> Let S be the set of all bitstrings of length 5. 
	      $ |S| = 2^5 $
	<li> Let's find $ X = 5 $ 
	      The first bit is 0: 1 
	      The second bit is 0: 1 
	      ldots 
	      The fifth bit is 0: 1 
	      $ |X=5| = 1 $ 
	      $ Pr(X=5) = \frac{1}{2^5} $
	<li> Let's find $ Y = 1 $ 
	      The first bit is 1 and the remaining 4 bits can be any combination of 0s and 1s: $2^4$ 
$ |Y=1| = 2^4 $ 
$ Pr(Y=1) = \frac{2^4}{2^5} $ 
$ Pr(Y=1) = \frac{1}{2} $
	<li> Let's find $ X = 5 \cap Y = 1 $ 
	      The first bit is 1, but that only leaves us with 4 other bits to make 0. Not 5 bits to make 0 
	      $ |X=5 \cap Y=1| = 0 $ 
	      $ Pr(X=5 \cap Y=1) = 0 $
</ul>
Now, let's check 
$ Pr(X=5 \cap Y=1) = Pr(X=5) \cdot Pr(Y=1) $ 
$ 0 = \frac{1}{2^5} \cdot \frac{1}{2} $ 
$ 0 = \frac{1}{2^6} $ 
$ 0 = \frac{1}{64} $ 
Because the two are not equal, it is no independent
