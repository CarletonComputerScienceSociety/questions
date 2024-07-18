1. **Probability of Getting $ HTH $:**<br/>
   The probability of getting a head followed by a tail followed by a head in three consecutive flips is:<br/>
   $P(HTH) = P(H) \times P(T) \times P(H) = \left( \frac{1}{2}\right) \times \left( \frac{1}{2}\right) \times \left( \frac{1}{2}\right) = \frac{1}{8} $

2. **Number of Possible $ HTH $ in 6 Flips:**<br/>
   Since we are looking for consecutive $ HTH $ patterns, we need to consider overlapping patterns in the sequence.<br/>
   In a sequence of 6 coin flips, the positions where a $ HTH $ can start are:<br/>
   <ul>
      <li> 1st position: $ {1, 2, 3} $
      <li> 2nd position: $ {2, 3, 4} $
      <li> 3rd position: $ {3, 4, 5} $
      <li> 4th position: $ {4, 5, 6} $
   </ul>
   Therefore, there are 4 possible positions for a $ HTH $ to occur.

3. **Expected Value Contribution from Each Position:**<br/>
   For each position, the expected value contribution is:<br/>
   $E(\text{one } HTH) = P(HTH) \times \text{payout} = \frac{1}{8} \times 5 = \frac{5}{8}$<br/>

4. **Total Expected Value $ E(X) $:**<br/>
   Since there are 4 possible positions, the total expected value is the sum of the contributions from each position:<br/>
   $E(X) = 4 \times \frac{5}{8} = \frac{20}{8} = \frac{5}{2}$<br/>
   Therefore, the expected value of $ X $ is $ \boxed{ \frac{5}{2}} $.
