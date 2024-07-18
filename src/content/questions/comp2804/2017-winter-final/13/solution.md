<ul>
    <li> Let S be all possible outcomes of the coin flips: $ |S| = 2^5 = 32 $
    <li> Let's determine B <br/> 
    There is a fifth coin flip is heads: 1 <br/> 
    The other 4 coin flips can be any combination of heads and tails: $ 2^4 = 16 $ <br/> 
    $ |B| = 16 $ <br/> 
    $ Pr(B) = \frac{16}{32} = \frac{1}{2} $
    <li> Let's determine $ A \cap B $ <br/> 
    Since the fifth coin flip results in heads, we choose 1 tails for one of the first 4 coin flips: 4 <br/> 
    $ | B \cap A | = 4 $ <br/> 
    $ Pr(A \cap B) = \frac{4}{32} = \frac{1}{8} $
</ul>
$ Pr(A|B) = \frac{ Pr(A \cap B) }{ Pr(B) } $ 
$ Pr(A|B) = \frac{ \frac{1}{8} }{ \frac{1}{2} } $ 
$ Pr(A|B) = \frac{1}{8} \cdot \frac{2}{1} $ 
$ Pr(A|B) = \frac{1}{4} $
