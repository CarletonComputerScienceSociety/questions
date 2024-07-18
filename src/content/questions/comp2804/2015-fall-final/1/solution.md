There are 2 cases to consider:

<ul>
<li> Let A be the event that the subset contains 3 negative integers. <br/> 
We choose 3 of the 15 negative integers: $ \binom{15}{3} $ <br/> 
$ |A| = \binom{15}{3} $
	<li> Let B be the event that the subset contains 1 negative integer and 2 positive integers. <br/> 
	      We choose 1 of the 15 negative integers: $ \binom{15}{1} = 15 $ <br/> 
	      We choose 2 of the 5 positive integers: $ \binom{5}{2} $ <br/> 
	      $ |B| = 15 \times \binom{5}{2} $
</ul>
The total number of 3-element subsets of $S$ having the property that the product of the 3 elements in the subset is negative is the \sum of the subsets in sets $ A \cup B $: 
$ |A| + |B| $ 
$ = \binom{15}{3} + 15 \times \binom{5}{2} $
