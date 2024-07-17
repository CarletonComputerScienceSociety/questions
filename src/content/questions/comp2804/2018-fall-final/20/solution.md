Let $X_i$ be 2 if there are 2 cider bottles in the subset, 1 if there is 1 cider bottle in the subset, and 0 if there are no cider bottles in the subset

<ul>
<li> $X_i = 0 $ if there are no cider bottles 
	      First we choose 3 beer bottles: $ binom{n}{3} $ 
	      Second we choose 0 cider bottles: $ binom{2}{0} $ 
	      $ Pr(X_i = 0) = frac{ binom{n}{3} cdot binom{2}{0} }{ binom{n+2}{3} } $
	<li> $X_i = 1 $ if there is 1 cider bottle 
	      First we choose 1 cider bottle: $ binom{2}{1} $ 
	      Second we choose 2 beer bottles: $ binom{n}{2} $ 
	      $ Pr(X_i = 1) = frac{ binom{2}{1} cdot binom{n}{2} }{ binom{n+2}{3} } $
	<li> $X_i = 2 $ if there are 2 cider bottles 
	      First we choose 2 cider bottles: $ binom{2}{2} $ 
	      Second we choose 1 beer bottle: $ binom{n}{1} $ 
	      $ Pr(X_i = 2) = frac{ binom{2}{2} cdot binom{n}{1} }{ binom{n+2}{3} } $
</ul>
$ mathbb{E}(X) = 0 cdot Pr(X_i = 0) + 1 cdot Pr(X_i = 1) + 2 cdot Pr(X_i = 2) $ 
$ mathbb{E}(X) = 0 cdot frac{ binom{n}{3} cdot binom{2}{0} }{ binom{n+2}{3} } + 1 cdot frac{ binom{2}{1} cdot binom{n}{2} }{ binom{n+2}{3} } + 2 cdot frac{ binom{2}{2} cdot binom{n}{1} }{ binom{n+2}{3} } $ 
$ mathbb{E}(X) = frac{ binom{2}{1} cdot binom{n}{2} }{ binom{n+2}{3} } + 2 cdot frac{ binom{2}{2} cdot binom{n}{1} }{ binom{n+2}{3} } $ 
$ mathbb{E}(X) = frac{2 cdot binom{n}{2} + 2 cdot binom{n}{1} }{ binom{n+2}{3} } $ 
$ mathbb{E}(X) = frac{2 cdot binom{n}{2} + 2 cdot n }{ binom{n+2}{3} } $
