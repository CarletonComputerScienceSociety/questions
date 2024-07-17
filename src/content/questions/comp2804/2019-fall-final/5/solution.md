<ul>
<li> Let S be the set of all subsets 
$ |S| = 2^{70} $
	<li> Let A be the set of all subsets that contain no beer bottles 
	      We choose 0 of the 20 beer bottles: $ \binom{20}{0} $ 
	      We choose any subset of the 50 cider bottles: $ 2^{50} $ 
	      $ |A| = \binom{20}{0} \cdot 2^{50} = 2^{50} $
	<li> Let B be the set of all subsets that contain exactly 1 beer bottle 
	      We choose 1 of the 20 beer bottles: $ \binom{20}{1} $ 
	      We choose any subset of the 50 cider bottles: $ 2^{50} $ 
	      $ |B| = \binom{20}{1} \cdot 2^{50} = 20 \cdot 2^{50} $
	<li> Let C be the set of all subsets that contain exactly 2 beer bottles 
	      We choose 2 of the 20 beer bottles: $ \binom{20}{2} $ 
	      We choose any subset of the 50 cider bottles: $ 2^{50} $ 
	      $ |C| = \binom{20}{2} \cdot 2^{50} = 190 \cdot 2^{50} $
</ul>
Now, we can determine the number of subsets that contain at least 3 beer bottles 
$ |S| - |A| - |B| - |C| $ 
$ = 2^{70} - 2^{50} - 20 \cdot 2^{50} -\binom{20}{2} \cdot 2^{50} $
