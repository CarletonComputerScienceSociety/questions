We can calculate the first couple of values of $ C(n) $ to see if we can find a pattern.

$ C(1) = 0 $

$ C(2) = 2 $

<ul>
    <li> $ C(n) = n log{ n } - 1 $ <br/> 
    $ C(1) = 1 log{ 1 } - 1 = 0 $ <br/> 
    $ C(2) = 2 log{ 2 } - 1 = 2 - 1 = 1 $
    <li> $ C(n) = n log{ n } n + 1 $ <br/> 
    $ C(1) = 1 log{ 1 } 1 + 1 = 1 $
    <li> $ C(n) = n log{ n } n $ <br/> 
    $ C(1) = 1 log{ 1 } 1 = 0 $ <br/> 
    $ C(2) = 2 log{ 2 } 2 = 2 $
    <li> $ C(n) = 2n log{ n } n $ <br/> 
    $ C(1) = 2(1) log{ 1 } 1 = 0 $ <br/> 
    $ C(2) = 2(2) log{ 2 } 2 = 4 $
</ul>

Thus, we know that $ C(n) = n log{ n } $ is the correct answer.
