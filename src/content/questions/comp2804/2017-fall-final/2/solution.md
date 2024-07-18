Let's break it down

There is an integer $a_1$ and then its double $a_2$

The largest value is $n$ and its half is $n/2$

The second largest value is $n-2$ and its half is $\frac{n-2}{2}$

We subtract 2 since odd numbers have no halves

This pattern tells us that starting from n, every other value decrementing results in a double and integer

When we rephrase this statement, we're saying half of the values from n to 2 are doubles of some values in the set

We can take the integer and its double and place it at the front

This means there are possibly $ \frac{n}{2} $ pairs

The remaining $n-2$ integers can be arranged in $ (n-2)! $ ways

In total, there are $ \frac{n}{2} \cdot (n-2)! $ awesome permutations of the set ${1, 2, ..., n}$.
