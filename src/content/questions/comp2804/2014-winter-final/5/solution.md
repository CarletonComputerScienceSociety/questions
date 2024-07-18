Let's consider all possible recursive cases for the strings of length $n$.

$b, S_{n-1}$

$c, S_{n-1}$

$a, b, S_{n-2}$

$a, c, S_{n-2}$

Adding it up, we get $S_n = S_{n-1} + S_{n-1} + S_{n-2} + S_{n-2} = 2S_{n-1} + 2S_{n-2}$

Because the question asks for the case of $n+1$, we can substitute $n+1$ into the equation

$S_{n+1} = 2S_{n} + 2S_{n-1}$
