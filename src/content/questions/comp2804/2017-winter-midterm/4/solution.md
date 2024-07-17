We can break this down into 3 cases:

<ul>
<li> A = bitstrings of length $ n $ that have exactly seven 0's 
We choose 7 positions from the $ n $ positions to place the 0's: $ \binom{n}{7} $
	<li> B = bitstrings of length $ n $ that have exactly five 1's 
	      We choose 5 positions from the $ n $ positions to place the 1's: $ \binom{n}{5} $
	<li> $A cap B$ 
There is no intersection because you cannot have seven 0s and give 1's. That's 12 bits. The thirteenth bit needs to be a 1 or 0, which breaks the rule: 0
</ul>
$ |A cup B| = |A| + |B| - |A cap B| $ 
$ |A cup B| = \binom{n}{7} + \binom{n}{5} - 0 $ 
Thus, the number of bitstrings of length $ n $ that have exactly seven 0's or exactly five 1's is: $ \binom{n}{7} + \binom{n}{5} - 0$
