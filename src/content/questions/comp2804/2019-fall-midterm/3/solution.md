1. Determine the set of all $k$-element subsets of $S$ that do contain 1 or 2

   We place 1 in the k-element subset

   We then place 2 in the k-element subset

   We choose the remaining $k-2$ elements from the remaining $n-2$ elements in $S$: $\binom{n-2}{k-2}$

   Thus, the total number of $k$-element subsets of $S$ that contain 1 or 2 is $2 \cdot \binom{n-2}{k-2}$

2. Profit

   Thus, the total number of $k$-element subsets of $S$ that do not contain 1 or 2 is $\binom{n}{k} - \binom{n-2}{k-2}$
