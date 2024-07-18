<ul>
    <li> Let's determine $ A $ <br/> 
    As discussed in the solution to question 11, the probability of getting an even number of heads is the same as getting an odd number of heads <br/> 
    $ Pr(A) = \frac{1}{2} $
    <li> Let's determine $ B $ <br/> 
    We choose 0 tails out of the 3 flips: $ \binom{3}{0} = 1 $ <br/> 
    We choose 1 tail out of the 3 flips: $ \binom{3}{1} = 3 $ <br/> 
    $ |B| = 1 + 3 = 4 $ <br/> 
    $ Pr(B) = \frac{4}{8} = \frac{1}{2} $
    <li> Let's determine $ A \cap B $ <br/> 
    We need an even number of heads at at most 1 tail <br/> 
    In the case of 0 tails, we have 3 heads, which means an odd number of heads: 0 <br/> 
    In the case of 1 tail, we have 2 heads, which means an even number of heads <br/> 
    We choose 1 tail out of the 3 flips: $ \binom{3}{1} = 3 $ <br/> 
    $ |A \cap B| = 3 $ <br/> 
    $ Pr(A \cap B) = \frac{3}{8} $
</ul>

Now, let's check whether they're independent

$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $

$ \frac{3}{8} = \frac{1}{2} \cdot \frac{1}{2} $

$ \frac{3}{8} = \frac{1}{4} $
