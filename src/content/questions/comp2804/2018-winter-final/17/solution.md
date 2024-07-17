Let S be the total number of ways to choose a permutation from a set of size $2n$: $2n!$
For the first element and the last element in the permutation are even integers, we have to choose 2 even numbers. There are two ways to rearrange the 2 even numbers: $binom{n}{2} cdot 2$
For the remaining positions in the permutation, we have $(2n-2)!$ ways to rearrange these numbers: $(2n-2)!$.
$Pr(A) = frac{|A|}{|S|} = frac{binom{n}{2} cdot 2 cdot (2n-2)!}{2n!} = frac{frac{n!}{2!(n-2)!} cdot 2 cdot (2n-2)!}{2n!} = frac{n(n-1)}{2n(2n-1)} = frac{n-1}{2(2n-1)}$
