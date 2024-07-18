<ul>
    <li> Let's determine C <br/> 
    We choose 5 of the 31 days in December: $ \binom{31}{5} $ <br/> 
    The remaining 15 quizzes can be on any of the 334 days in the year: $ \binom{334}{15} $ <br/> 
    $ |C| = \binom{31}{5} \cdot \binom{334}{15} $ <br/> 
    $ Pr(C) = \frac{\binom{31}{5} \cdot \binom{334}{15}}{\binom{365}{20}} $
    <li> Let's determine $ B \cap C $ <br/> 
    1 of the days in December is Nick's birthday, so that's fixed: 1 <br/> 
    We choose 4 of the remaining 30 days in December: $ \binom{30}{4} $ <br/> 
    The remaining 15 quizzes can be on any of the 334 days in the year: $ \binom{334}{15} $ <br/> 
    $ |B \cap C| = \binom{30}{4} \cdot \binom{334}{15} $ <br/> 
    $ Pr(B \cap C) = \frac{\binom{30}{4} \cdot \binom{334}{15}}{\binom{365}{20}} $
    <li> $ Pr(B|C) = \frac{Pr(B \cap C)}{Pr(C)} $ <br/> 
    $ Pr(B|C) = \frac{ \frac{\binom{30}{4} \cdot \binom{334}{15}}{\binom{365}{20}}}{ \frac{\binom{31}{5} \cdot \binom{334}{15}}{\binom{365}{20}}} $ <br/> 
    $ Pr(B|C) = \frac{\binom{30}{4}}{\binom{31}{5}} $ <br/> 
    $ Pr(B|C) = \frac{ \frac{30!}{4! \cdot 26!}}{ \frac{31!}{5! \cdot 26!}} $ <br/> 
    $ Pr(B|C) = \frac{30! \cdot 26! \cdot 5!}{4! \cdot 26! \cdot 31!} $ <br/> 
    $ Pr(B|C) = \frac{30! \cdot 5!}{4! \cdot 31!} $ <br/> 
    $ Pr(B|C) = \frac{30! \cdot 5 \cdot 4!}{4! \cdot 31 \cdot 30!} $ <br/> 
    $ Pr(B|C) = \frac{5}{31} $
</ul>
