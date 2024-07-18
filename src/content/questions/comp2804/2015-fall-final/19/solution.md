Okay. This is a loaded question, so let's break it down

<ul>
    <li> Let's find the expected value of $Y$ <br/> 
    The first student has a $ \frac{1}{n} $ chance of receiving a gift of $v_1$ <br/> 
    The second student has a $ \frac{1}{n} $ chance of receiving a gift of $v_2$ <br/> 
    ... <br/> 
    The $n$th student has a $ \frac{1}{n} $ chance of receiving a gift of $v_n$ <br/> 
    $ \mathbb{E}(Y) = \sum_{i=1}^{n} \frac{v_i}{n} $ <br/> 
    $ \mathbb{E}(Y) = \frac{1}{n} \sum_{i=1}^{n} v\_i $
    <li> Let's find the expected value of $Z$ <br/> 
    The first student has a $ \frac{1}{n} $ chance of receiving a gift of $v_1$ <br/> 
    The second student has a $ \frac{1}{n} $ chance of receiving a gift of $v_2$ <br/> 
    ... <br/> 
    The $n$th student has a $ \frac{1}{n} $ chance of receiving a gift of $v_n$ <br/> 
    $ \mathbb{E}(Z) = \sum_{i=1}^{n} \frac{v\_i}{n} $ <br/> 
    $ \mathbb{E}(Z) = \frac{1}{n} \sum_{i=1}^{n} v\_i $
</ul>

$ \mathbb{E}(2 \cdot Y - Z) $

$ = \mathbb{E}(2 \cdot Y) - \mathbb{E}(Z) $

$ = 2 \cdot \mathbb{E}(Y) - \mathbb{E}(Z) $

$ = 2 \cdot \frac{1}{n} \sum\_{i=1}^{n} v_i - \frac{1}{n} \sum\_{i=1}^{n} v_i $

$ = \frac{2}{n} \sum\_{i=1}^{n} v_i - \frac{1}{n} \sum\_{i=1}^{n} v_i $

$ = \frac{2 - 1}{n} \sum\_{i=1}^{n} v_i $

$ = \frac{1}{n} \sum\_{i=1}^{n} v_i $

$ = \sum\_{i=1}^{n} \frac{v_i}{n} $
