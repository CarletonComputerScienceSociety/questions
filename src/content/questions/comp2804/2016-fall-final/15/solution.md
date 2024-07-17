For anything less than 5 flips, I honestly just draw a tree diagram to find the answer 
begin{forest}
[
[H
[H
[H]
[T]
]
[T
[H]
[T]
]
]
[T
[H
[H]
[T]
]
[T
[H]
[T]
]
]
]
end{forest}
<ul>
<li> Let's determine S 
S is the set of all possible outcomes of the 3 coin flips 
$ |S| = 2^3 = 8$
	<li> Let's determine A 
	      A occurs when we get 0 or 1 tails 
	      $ |A| = 4 $ 
	      $ Pr(A) = frac{4}{8} = frac{1}{2} $
	<li> Let's determine B 
	      B occurs when we HHH and TTT don't happen, so the other 6 outcomes 
	      $ |B| = 6 $ 
	      $ Pr(B) = frac{6}{8} $
	<li> Let's determine $ A cap B $ 
	      $ |A cap B| = 3 $ 
	      $ Pr(A cap B) = frac{3}{8} $
</ul>
Now, let's check if A and B are independent 
$ Pr(A cap B) = Pr(A) cdot Pr(B) $ 
$ frac{3}{8} = frac{1}{2} cdot frac{6}{8} $ 
$ frac{3}{8} = frac{6}{16} $ 
Since the equation is true, A and B are independent.
