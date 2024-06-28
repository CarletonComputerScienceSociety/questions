To find the number of one-to-one functions from a set $A$ of size 7 to a set $B$ of size 13, we use the concept of permutations. A one-to-one function (also known as an injective function) from $A$ to $B$ means each element in $A$ is mapped to a unique element in $B$.

Here is a step-by-step solution:

For the first element in $A$, there are 13 possible elements in $B$ it can map to. For the second element in $A$, to maintain a one-to-one mapping, it can only map to one of the remaining 12 elements in $B$, and so on.

The number of ways to assign a unique element in $B$ to each element in $A$ is calculated by multiplying these choices together. This is the principle of counting.

The formula for permutations, which gives the number of ways to choose $k$ elements from a set of $n$ elements where order matters and without replacement, is $P(n, k) = \frac{n!}{(n-k)!}$. Here, $n = 13$ (the size of $B$) and $k = 7$ (the size of $A$).

Apply the Formula: Plugging the values into the formula gives $P(13, 7) = \frac{13!}{(13-7)!} = \frac{13!}{6!}$.

Conclusion: The correct answer is c) $\frac{13!}{6!}$, which represents the total number of one-to-one functions from set $A$ to set $B$.
