textbf{Plaintext Question:} The function $ f: mathbb{N} rightarrow mathbb{N} $
is recursively defined as follows:
$ f(0) = 6, $
$ f(n) = 4 cdot f(n-1) + 2^{n} text{ if } n geq 1. $
Which of the following is true for all integers $ n geq 0 $? 
textbf{Correct Answer: } B 
textbf{Relevant Theorems: } Recursive Functions (4.1) 
textbf{Explanation: } 
We can find the first few values of $ f(n) $ to find a pattern: 
$ f(1) = 4 cdot f(0) + 2^1 = 4 cdot 6 + 2 = 26 $
$ f(2) = 4 cdot f(1) + 2^2 = 4 cdot 26 + 4 = 108 $

<ul>
<li> $ f(n) = 6 cdot 4^{n} - 2^{n} $ 
$ f(1) = 6 cdot 4^{1} - 2^{1} = 24 - 2 = 22 $
<li> $ f(n) = 7 cdot 4^{n} - 2^{n} $
$ f(1) = 7 cdot 4^{1} - 2^{1} = 28 - 2 = 26 $
<li> $ f(n) = 8 cdot 4^{n} - 2^{n+1} $ 
$ f(1) = 8 cdot 4^{1} - 2^{2} = 32 - 4 = 28 $
</ul>
Thus, the correct answer is $ f(n) = 7 cdot 4^{n} - 2^{n} $.
