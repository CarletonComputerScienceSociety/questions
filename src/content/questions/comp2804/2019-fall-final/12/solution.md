I've been playing an MMO RPG called Orna recently. It uses GPS and forces me to touch grass

<ul>
    <li> Let S be the set of all possibilities <br/> 
    $ |S| = 2^5 = 32 $
    <li> Let's determine A <br/> 
    There are 2 possible starts to the bitstring: 101 and 110: 2 <br/> 
    The remaining 2 bitstrings can be any of the 2 bits: $ 2^2 = 4 $ <br/> 
    $ |A| = 2 \cdot 4 = 8 $ <br/> 
    $ Pr(A) = \frac{8}{32} = \frac{1}{4} $
    <li> Let's determine B <br/> 
    There is only 1 possible end to the bitstring: 111: 1 <br/> 
    The first 2 bitstrings can be any of the 2 bits: $ 2^2 = 4 $ <br/> 
    $ |B| = 1 \cdot 4 = 4 $ <br/> 
    $ Pr(B) = \frac{4}{32} = \frac{1}{8} $
    <li> Now, let's determine $ A \cap B $ <br/> 
    The last 3 bits are 111: 1 <br/> 
    The first 3 bits are 101 and can't be 110 because the third bit as discussed above is a 1: 1 <br/> 
    $ |A \cap B| = 1 $ <br/> 
    $ Pr(A \cap B) = \frac{1}{32} $
</ul>

Now, let's check whether it's independent

$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $

$ \frac{1}{32} = \frac{1}{4} \cdot \frac{1}{8} $

$ \frac{1}{32} = \frac{1}{32} $

BOOM. THE RESULTS SPEAK FOR THEMSELVES. HAPPY INDEPENDENCE DAY. MURICAAAA
