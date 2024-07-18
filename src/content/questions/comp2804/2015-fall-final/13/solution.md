<ul>
<li> Let S be the set of all possible bitstrings of length 5. <br/> 
The size of S is the number of bitstrings of length 5: $ |S| = 2^{5} = 32 $
	<li> In the instance of A, the first 3 bits can be fixed as 101 or 110: 2 ways. <br/> 
	      The last 2 bits can be any combination of 0s and 1s: $2^{2}$. <br/> 
$ |A| = 2 \times 2^{2} = 8 $ <br/> 
$ Pr(A) = \frac{8}{32} = \frac{1}{4} $
	<li> In the instance of B, the first 2 bits can be any combination of 0s and 1s: $2^{2}$. <br/> 
The last 3 bits are fixed as 111: 1 way. <br/> 
$ |B| = 2^{2} = 4 $ <br/> 
$ Pr(B) = \frac{4}{32} = \frac{1}{8} $
	<li> Let $A \cap B$ be the event that the first 3 bits are 101 or 110 AND the last 3 bits are 111. <br/> 
When the last 3 bits are 111, the first 3 bits cannot be 110 <br/> 
This leaves us with 10111 as the only bitstring that satisfies both conditions. <br/> 
$ |A \cap B| = 1 $ <br/> 
$ Pr(A \cap B) = \frac{1}{32} $
</ul>
Now, we check whether they are independent or not 
$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{1}{32} = \frac{1}{4} \cdot \frac{1}{8} $ 
$ \frac{1}{32} = \frac{1}{32} $ 
The events A and B are independent.
