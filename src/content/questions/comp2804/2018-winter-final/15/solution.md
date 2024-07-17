We'll take a slow and systematic approach to this question

<ul>
<li> Let S be the set of all possible outcomes 
$ |S| = 2^4 = 16$
	<li> Let's determine $A$ 
The first two flips are fixed: $HT$ 
The last 2 flips can be either heads or tails: $ 2^2 = 4 $ 
$ |A| = 1 cdot 4 = 4 $ 
$ Pr(A) = frac{4}{16} = frac{1}{4} $
	<li> Let's determine $B$ 
The second and third flips are fixed: $TT$ 
The first flip can be either heads or tails: $ 2^1 = 2 $ 
The last flip can be either heads or tails: $ 2^1 = 2 $ 
$ |B| = 2 cdot 2 = 4 $ 
$ Pr(B) = frac{4}{16} = frac{1}{4} $
	<li> Let's determine $A cap B$ 
If the first two flips are $HT$ and the second and third flips are $TT$, then it looks like this: $HTTX$ 
X can either be heads or tails: $ 2^1 = 2 $ 
$ |A cap B| = 1 cdot 2 = 2 $ 
$ Pr(A cap B) = frac{2}{16} = frac{1}{8} $
</ul>
Now, let's check whether it's independent 
$ Pr(A cap B) = Pr(A) cdot Pr(B) $ 
$ frac{1}{8} = frac{1}{4} cdot frac{1}{4} $ 
$ frac{1}{8} = frac{1}{16} $ 
Since the two sides are not equal, the events are not independent
