Let's explain why some are wrong and one is right

<ul>
<li> The number of bitstrings of length $n$ <br/> 
Pretty sure this is wrong because the equation for the number of bitstrings of length $n$ is $2^n$
<li> The number of bitstrings of length $\frac{n-2}{2}$ <br/> 
Pretty sure this is wrong because the equation for the number of bitstrings of length $n$ is $2^n$
<li> The number of bitstrings of length $n$ having an odd number of 0's. <br/> 
Let's write out the first few values of $ \binom{n}{2k+1} $ <br/> 
	      <ul>
		      <li> $ \binom{n}{1} $
		      <li> $ \binom{n}{3} $
		      <li> $ \binom{n}{5} $
	      </ul>
	      As can be seen, the number of 0's is odd. 
	      So that's great. The reason why $k$ only reaches a total of $ \frac{n-2}{2} $ is because in the actual equation, $k$ is multiplied by 2. 
If we were to have $k$ possibly be $n$, then it would be $ \binom{n}{2n+1} $, which is not possible.
	<li> The number of bitstrings of length $n$ in which the number of 0's plus the number of 1's is at most $ \frac{n-1}{2} $ <br/> 
I'm not sure why this would be correct
</ul>
