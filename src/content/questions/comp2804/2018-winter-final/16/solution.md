We'll take a slow and systematic approach to this question

<ul>
    <li> Let S be the set of all possible outcomes <br/> 
    $ |S| = 2^5 = 32$
    <li> Let's determine $A$ <br/> 
    the first three flips are fixed: 1 <br/> 
    the last 2 flips can be either heads or tails: $ 2^2 = 4 $ <br/> 
    $ |A| = 1 \cdot 4 = 4 $ <br/> 
    $ Pr(A) = \frac{4}{32} = \frac{1}{8} $
    <li> Let's determine $B$ <br/> 
    We choose 2 of the 5 positions to be tails: $ \binom{5}{2} $ <br/> 
    We could also choose 3 of the 5 positions to be tails: $ \binom{5}{3} $ <br/> 
    We could also choose 4 of the 5 positions to be tails: $ \binom{5}{4} $ <br/> 
    We could also choose 5 of the 5 positions to be tails: $ \binom{5}{5} $ <br/> 
    $ |B| = \binom{5}{2} + \binom{5}{3} + \binom{5}{4} + \binom{5}{5} $ <br/> 
    $ |B| = 10 + 10 + 5 + 1 $ <br/> 
    $ |B| = 26 $ <br/> 
    $ Pr(B) = \frac{26}{32} = \frac{13}{16} $
    <li> Let's determine $A \cap B$ <br/> 
    If the first three flips are heads and you want to have at least two tails, then the two tails must be the last 2 flips <br/> 
    $ |A \cap B| = 1 $ <br/> 
    $ Pr(A \cap B) = \frac{1}{32} $
</ul>

Now, let's check whether it's independent

$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $

$ \frac{1}{32} = \frac{1}{8} \cdot \frac{13}{16} $

$ \frac{1}{32} = \frac{13}{128} $

Since the two sides are not equal, the events are not independent
