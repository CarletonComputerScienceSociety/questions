<ul>
<li> Let B be the set with exactly 12 beer bottles and any number of cider bottles 
First, choose 12 beer bottles out of the 20: $ binom{20}{12} $ 
We need to take into account all subsets of cider bottles that we add to the 12 beer bottles: $ 2^{50} $ 
$ |B| = binom{20}{12} cdot 2^{50} $
	<li> Let C be the set with exactly 12 cider bottles and any number of beer bottles 
	      First, choose 12 cider bottles out of the 50: $ binom{50}{12} $ 
	      We need to take into account all subsets of beer bottles that we add to the 12 cider bottles: $ 2^{20} $ 
	      $ |C| = binom{50}{12} cdot 2^{20} $
	<li> Let's determine $ B cap C $: the set with exactly 12 beer bottles and 12 cider bottles 
	      We need to choose 12 beer bottles and 12 cider bottles 
	      First, choose 12 beer bottles out of the 20: $ binom{20}{12} $ 
	      First, choose 12 cider bottles out of the 50: $ binom{50}{12} $ 
	      $ |B cap C| = binom{20}{12} cdot binom{50}{12} $
</ul>
Now, we can find $ B cup C $ 
$ |B cup C| = |B| + |C| - |B cap C| $ 
$ |B cup C| = binom{20}{12} cdot 2^{50} + binom{50}{12} cdot 2^{20} - binom{20}{12} cdot binom{50}{12} $
