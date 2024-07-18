<ul>
    <li> Let S be the set of all bitstrings <br/> 
    $ |S| = 2^5 $
    <li> Let's determine B <br/> 
    We could choose 1 of the 5 positions to be a 1: $ \binom{5}{1} $ <br/> 
    We could choose 3 of the 5 positions to be a 1: $ \binom{5}{3} $ <br/> 
    We could choose 5 of the 5 positions to be a 1: $ \binom{5}{5} $ <br/> 
    $ |B| = \binom{5}{1} + \binom{5}{3} + \binom{5}{5} $ <br/> 
    $ |B| = 5 + 10 + 1 $ <br/> 
    $ |B| = 16 $ <br/> 
    $ Pr(B) = \frac{16}{32} = \frac{1}{2} $
    <li> Let's determine $A \cap B $. The only valid cases are where the bitstring has 1 1's or 3 1's: <br/> 
    We could choose 1 of the 5 positions to be a 1: $ \binom{5}{1} $ <br/> 
    We could choose 3 of the 5 positions to be a 1: $ \binom{5}{3} $ <br/> 
    $ |A \cap B| = \binom{5}{1} + \binom{5}{3} $ <br/> 
    $ |A \cap B| = 5 + 10 $ <br/> 
    $ |A \cap B| = 15 $ <br/> 
    $ Pr(A \cap B) = \frac{15}{32} $
</ul>

$ Pr(A|B) = \frac{Pr(A \cap B)}{Pr(B)} $

$ Pr(A|B) = \frac{ \frac{15}{32}}{ \frac{1}{2}} $

$ Pr(A|B) = \frac{15}{32} \cdot 2 $

$ Pr(A|B) = \frac{15}{16} $
