<ul>
<li> Let S be all possible subsets of size 5: $ |S| = \binom{10}{5} $
	<li> Let's determine A 
	      First, pick 1: 1 
	      Then we pick 4 more numbers from the remaining 9: $ \binom{9}{4} $ 
	      $ |A| = \binom{9}{4} $ 
	      $ Pr(A) = \frac{ \binom{9}{4} }{ \binom{10}{5} } = \frac{9!}{5!4!} div \frac{10!}{5!5!} = \frac{9!}{5!4!} \cdot \frac{5!5!}{10!} = \frac{1}{4!} \cdot \frac{5!}{10} = \frac{1}{1} \cdot \frac{5}{10} = \frac{1}{2} $
	<li> Let's determine B 
	      First, pick 7: 1 
	      Then we pick 4 more numbers from the remaining 9: $ \binom{9}{4} $ 
	      $ |B| = \binom{9}{4} $ 
	      $ Pr(B) = \frac{ \binom{9}{4} }{ \binom{10}{5} } = \frac{9!}{5!4!} div \frac{10!}{5!5!} = \frac{9!}{5!4!} \cdot \frac{5!5!}{10!} = \frac{1}{4!} \cdot \frac{5!}{10} = \frac{1}{1} \cdot \frac{5}{10} = \frac{1}{2} $
	<li> Let's determine $ A \cap B $ 
	      First, pick 1: 1 
	      Second, pick 7: 1 
	      Then we pick 3 more numbers from the remaining 8: $ \binom{8}{3} $ 
	      $ |A \cap B| = \binom{8}{3} $ 
	      $ Pr(A \cap B) = \frac{ \binom{8}{3} }{ \binom{10}{5} } = \frac{8!}{5!3!} div \frac{10!}{5!5!} = \frac{8!}{5!3!} \cdot \frac{5!5!}{10!} = \frac{8!}{3!} \cdot \frac{5!}{10!} = \frac{1}{3!} \cdot \frac{5!}{10 \cdot 9} = \frac{1}{1} \cdot \frac{5 \cdot 4}{10 \cdot 9} = \frac{5 \cdot 2}{5 \cdot 9} = \frac{2}{9} $
</ul>
$ Pr(A|B) = \frac{ Pr(A \cap B) }{ Pr(B) } $ 
$ Pr(A|B) = \frac{ \frac{2}{9} }{ \frac{1}{2} } $ 
$ Pr(A|B) = \frac{2}{9} \cdot \frac{2}{1} $ 
$ Pr(A|B) = \frac{4}{9} $