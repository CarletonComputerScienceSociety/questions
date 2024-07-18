Let's run the algorithem for n=1, n=2, n=4, and n=8 to see how many times it says \enquote{I don't like Justin Bieber}.

JustinBieber$(1)$ = 0

JustinBieber$(2)$ = 0

JustinBieber$(4)$ = 1

JustinBieber$(8)$ = 2

JustinBieber$(16)$ = 3

<ul>
	<li> $B(n) = \text{log } n - 1 \text{ for all } n geq 2. $ <br/> 
	$B(2) = 0$ <br/> 
	$B(4) = 1$
	<li> $B(n) = \text{log } n - 1 \text{ for all } n geq 1. $ <br/> 
	$B(1) = -1$ <br/> 
	$B(2) = 0$ <br/> 
	$B(4) = 1$
	<li> $B(n) = \text{log } n \text{ for all } n geq 2. $ <br/> 
	$B(2) = 1$ <br/> 
	$B(4) = 2$
	<li> $B(n) = n - 2 \text{ for all } n geq 2. $ <br/> 
	$B(2) = 0$ <br/> 
	$B(4) = 2$
</ul>

Thus, the correct answer is $B(n) = \text{log } n - 1 \text{ for all } n geq 2. $
