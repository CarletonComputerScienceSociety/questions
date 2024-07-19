1. Determine $B$

   Let $B$ be the event that at least 2 flips result in heads.

   We can find $B$ by finding the complement of the event that fewer than 2 flips result in heads.

   The complement of the event that fewer than 2 flips result in heads is the event that 0 or 1 flip results in heads.

   The probability of 0 flips resulting in heads is $\binom{6}{0} \left(\frac{1}{2}\right)^0 \left(\frac{1}{2}\right)^6 = \frac{1}{64}$.

   The probability of 1 flip resulting in heads is $\binom{6}{1} \left(\frac{1}{2}\right)^1 \left(\frac{1}{2}\right)^5 = \frac{6}{64}$.

   The probability of fewer than 2 flips resulting in heads is $\frac{1}{64} + \frac{6}{64} = \frac{7}{64}$.

   Therefore, the probability of at least 2 flips resulting in heads is $1 - \frac{7}{64} = \frac{57}{64}$.

2. Determine $ A \cap B $

   We have exactly 3 heads, which means we have 3 heads and 3 tails.

   We choose 3 of the 6 flips to be heads: $\binom{6}{3} = 20$.

   The remaining 3 flips must be tails: 1.

   Therefore, $|A \cap B| = 20$.

   $\Pr(A \cap B) = \frac{|A \cap B|}{|S|} = \frac{20}{64} $

3. Profit

   $\Pr(A|B) = \frac{\Pr(A \cap B)}{\Pr(B)} $

   $\Pr(A|B) = \frac{\frac{20}{64}}{\frac{57}{64}} $

   $\Pr(A|B) = \frac{20}{57} $
