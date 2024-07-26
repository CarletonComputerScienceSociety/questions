The notation is a little rough, but from what I understand this is a simpler explanation:

<ul>
    <li> $I$ = the minimum value from the following permutation of values:
    <ul>
        <li> The set containing the $n + 1$ value.
        <li> The set from a permutation of values $x_1, x_n$ where a value after the 1st value is larger than the 1st value.
    </ul>
</ul>

So the expected value that we are trying to find, is the expected value from this set, containing two "parts". \\ \\

We know that $n + 1$ cannot be the minimum value unless we have a permutation where $x_1$ is the largest number and every number after it is smaller than

The probability that the 1st number is the "minimum" value is: $\frac{1}{i}$, where $2 \leq i \leq n$. \\ \\
