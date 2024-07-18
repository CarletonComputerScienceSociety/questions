Let's explain why some are wrong and some are right

<ul>
<li> The number of bitstrings of length $n$ that have at leats two 1's <br/> 
If this was the case, it would subtract the set with all 0's and the set with a single 1 in any of the $n$ positions: $ 2^{n} - 1 - n $
	<li> The number of bitstrings of length $n$ that have at most two 1's. <br/> 
If this was the case, it would just be the set with all 0's and the set with a single 1 in any of the $n$ positions: $ 1 + n $
	<li> The number of subsets of a set of size $n$ that have size at least two. <br/> 
This one is saying \enquote{All subsets that are at least size two} <br/> 
We subtract the empty set and choosing 1 element from the n elements: $ 2^{n} - 1 - n $
	<li> The number of subsets of a set of size $n$ that have size at least three. <br/> 
This one is saying \enquote{All subsets that are at least size three} <br/> 
We subtract the empty set, choosing 1 element from the n elements, and choosing 2 elements from the n elements: $ 2^{n} - 1 - n - \binom{n}{2} $
</ul>
