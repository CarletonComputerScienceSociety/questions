<ul>
<li> Let S be all possible strings of length 70: $ |S| = 3^{70} $
	<li> Let A be the event that the string has no letters $c$ 
The number of strings with no letters $c$ is $2^{70}$ 
$ |A| = 2^{70} $
	<li> Let B be the event that the string has exactly 1 letter $c$ 
First, we choose the position of the letter $c$: $ \binom{70}{1} = 70$ 
Then, we choose the positions of the letters $a$ and $b$ for the remaining 69 positions: $ 2^{69} $ 
$ |B| = 70 \cdot 2^{69} $
	<li> Let C be the event that the string has exactly 2 letters $c$ 
First, we choose 2 positions out of the 70 for the letter $c$: $ \binom{70}{2} $ 
Then, we choose the positions of the letters $a$ and $b$ for the remaining 68 positions: $ 2^{68} $ 
$ |C| = \binom{70}{2} \cdot 2^{68} $
</ul>
$ |A \cup B \cup C| = |S| - |A| - |B| - |C| $ 
$ |A \cup B \cup C| = 3^{70} - 2^{70} - 70 \cdot 2^{69} - \binom{70}{2} \cdot 2^{68} $
