Let's make a table and see how many of the 36 outcomes is divisible by 4

![image](/images/comp2804/2022-winter-final/12/image.png)

4, 8, and 12 are all divisible by 4

<ul>
	<li> 4 comes up 3 times \\
	$ \Pr(D_1+D_2=4) = \frac{3}{36} $
	<li> 8 comes up 5 times \\
	$ \Pr(D_1+D_2=8) = \frac{5}{36} $
	<li> 12 comes up 1 time \\
	$ \Pr(D_1+D_2=12) = \frac{1}{36} $
</ul>

$ \Pr((D_1+D_2)\bmod 4 = 0) $

$ = \Pr(D_1+D_2=4) + \Pr(D_1+D_2=8) + \Pr(D_1+D_2=12) $

$ = \frac{3}{36} + \frac{5}{36} + \frac{1}{36} $

$ = \frac{9}{36} $

$ = \frac{1}{4} $
