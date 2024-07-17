<ul>
<li> Let A be the event that there are two $a$'s
Out of n positions, choose 2 of them to be $a$'s: $ binom{n}{2} $ 
Everything else is a $b$, which is only 1 option. 
$ |A| = binom{n}{2} $
	<li> Let B be the event that there are two $a$'s and they are next to each other 
Out of n-1 positions, choose 1 of them to be the first $a$. 
The next position is the second $a$. 
Everything else is a $b$, which is only 1 option. 
$ |B| = n-1 $
</ul>
$S_n = |A| - |B|$ 
$S_n = binom{n}{2} - (n-1)$ 
$S_n = binom{n}{2} - n + 1$
