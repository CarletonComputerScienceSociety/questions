Consider the case where the current bit, next bit, and bit after that are all 0
That means we can just calculate the remaining possible bitstring combinations since the requirements have already been met
$ 2^{n-3} $
$ 1, S*{n-1} $
$ 0, 1, S*{n-2} $
$ 0, 0, 1, S*{n-3} $
Adding them up, we get $ S_n = S*{n-1} + S*{n-2} + S*{n-3} + 2^{n-3} $
