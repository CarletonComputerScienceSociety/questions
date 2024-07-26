First, we choose which $k$ of the $n$ pairs will contain a 5: $ \binom{n}{k} $

As can be seen $ \Pr(D*i+D*{i+1}=5) = \frac{4}{36} = \frac{1}{9} $

The remaining sum roles can be anything but 5: $ {(\frac{8}{9})}^{n-k} $

Thus, the final answer is $ \binom{n}{k} \cdot {(\frac{1}{9})}^{k} \cdot {(\frac{8}{9})}^{n-k} $
