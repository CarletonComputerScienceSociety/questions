Holy moly, that's a lot of words
Let's do this anyway$ ( $cries internally $ ) $

<ul>
	<li> Let B be the event that we have exactly 5 beer bottles and zero or more cider bottles 
	      First, we choose 5 beer bottles out of the 17 beer bottles: $ \binom{17}{5} $ 
	      Then, choose how many cider bottles we want. We subsets with 0 cider bottles to 28 cider bottles 
	      Somewhere out there, there's a rule that states that it's $ 2^{28} $ 
	      $ |B| = \binom{17}{5} \cdot 2^{28} $
	<li> Let C be the event that we have exactly 5 cider bottles and zero or more beer bottles 
	      First, we choose 5 cider bottles out of the 28 cider bottles: $ \binom{28}{5} $ 
	      Then, choose how many beer bottles we want. We subsets with 0 beer bottles to 17 beer bottles 
	      Somewhere out there, there's a rule that states that it's $ 2^{17} $ 
	      $ |C| = \binom{28}{5} \cdot 2^{17} $
	<li> Determine $ B \cap C $ 
	      We have exactly 5 beer bottles and 5 cider bottles 
	      $ | B \cap C | = \binom{17}{5} \cdot \binom{28}{5} $
</ul>
$ B \cup C = |B| + |C| - |B \cap C| $ 
$ B \cup C = \binom{17}{5} \cdot 2^{28} + \binom{28}{5} \cdot 2^{17} - \binom{17}{5} \cdot \binom{28}{5} $
