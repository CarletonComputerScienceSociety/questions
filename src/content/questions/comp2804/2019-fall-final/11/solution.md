<ul>
    <li> Let S be the set of all possibilities <br/> 
    $ |S| = 4^{25} $
    <li> Let A be the set where we answer 17 correctly <br/> 
    We choose 17 of the 25 questions to be correct: $ \binom{25}{17} $ <br/> 
    The remaining 8 each have 3 possible incorrect answers: $ 3^{8} $ <br/> 
    $ |A| = \binom{25}{17} \cdot 3^{8} $
</ul>
$ Pr(A) = \frac{|A|}{|S|} $ 
$ Pr(A) = \frac{\binom{25}{17} \cdot 3^{8}}{4^{25}} $
$ Pr(A) = \binom{25}{17} \cdot {( \frac{3}{4})}^8 \cdot {( \frac{1}{4})}^{17} $
