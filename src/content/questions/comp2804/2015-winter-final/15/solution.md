Rephrased, it's asking text{What are the chances that the product is positive?} 
The product is positive if there are an even number of negative integers in the subset. 
0 negatives and 30 positives: $ binom{70}{0} binom{30}{20} $ 
2 negatives and 28 positives: $ binom{70}{2} binom{30}{18} $ 
4 negatives and 26 positives: $ binom{70}{4} binom{30}{16} $ 
The pattern is $ sum*{i=0}^{10} binom{70}{2i} binom{30}{20-2i} $ 
To get the probability, we need to divide by $ binom{100}{20} $ for each case 
Thus, the final answer is $ binom{100}{20} sum*{i=0}^{10} binom{70}{2i} binom{30}{20-2i} $
