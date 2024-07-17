To determine the number of ordered triples $ (A, B, C) $ such that $ A subseteq S $, $ B subseteq S $, $ C subseteq S $, and $ A $, $ B $, and $ C $ are pairwise disjoint, we start by analyzing the choices available for each element in the set $ S $.
Given $ S $ is a set with $ n $ elements, each element $ x in S $ must belong to one of the sets $ A $, $ B $, $ C $, or to none of these sets. These four choices for each element are:
<ul>
	<li> $ x in A $
	<li> $ x in B $
	<li> $ x in C $
	<li> $ x notin A cup B cup C $
</ul>
Since the elements of $ S $ are independently distributed among these four choices, each element has 4 options. Therefore, for each of the $ n $ elements, there are 4 independent choices. 
$ 4 cdot 4 cdot 4 cdot ldots cdot 4$ 
Hence, the total number of ways to assign each of the $ n $ elements to either $ A $, $ B $, $ C $, or none of them is $ 4^n $. 
Thus, the total number of ordered triples $ (A, B, C) $ where $ A $, $ B $, and $ C $ are pairwise disjoint subsets of $ S $ is: [ 4^n ] 
So, the number of such ordered triples is $boxed{4^n}$.
