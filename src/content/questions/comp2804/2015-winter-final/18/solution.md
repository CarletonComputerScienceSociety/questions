<ul>
    <li> Let S be the set of all bitstrings of length 5. <br/> 
    $ |S| = 2^5 $
    <li> A occurs when there are 1, 3, or 5 0s in the bitstring. <br/> 
    $ |A| = \binom{5}{1} + \binom{5}{3} + \binom{5}{5} $ <br/> 
    $ |A| = 5 + 10 + 1 $ <br/> 
    $ |A| = 16 $ <br/> 
    $ Pr(A) = \frac{\binom{5}{1} + \binom{5}{3} + \binom{5}{5}}{2^5} $ <br/> 
    $ Pr(A) = \frac{16}{2^5} $ <br/> 
    $ Pr(A) = \frac{2^4}{2^5} $ <br/> 
    $ Pr(A) = \frac{1}{2} $
    <li> B occurs when the first 3 bits are 111. <br/> 
    This leaves the remaining 2 bits free to be any combination of 0s and 1s: $2^2$ <br/> 
    $ |B| = 2^2 $ <br/> 
    $ Pr(B) = \frac{2^2}{2^5} $ <br/> 
    $ Pr(B) = \frac{1}{2^3} $
    <li> $ A \cap B $ occurs when the first 3 bits are 111 and there is 1 0 <br/> 
    The 0 can be at either position 4 or 5: 2 <br/> 
    The other bit is forced to be a 1: 1 <br/> 
    $ |A \cap B| = 2 $ <br/> 
    $ Pr(A \cap B) = \frac{2}{2^5} $ <br/> 
    $ Pr(A \cap B) = \frac{1}{2^4} $
</ul>

If they are independent, the probability of both events occurring is the product of the probabilities of each event occurring.

$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $

$ \frac{1}{2^4} = \frac{1}{2} \cdot \frac{1}{2^3} $

$ \frac{1}{2^4} = \frac{1}{2^4} $

$ 1 = 1 $

Since the equation is true, A and B are independent.
