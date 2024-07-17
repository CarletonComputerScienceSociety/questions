For questions like these, we can answer by checking for a value $i$ if the following is true: $ Pr(X=i cap Y=i) = Pr(X=i) cdot Pr(Y=i) $

<ul>
	<li> Let's determine $ Pr(X=1) $ 
	      The coin that's heads has a probability of $ frac{1}{2} $ 
	      The other 6 coins have a probability of $ frac{1}{2} $ 
	      $ Pr(X=1) = { left( frac{1}{2} right)}^1 {left( frac{1}{2} right) }^6 $ 
	      $ Pr(X=1) = frac{1}{2^7} $
	<li> Let's determine $ Pr(Y=1) $ 
	      The coin that's tails has a probability of $ frac{1}{2} $ 
	      The other 6 coins have a probability of $ frac{1}{2} $ 
	      $ Pr(Y=1) = { left( frac{1}{2} right) }^1 { left( frac{1}{2} right) }^6 $ 
	      $ Pr(Y=1) = frac{1}{2^7} $
	<li> Let's determine $ Pr(X=1 cap Y=1) $ 
	      If we get exactly 1 heads, then the remaining 6 coins must be tails 
	      but that means we can't have exactly 1 tails as well 
	      Since having both happen at the same time is impossible 
	      $ Pr(X=1 cap Y=1) = 0 $
</ul>
$ Pr(X=i cap Y=i) = Pr(X=i) cdot Pr(Y=i) $ 
$ 0 = frac{1}{2^7} cdot frac{1}{2^7} $ 
Since the equation is false, X and Y are not independent.
