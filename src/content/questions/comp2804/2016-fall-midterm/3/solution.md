Let's break it down I guess
<ul>
<li> Let T be the set of all $k$-element subsets of $S$. 
$ |T| = binom{n}{k} $
	<li> Let A be the event that there is a 1 and a 2 in the subset. 
	      That means we've gotten 1 and 2 already, leaving us with n-2 elements in the bag
	      This also means we have to choose k-2 more elements from the bag
	      $ |A| = binom{n-2}{k-2} $
</ul>
Let's just subtract the number of ways to get 1 or 2 from the total number of ways to get a subset. 
$ binom{n}{k} - binom{n-2}{k-2} $
