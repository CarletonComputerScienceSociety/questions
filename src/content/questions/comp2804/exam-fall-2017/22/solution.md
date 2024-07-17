Let's just think about this logically \\
$k$ increments when the dice rolls are the same(no die is greater than the other) \\
No die is greater than the other when the dice rolls are the same \\
\begin{table}[h!]
\centering
\begin{tabular}{c c c c c c c}
& \textbf{1} & \textbf{2} & \textbf{3} & \textbf{4} & \textbf{5} & \textbf{6} \\
\textbf{1} & k+1 & k & k & k & k & k \\
\textbf{2} & k & k+1 & k & k & k & k \\
\textbf{3} & k & k & k+1 & k & k & k \\
\textbf{4} & k & k & k & k+1 & k & k \\
\textbf{5} & k & k & k & k & k+1 & k \\
\textbf{6} & k & k & k & k & k & k+1 \\
\end{tabular}
\end{table}
The probability of returning k or having 2 different rolls is $ \frac{30}{36} $ \\
On Allah, I swear there's a rule that states that we expect to need 1/p attempts until the thing actually happens? Geometric Distribution?
$ p = \frac{30}{36} $ \\
$ \mathbb{E}(X) = \frac{1}{p} $ \\
$ \mathbb{E}(X) = \frac{1}{\frac{30}{36}} $ \\
$ \mathbb{E}(X) = \frac{36}{30} $ \\
$ \mathbb{E}(X) = \frac{6}{5} $
