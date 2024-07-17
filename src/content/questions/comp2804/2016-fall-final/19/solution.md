Let $X_i$ be 1 if the next number is greater than the current number and 0 otherwise.
The probability that a random number is greater than the previous number is $frac{1}{2}$
$ mathbb{E}(X) = mathbb{E}(X*1 + X_2 + text{ldots} + X*{n-1}) $
$ mathbb{E}(X) = mathbb{E}(X*1) + mathbb{E}(X_2) + text{ldots} + mathbb{E}(X*{n-1}) $
$ mathbb{E}(X) = frac{1}{2} + frac{1}{2} + text{ldots} + frac{1}{2} $
$ mathbb{E}(X) = frac{n-1}{2} $
