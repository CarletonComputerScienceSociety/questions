1. **Possible Outcomes and Corresponding Values:**<br/>
   There are four possible outcomes when flipping two fair coins:
   <ul>
      <li> First coin is heads (H), second coin is heads (H): $(H, H)$
      <li> First coin is heads (H), second coin is tails (T): $(H, T)$
      <li> First coin is tails (T), second coin is heads (H): $(T, H)$
      <li> First coin is tails (T), second coin is tails (T): $(T, T)$
   </ul>

2. **Winning Amount for Each Outcome:**<br/>
   For each outcome, we determine the amount $ X $ that you win:
   <ul>
      <li> $(H, H)$: The first coin is heads, so we don't lose. <br/>
      The second coin is heads, so we win 1 dollar. <br/>
      Thus, $ X = 1 $.
      <li> $(H, T)$: The first coin is heads, so we don't lose. <br/>
      The second coin is tails, so we don't win. <br/>
      Thus, $ X = 0 $.
      <li> $(T, H)$: The first coin is tails, so we lose (i.e., we win $-1$ dollars). <br/>
      The second coin is heads, so we win 1 dollar, but since the first coin being tails means we lose, this overrides the second coin's result. <br/>
      Thus, $ X = -1 $.
      <li> $(T, T)$: The first coin is tails, so we lose (i.e., we win $-1$ dollars). <br/>
      The second coin is tails, so we don't win. Thus, $ X = -1 $.
   </ul>

3. **Calculate the Expected Value $ E(X) $:**<br/>
The expected value $ E(X) $ is calculated using the formula:<br/>
$E(X) = sum\_{i} P(X = x_i) \cdot x_i $<br/>
Each of the four outcomes has a probability of $ \frac{1}{4} $, as the coins are fair and independent.<br/>
Therefore, we have:
<ul>
   <li> $ P(X = 1) = \frac{1}{4} $ (from the $(H, H)$ outcome)
   <li> $ P(X = 0) = \frac{1}{4} $ (from the $(H, T)$ outcome)
   <li> $ P(X = -1) = \frac{1}{2} $ (from the $(T, H)$ and $(T, T)$ outcomes combined)
</ul>

4. **Substitute the Values into the Expected Value Formula:**<br/>
   $E(X) = 1 \cdot \frac{1}{4} + 0 \cdot \frac{1}{4} + (-1) \cdot \frac{1}{2}$<br/>
   $E(X) = \frac{1}{4} + 0 - \frac{1}{2}$<br/>
   $E(X) = \frac{1}{4} - \frac{2}{4}$<br/>
   $E(X) = -\frac{1}{4}$

Therefore, the expected value of $ X $ is $ \boxed{-\frac{1}{4}} $.
