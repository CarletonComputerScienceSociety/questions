1. Find S

   Let S be the set of all possible 10-element subsets of $S$

   We choose 10 bottles from the total of 55 bottles: $\binom{55}{10}$

2. Find A

   Let A be the set of all possible 10-element subsets of $S$ that contain 0 beer bottles

   We choose 10 bottles from the 30 cider bottles: $\binom{30}{10}$

3. Find B

   Let B be the set of all possible 10-element subsets of $S$ that contain 1 beer bottle

   We choose 1 beer bottle from the 25 beer bottles and 9 cider bottles from the 30 cider bottles: $\binom{25}{1} \cdot \binom{30}{9}$

4. Profit

   $ |S| - |A| - |B| $

   $= \binom{55}{10} - \binom{30}{10} - \binom{25}{1} \cdot \binom{30}{9} $

   $ = \binom{55}{10} - \binom{30}{10} - 25 \cdot \binom{30}{9} $
