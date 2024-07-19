So this question mainly focuses on the position of the leftmost beer bottle

Let S be the set of all possible permutations of the n+2 bottles

$|S| = (n+2)!$

We then have 3 real cases

1. Let A = The leftmost beer bottle is in the first position

   The 2 cider bottles can be placed anywhere from positions 2 to n+2: $\binom{n+1}{2}$

   There are 2 permutations for the cider bottles

   There are n! permutations for the n beer bottles

   $|A| = \binom{n+1}{2} \cdot 2 \cdot n!$

2. The leftmost beer bottle is in the second position

   The first cider bottle is locked into position 1, and the second cider bottle can be placed anywhere from positions 3 to n+2: $\binom{n}{1}$

   There are 2 permutations for the cider bottles

   There are n! permutations for the n beer bottles

   $|B| = \binom{n}{1} \cdot 2 \cdot n!$

3. The leftmost beer bottle is in the third position

   The first cider bottle is locked into position 1, the second cider bottle is locked into position 2

   there are 2 permutations for the cider bottles

   There are n! permutations for the n beer bottles

   $|C| = 2 \cdot n!$

4. Profit

$ \mathbb{E}(X) = 1 \cdot \Pr(A) + 2 \cdot \Pr(B) + 3 \cdot \Pr(C) $

$ \mathbb{E}(X) = 1 \cdot \frac{|A|}{|S|} + 2 \cdot \frac{|B|}{|S|} + 3 \cdot \frac{|C|}{|S|} $

$ \mathbb{E}(X) = 1 \cdot \frac{ \binom{n+1}{2} \cdot 2 \cdot n!}{(n+2)!} + 2 \cdot \frac{ \binom{n}{1} \cdot 2 \cdot n!}{(n+2)!} + 3 \cdot \frac{2 \cdot n!}{(n+2)!} $

$ \mathbb{E}(X) = \frac{2 \cdot \frac{(n+1)!}{2!(n-1)!}}{(n+2)(n+1)} + 2 \cdot \frac{n \cdot 2}{(n+2)(n+1)} + 3 \cdot \frac{2}{(n+2)(n+1)} $

$ \mathbb{E}(X) = \frac{(n+1)n}{(n+2)(n+1)} + \frac{4n}{(n+2)(n+1)} + \frac{6}{(n+2)(n+1)} $

$ \mathbb{E}(X) = \frac{n}{n+2} + \frac{4n+6}{(n+2)(n+1)} $
