<ul>
<li> Let $A$ be the event that a 7-element subset of $S$ has 5 even integers and 2 odd integers. \\
First, we choose 5 of the 5 even integers: $ \binom{5}{5} $ \\
Then, we choose 2 of the 15 odd integers: $ \binom{15}{2} $ \\
$ |A| = \binom{5}{5} \cdot \binom{15}{2} $
	<li> Let $B$ be the event that a 7-element subset of $S$ has 5 odd integers and 2 even integers. \\
First, we choose 5 of the 15 odd integers: $ \binom{15}{5} $ \\
Then, we choose 2 of the 5 even integers: $ \binom{5}{2} $ \\
$ |B| = \binom{15}{5} \cdot \binom{5}{2} $
	<li> Let $C$ be the event that a 7-element subset of $S$ has 6 odd integers and 1 even integer. \\
First, we choose 6 of the 15 odd integers: $ \binom{15}{6} $ \\
Then, we choose 1 of the 5 even integers: $ \binom{5}{1} $ \\
$ |C| = \binom{15}{6} \cdot \binom{5}{1} $
	<li> Let $D$ be the event that a 7-element subset of $S$ has 7 odd integers. \\
First, we choose 7 of the 15 odd integers: $ \binom{15}{7} $ \\
$|D| = \binom{15}{7} $
</ul>
The total number of 7-element subsets of $S$ having at least 5 even integers or at least 5 odd integers is $ |A| + |B| + |C| + |D| $ \\
$ = \binom{5}{5} \binom{15}{2} + \binom{15}{5} \binom{5}{2} + \binom{15}{6} \binom{5}{1} + \binom{15}{7} $
