\begin{enumerate}
\item Let $ A $ be the set of passwords with one digit \\
There are $ 10 $ ways to choose the position of the digit: 10 \\
The digit has $ 10 $ possible outcomes $ ( \{ 0,1,2,3,4,5,6,7,8,9 \} ) $: 10 \\
	      The remaining 9 characters each have 26 possible outcomes \\
	      $ ( \{ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z \} )$: $26^9 $ \\
	      $ |A| = 10 \times 10 \times 26^9 $
	\item Let $ B $ be the set of passwords with two digits \\
	      There are 10 positions to choose 2 digits: $ \binom{10}{2} $ \\
	      The two digits combined have $ 10 \times 10 $ possible outcomes: $10^2$ \\
The remaining 8 characters each have 26 possible outcomes: $ 26^8 $ \\
$ |B| = \binom{10}{2} \times 10^2 \times 26^8 $
	\item Let $ C $ be the set of passwords with three digits \\
	      There are 10 positions to choose 3 digits: $ \binom{10}{3} $ \\
	      The three digits have $ 10 \times 10 \times 10 $ possible outcomes: $10^3$ \\
The remaining 7 characters each have 26 possible outcomes: $ 26^7 $ \\
$ |C| = \binom{10}{3} \times {10}^3 \times 26^7 $
\end{enumerate}
The total number of passwords is the sum of the passwords in sets $ A $, $ B $, or $ C $: \\
$ |A| + |B| + |C| $ \\
$ = \binom{10}{1} \times 10 \times 26^9 + \binom{10}{2} \times 10^2 \times 26^8 + \binom{10}{3} \times 10^3 \times 26^7 $
