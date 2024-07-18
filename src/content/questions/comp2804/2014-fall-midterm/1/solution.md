We can break it down

Let U be the set of all possible n-length bitstrings: $|U|=2^n$

Let A be the set of all bitstrings with all 0's: $|A|= $ n choose n zeros $\binom{n}{n}$

Let B be the set of all bitstrings no zeros: $(|B|= )$ n choose n-1 zeros $( = \binom{n}{n-1} )$

$|U| - |A| - |B| = 2^n - \binom{n}{n} - \binom{n}{n-1} = 2^n - \frac{n!}{n!0!} - \frac{n!}{(n-1)!1!} = 2^n - 1 - n$

We can also write it differently and get the same answer:

Let U be the set of all possible n-length bitstrings: $|U|=2^n$

Let A be the set of all bitstrings with zero 1's: $|A|=$ n choose zero 1's $= \binom{n}{0}$

Let B be the set of all bitstrings a single 1: $|B|=$ n choose a single 1 $= \binom{n}{1}$

$|U| - |A| - |B| = 2^n - \binom{n}{0} - \binom{n}{1} = 2^n - \frac{n!}{n!0!} - \frac{n!}{(n-1)!1!} = 2^n - 1 - n$
