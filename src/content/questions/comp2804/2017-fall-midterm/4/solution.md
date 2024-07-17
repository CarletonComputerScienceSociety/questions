If we want the product to be positive, there are only 3 possibilities: 

1. 5 positive numbers 
   We choose 5 positive numbers from $ m $ positive numbers: $ binom{m}{5} $ 
2. 3 positive numbers and 2 negative numbers 
   We choose 3 positive numbers from $ m $ positive numbers and 2 negative numbers from $ n $ negative numbers: $ binom{m}{3} cdot binom{n}{2} $ 
3. 1 positive number and 4 negative numbers 
   We choose 1 positive number from $ m $ positive numbers and 4 negative numbers from $ n $ negative numbers: $ m cdot binom{n}{4} $ 
   Thus, there are $ binom{m}{5} + binom{m}{3} cdot binom{n}{2} + m cdot binom{n}{4} $ such subsets.
