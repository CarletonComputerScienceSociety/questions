Let's take a look at what $ g(n) $ could be. 
$ g(0) = 1 $ 
$ g(1) = 5 cdot 1 = 5 $ 
$ g(2) = 5 cdot 5 = 25 $ 
$ g(n) = 5^n $ 
Now, let's take a look at what $ f(g(n),g(n)) $ could be. 
Because $ f(g(n),g(n)) $ decreases n by 1, the call to $ +1 $ will be called $ g(n) $ times. 
Once the second argument reaches 0, the function will add $ g(n) $ 
So in conclusion, the formula is: 
$ [1 + 1 + 1 ldots + 1] + g(n) $ 
$ =[1 cdot g(n)] + [g(n)] $ 
$ =g(n) + g(n) $ 
$ =2 g(n) $
$ =2 cdot 5^n $
