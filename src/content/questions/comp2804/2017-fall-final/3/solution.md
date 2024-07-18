<ul>
    <li> Let A be the set of strings that contain exactly 8 many $a$'s <br/> 
    We choose 8 positions out of the 40 positions for the $a$'s: $ \binom{40}{8} $ <br/> 
    The remaining 32 positions can be filled with either $b$ or $c$: $ 2^{32} $ <br/> 
    $ |A| = \binom{40}{8} \cdot 2^{32} $
    <li> Let B be the set of strings that contain exactly 7 many $b$'s <br/> 
    We choose 7 positions out of the 40 positions for the $b$'s: $ \binom{40}{7} $ <br/> 
    The remaining 33 positions can be filled with either $a$ or $c$: $ 2^{33} $ <br/> 
    $ |B| = \binom{40}{7} \cdot 2^{33} $
    <li> Let $ A \cap B $ be the set of strings that contain exactly 8 many $a$'s and 7 many $b$'s <br/> 
    We choose 15 positions out of the 40 positions for the $a$'s and $b$'s: $ \binom{40}{15} $ <br/> 
    Within those 15 positions, we choose 8 of them to be $a$'s: $ \binom{15}{8} $ <br/> 
    $ |A \cap B| = \binom{40}{15} \cdot \binom{15}{8} $
</ul>

In total, there are $ \binom{40}{8} \cdot 2^{32} + \binom{40}{7} \cdot 2^{33} - \binom{40}{15} \cdot \binom{15}{8} $ cool strings.
