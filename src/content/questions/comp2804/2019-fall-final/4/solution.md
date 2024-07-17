Let's do this uwu

<ul>
<li> Let A be the set of all subsets that contain exactly 12 beer bottles 
We choose 12 of the 20 beer bottles: $ binom{20}{12} $ 
We can have any subset of the 50 cider bottles: $ 2^{50} $ 
$|A| = binom{20}{12} cdot 2^{50} $
	<li> Let B be the set of all subsets that contain exactly 12 cider bottles 
	      We choose 12 of the 50 cider bottles: $ binom{50}{12} $ 
	      We can have any subset of the 20 beer bottles: $ 2^{20} $ 
	      $|B| = binom{50}{12} cdot 2^{20} $
	<li> Let's determine $A cap B$ 
We choose 12 of the 20 beer bottles: $ binom{20}{12} $ 
We choose 12 of the 50 cider bottles: $ binom{50}{12} $ 
$|A cap B| = binom{20}{12} cdot binom{50}{12} $
</ul>
Now, we can determine $A cup B$ 
$ |A cup B| = |A| + |B| - |A cap B| $ 
$ |A cup B| = binom{20}{12} cdot 2^{50} + binom{50}{12} cdot 2^{20} - binom{20}{12} cdot binom{50}{12} $
