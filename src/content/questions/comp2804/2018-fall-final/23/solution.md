Alright. So let's just linear algebra the hell outta this question

Let $X_i$ be 1 if the student gets the question right and -z if the student gets the question wrong

<ul>
    <li> $X_i = 1$ if the student gets the question right <br/> 
    $ Pr(X_i = 1) = \frac{1}{4} $
    <li> $X_i = -z$ if the student gets the question wrong <br/> 
    $ Pr(X_i = -z) = \frac{3}{4} $
</ul>

$ 0 = \sum\_{k=1}^{25} ( 1 \cdot Pr(X_i = 1) ) + \sum\_{k=1}^{25} ( -z \cdot Pr(X_i = -z) ) $

$ 0 = \sum\_{k=1}^{25} ( 1 \cdot \frac{1}{4} ) + \sum\_{k=1}^{25} ( -z \cdot \frac{3}{4} ) $

$ 0 = 25 \cdot ( 1 \cdot \frac{1}{4} ) + 25(-z \cdot \frac{3}{4}) $

$ 0 = 25 \cdot \frac{1}{4} - 25z \cdot \frac{3}{4} $

$ 0 = \frac{25}{4} - \frac{75z}{4} $

$ 0 = 25 - 75z $

$ 75z = 25 $

$ z = \frac{25}{75} $

$ z = \frac{1}{3} $
