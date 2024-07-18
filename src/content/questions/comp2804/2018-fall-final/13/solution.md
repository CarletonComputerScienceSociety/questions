<ul>
    <li> Let's determine $ B $ <br/> 
    What we care about is when we get an $a$ so let's map that out with a table <br/> 
    begin{table}[h!] <br/> 
    centering <br/> 
    begin{tabular}{c c c c c c c} <br/> 
    & textbf{a} & textbf{b} & textbf{b} & textbf{c} & textbf{c} & textbf{c} <br/> 
    textbf{a} & a & a & a & a & a & a <br/> 
    textbf{b} & a & NA & NA & NA & NA & NA <br/> 
    textbf{b} & a & NA & NA & NA & NA & NA <br/> 
    textbf{c} & a & NA & NA & NA & NA & NA <br/> 
    textbf{c} & a & NA & NA & NA & NA & NA <br/> 
    textbf{c} & a & NA & NA & NA & NA & NA <br/> 
    end{tabular} <br/> 
    end{table} <br/> 
    $ |B| = 11 $ <br/> 
    $ Pr(B) = \frac{11}{36} $
    <li> Let's determine $ A \cap B $ <br/> 
    We only care about the cases when both rolls result in the same letter AND at least one of the rolls result in the letter $a$ <br/> 
    begin{table}[h!] <br/> 
    centering <br/> 
    begin{tabular}{c c c c c c c} <br/> 
    & textbf{a} & textbf{b} & textbf{b} & textbf{c} & textbf{c} & textbf{c} <br/> 
    textbf{a} & a & NA & NA & NA & NA & NA <br/> 
    textbf{b} & NA & NA & NA & NA & NA & NA <br/> 
    textbf{b} & NA & NA & NA & NA & NA & NA <br/> 
    textbf{c} & NA & NA & NA & NA & NA & NA <br/> 
    textbf{c} & NA & NA & NA & NA & NA & NA <br/> 
    textbf{c} & NA & NA & NA & NA & NA & NA <br/> 
    end{tabular} <br/> 
    end{table} <br/> 
    $ |A \cap B| = 1 $ <br/> 
    $ Pr(A \cap B) = \frac{1}{36} $
</ul>
$ Pr(A|B) = \frac{ Pr(A \cap B) }{ Pr(B) } $ 
$ Pr(A|B) = \frac{ \frac{1}{36} }{ \frac{11}{36} } $ 
$ Pr(A|B) = \frac{1}{11} $
