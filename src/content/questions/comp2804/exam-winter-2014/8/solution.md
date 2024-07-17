We need to determine the number of different seating arrangements.
<ul>
<li> We choose $ k $ people from $ n $ people: $ binom{n}{k} $
	<li> We also need to find the number of circular arrangements/permutations 
	      It's important to identify that in a table of 3 people, $ (1,2,3), (2,3,1), and (3,1,2) $ are the same arrangement because 2 always has 1 on their left and 3 on their right 
	      Therefore, we need to divide the number of linear arrangements by $ k $ to account for the rotations 
	      $ (k-1)! $
</ul>
$ binom{n}{k} cdot (k-1)! $ 
$ frac{n!}{k!(n-k)!} cdot (k-1)! $ 
$ frac{n!}{k!(n-k)!} cdot frac{(k-1)!}{1} $ 
$ frac{n!}{k(k-1)!(n-k)!} cdot frac{(k-1)!}{1} $ 
$ frac{n!}{k(n-k)!} $
