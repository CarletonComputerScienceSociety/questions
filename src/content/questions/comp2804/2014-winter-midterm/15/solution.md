$S$ = You pick any 25 bitstring = $2^{25}$

$A$ = You pick a single 1 = $\binom{25}{1}$

$B$ = You pick no 1s = $\binom{25}{0}$

All possibilities that don't include zero 1s or a single 1 = $|S| - |A| - |B|$

$= 2^{25} - \binom{25}{1} - \binom{25}{0}$

$= 2^{25} - \binom{25}{24} - \binom{25}{25}$

$= 2^{25} - 25 - 1$

Probability = $\frac{2^{25} - 25 - 1}{2^{25}}$

$= \frac{2^{25}}{2^{25}} - \frac{25}{2^{25}} - \frac{1}{2^{25}}$

$= 1 - \frac{25}{2^{25}} - \frac{1}{2^{25}}$
