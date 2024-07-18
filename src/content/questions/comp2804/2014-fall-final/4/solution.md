<ul>
    <li> A = Event that the bitstring starts with 010 <br/>
    Since the bitstring starts with 010, the first 3 digits must be 010 <br/>
    The remaining 10 digits can be chosen from the set {0,1}, so there are $ 2^{10} $ ways to choose the remaining digits <br/>
    $ |A| = 2^{10} $
    <li> B = Event that the bitstring ends with 11 <br/>
    Since the bitstring ends with 11, the last 2 digits must be 11 <br/>
    The remaining 11 digits can be chosen from the set {0,1}, so there are $ 2^{11} $ ways to choose the remaining digits <br/>
    $ |B| = 2^{11} $
    <li> $ A \cap B $ = Event that the bitstring starts with 010 and ends with 11 <br/>
    Since the bitstring starts with 010 and ends with 11, the first 3 digits must be 010 and the last 2 digits must be 11 <br/>
    The remaining 8 digits can be chosen from the set {0,1}, so there are $ 2^8 $ ways to choose the remaining digits<br/> 
    $ |A \cap B| = 2^8 $
</ul>

$ |A \cup B| = |A| + |B| - |A \cap B| $

$ |A \cup B| = 2^{10} + 2^{11} - 2^8 $

$ |A \cup B| = 1 \cdot 2^{10} + 2 \cdot 2^{10} - 2^8$

$ |A \cup B| = (1+2) \cdot 2^{10} - 2^8 $

$ |A \cup B| = 3 \cdot 2^{10} - 2^8 $
