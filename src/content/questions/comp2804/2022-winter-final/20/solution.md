Although all the answers in the question look really yucky, I feel like by explaining conceptually what the answer represents (and therefore how to get there), it should make more sense.

To find the expected value of the max of 3 numbers, we first need to know what is the range of possible values for Z. Since the smallest number in the set is 1 and the largest is 50, that means the range of values is: $1 - 50$.

Let $Z_i$ represent the random variable where:

$ Z_i =
\begin{cases}
1 & max\{X_1, X_2, X_3\} = i  
0 & \text{otherwise.} \enspace
\end{cases}
$

Using the linearity of expectation, we just need to find out the expected value of $Z_i$, or $Pr(Z_i = i)$.

We know that for a number to be a "maximum", there are 3 possible cases:

<ul>
    <li> Either that number is chosen 3 times
    <li> That number is chosen 2 times and the other number is a number less than the maximum
    <li> The maximum number is chosen once but the other 2 numbers are less than the maximum
</ul>

We can convert these cases into a formula, which corresponds to: $3(i - 1)^2 + 3(i - 1) + 1$, where $i$ is the "maximum" number. We also know that the total sample space (aka, all combinations of 3 numbers chosen) are: $(\frac{1}{50})^3 = 50^{-3}$
Now we can formulate the entire formula together:

<ul>
    <li> $E(Z) = E(\sum_{i=1}^{50} Z_i)$
    <li> $E(Z) = \sum_{i=1}^{50} E(Z_i)$
    <li> $E(Z) = \sum_{i=1}^{50} i \cdot (3(i - 1)^2 + 3(i - 1) + 1) \cdot 50^{-3}$
    <li> $E(Z) = 50^{-3} \cdot \sum_{i=1}^{50} i \cdot (3(i - 1)^2 + 3(i - 1) + 1)$
</ul>
