Let's break it down into 2 cases:

<ul>
<li> B = enquote{3 is an element of $ Y $} 
	      First, we assume that 3 is an element of $ Y $. 
	      We choose 6 elements from the remaining 19 elements: $ |B| = \binom{19}{6} $
	<li> C = enquote{13 is an element of $ Y $} 
	      First, we assume that 13 is an element of $ Y $. 
	      We choose 6 elements from the remaining 19 elements: $ |C| = \binom{19}{6} $
	<li> $ A = B \cup C $ 
	      $ B \cap C = $ enquote{3 and 13 are elements of $ Y $} 
	      First, we assume that 3 and 13 are elements of $ Y $. 
	      We choose 5 elements from the remaining 18 elements: $ |B \cap C| = \binom{18}{5} $
</ul>
$ |B \cup C| = |B| + |C| - |B \cap C| $ 
$ |B \cup C| = \binom{19}{6} + \binom{19}{6} - \binom{18}{5} $ 
$ |B \cup C| = 2 \cdot \binom{19}{6} - \binom{18}{5} $ 
There are a total of $ \binom{20}{7} $ ways to choose a 7-element subset of $ X $ of size 20. 
$ Pr(A) = \frac{|B \cup C|}{\binom{20}{7}} $ 
$ Pr(A) = \frac{2 \cdot \binom{19}{6} - \binom{18}{5}}{\binom{20}{7}} $
