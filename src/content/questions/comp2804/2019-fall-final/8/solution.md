I guess we can just think, "total possibilities minus possibilities where both O's are together"

<ul>
<li> Let S be the set of all possibilities <br/> 
We choose 1 position out of the 5 positions for the B: 5 <br/> 
We choose 2 position out of the 4 remaining positions for the O: $ \binom{4}{2} $ <br/> 
We choose 1 position out of the 3 remaining positions for the G: 3 <br/> 
We choose 1 position out of the 2 remaining positions for the E: 2 <br/> 
We choose 1 position out of the 1 remaining positions for the R: 1 <br/> 
$ |S| = 5 \cdot \binom{4}{2} \cdot 3 \cdot 2 $
	<li> Let A be the set of all possibilities where both O's are together <br/> 
	      Let's treat the two O's as one letter <br/> 
	      We have 5 letters: $ G, E, R, B, O $ <br/> 
	      We choose 1 position out of the 5 positions for the O's: 5 <br/> 
	      We choose 1 position out of the 4 remaining positions for the G: 4 <br/> 
	      We choose 1 position out of the 3 remaining positions for the E: 3 <br/> 
	      We choose 1 position out of the 2 remaining positions for the R: 2 <br/> 
	      We choose 1 position out of the 1 remaining positions for the B: 1 <br/> 
	      $ |A| = 5! $
</ul>
Now, let's math 
$ |S| - |A|$ 
$ = 5 \cdot \binom{4}{2} \cdot 3 \cdot 2 - 5! $
