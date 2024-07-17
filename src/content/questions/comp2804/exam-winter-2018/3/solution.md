<ul>
<li> Let A be the set of all bottles that contain 0 beer bottles 
First, choose 0 beer bottles out of the 20: $ binom{20}{0} $ 
We need to take into account all subsets of cider bottles that we add to the 0 beer bottles: $ 2^{50} $ 
$ |A| = binom{20}{0} cdot 2^{50} $
	<li> Let B be the set of all bottles that contain 1 beer bottle 
	      First, choose 1 beer bottle out of the 20: $ binom{20}{1} $ 
	      We need to take into account all subsets of cider bottles that we add to the 1 beer bottle: $ 2^{50} $ 
	      $ |B| = binom{20}{1} cdot 2^{50} $
	<li> Let C be the set of all bottles that contain 2 beer bottles 
	      First, choose 2 beer bottles out of the 20: $ binom{20}{2} $ 
	      We need to take into account all subsets of cider bottles that we add to the 2 beer bottles: $ 2^{50} $ 
	      $ |C| = binom{20}{2} cdot 2^{50} $
</ul>
Since the question is asking for all possibilities excluding 0, 1, and 2 beer bottles, we can find the total number of possibilities by subtracting the number of possibilities that contain 0, 1, and 2 beer bottles from the total number of possibilities 
Let D be the set of all bottles that contain at least 3 beer bottles 
$ |D| = 2^{70} - |A| - |B| - |C| $ 
$ |D| = 2^{70} - binom{20}{0} cdot 2^{50} - binom{20}{1} cdot 2^{50} - binom{20}{2} cdot 2^{50} $ 
$ |D| = 2^{70} - 2^{50} - 20 cdot 2^{50} - binom{20}{2} cdot 2^{50} $
