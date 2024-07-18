<ul>
<li> Let's determine $ S $ <br/> 
S is the set of all possible outcomes of the 17 students <br/> 
$ |S| = \binom{100}{17} $
	<li> Let's determine $ B $ <br/> 
	      B occurs when 4 is in the subset <br/> 
	      We choose 4: 1 <br/> 
	      We choose 16 from the remaining 99: $ \binom{99}{16} $ <br/> 
	      $ |B| = 1 \cdot \binom{99}{16} $ <br/> 
	      $ Pr(B) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} $
	<li> Let's determine $ C $ <br/> 
	      C occurs when 7 is in the subset <br/> 
	      We choose 17: 1 <br/> 
	      We choose 16 from the remaining 99: $ \binom{99}{16} $ <br/> 
	      $ |C| = 1 \cdot \binom{99}{16} $ <br/> 
	      $ Pr(C) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} $
	<li> Let's determine $ B \cap C $ <br/> 
	      We choose 17: 1 <br/> 
	      We choose 4: 1 <br/> 
	      We choose 15 from the remaining 98: $ \binom{98}{15} $ <br/> 
	      $ |B \cap C| = 1 \cdot 1 \cdot \binom{98}{15} $ <br/> 
	      $ Pr(B \cap C) = \frac{1 \cdot 1 \cdot \binom{98}{15}}{\binom{100}{17}} $
</ul>
Now, let's determine $ A $ 
$ Pr(A) = Pr(B) + Pr(C) - Pr(B \cap C) $ 
$ Pr(A) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} + \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} - \frac{1 \cdot 1 \cdot \binom{98}{15}}{\binom{100}{17}} $ 
$ Pr(A) = \frac{2 \cdot \binom{99}{16} - \binom{98}{15}}{\binom{100}{17}} $
