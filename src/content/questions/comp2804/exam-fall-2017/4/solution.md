<ul>
<li> Let S be the set of all strings 
$ |S| = 3^{40} $
	<li> Let A be the set of strings that contain no $a$'s 
The 40 positions can be filled with either $b$ or $c$: $ 2^{40} $ 
$ |A| = 2^{40} $
	<li> Let B be the set of strings that contain exactly one $a$ 
We choose 1 position out of the 40 positions for the $a$: $ binom{40}{1} $ 
The remaining 39 positions can be filled with either $b$ or $c$: $ 2^{39} $ 
$ |B| = binom{40}{1} cdot 2^{39} $
	<li> Let C be the set of strings that contain exactly two $a$'s 
We choose 2 positions out of the 40 positions for the $a$'s: $ binom{40}{2} $ 
The remaining 38 positions can be filled with either $b$ or $c$: $ 2^{38} $ 
$ |C| = binom{40}{2} cdot 2^{38} $
</ul>
Let D be the set of strings that contain at least three $a$'s 
$ |D| = |S| - |A| - |B| - |C| $ 
$ |D| = 3^{40} - 2^{40} - binom{40}{1} cdot 2^{39} - binom{40}{2} cdot 2^{38} $
