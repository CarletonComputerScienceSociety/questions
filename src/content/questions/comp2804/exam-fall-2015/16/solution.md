<ul>
<li> Let's determine C \\
We choose 5 of the 31 days in December: $ \binom{31}{5} $ \\
The remaining 15 quizzes can be on any of the 334 days in the year: $ \binom{334}{15} $ \\
$ |C| = \binom{31}{5} \cdot \binom{334}{15} $ \\
$ \Pr(C) = \frac{\binom{31}{5} \cdot \binom{334}{15}}{\binom{365}{20}} $
<li> Let's determine $ B \cap C $ \\
1 of the days in December is Nick's birthday, so that's fixed: 1 \\
We choose 4 of the remaining 30 days in December: $ \binom{30}{4} $ \\
The remaining 15 quizzes can be on any of the 334 days in the year: $ \binom{334}{15} $ \\
$ |B \cap C| = \binom{30}{4} \cdot \binom{334}{15} $ \\
$ \Pr(B \cap C) = \frac{\binom{30}{4} \cdot \binom{334}{15}}{\binom{365}{20}} $
<li> $ \Pr(B|C) = \frac{\Pr(B \cap C)}{\Pr(C)} $ \\
$ \Pr(B|C) = \frac{\frac{\binom{30}{4} \cdot \binom{334}{15}}{\binom{365}{20}}}{\frac{\binom{31}{5} \cdot \binom{334}{15}}{\binom{365}{20}}} $ \\
$ \Pr(B|C) = \frac{\binom{30}{4}}{\binom{31}{5}} $ \\
$ \Pr(B|C) = \frac{\frac{30!}{4! \cdot 26!}}{\frac{31!}{5! \cdot 26!}} $ \\
$ \Pr(B|C) = \frac{30! \cdot 26! \cdot 5!}{4! \cdot 26! \cdot 31!} $ \\
$ \Pr(B|C) = \frac{30! \cdot 5!}{4! \cdot 31!} $ \\
$ \Pr(B|C) = \frac{30! \cdot 5 \cdot 4!}{4! \cdot 31 \cdot 30!} $ \\
$ \Pr(B|C) = \frac{5}{31} $
</ul>
