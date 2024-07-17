Okay. This is a loaded question, so let's break it down
<ul>
<li> Let's find the expected value of $Y$ \\
The first student has a $ \frac{1}{n} $ chance of receiving a gift of $v_1$ \\
The second student has a $ \frac{1}{n} $ chance of receiving a gift of $v_2$ \\
\ldots \\
The $n$th student has a $ \frac{1}{n} $ chance of receiving a gift of $v_n$ \\
$ \mathbb{E}(Y) = \sum*{i=1}^{n} \frac{v_i}{n} $ \\
$ \mathbb{E}(Y) = \frac{1}{n} \sum*{i=1}^{n} v*i $
	<li> Let's find the expected value of $Z$ \\
The first student has a $ \frac{1}{n} $ chance of receiving a gift of $v_1$ \\
The second student has a $ \frac{1}{n} $ chance of receiving a gift of $v_2$ \\
\ldots \\
The $n$th student has a $ \frac{1}{n} $ chance of receiving a gift of $v_n$ \\
$ \mathbb{E}(Z) = \sum*{i=1}^{n} \frac{v*i}{n} $ \\
$ \mathbb{E}(Z) = \frac{1}{n} \sum*{i=1}^{n} v*i $
</ul>
$ \mathbb{E}(2 \cdot Y - Z) $ \\
$ = \mathbb{E}(2 \cdot Y) - \mathbb{E}(Z) $ \\
$ = 2 \cdot \mathbb{E}(Y) - \mathbb{E}(Z) $ \\
$ = 2 \cdot \frac{1}{n} \sum*{i=1}^{n} v*i - \frac{1}{n} \sum*{i=1}^{n} v*i $ \\
$ = \frac{2}{n} \sum*{i=1}^{n} v*i - \frac{1}{n} \sum*{i=1}^{n} v*i $ \\
$ = \frac{2 - 1}{n} \sum*{i=1}^{n} v*i $ \\
$ = \frac{1}{n} \sum*{i=1}^{n} v*i $ \\
$ = \sum*{i=1}^{n} \frac{v_i}{n} $
