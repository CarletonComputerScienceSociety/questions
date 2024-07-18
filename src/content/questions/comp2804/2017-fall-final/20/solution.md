Let's explain why some are wrong and one is right

<ul>
    <li> ${\sum_{k=1}^{100}} k \cdot \frac{k^{2}}{100^{2}}$ <br/> 
    This equation says, \enquote{The probability that k is the max value and each value has 1 to k values to be} <br/> 
    This doesn't work because it's saying that the max value is k if $a$ is 1 and $b$ is 1
    <li> ${\sum_{k=1}^{100}} k \cdot \frac{k(k-1)}{100^{2}}$ <br/> 
    This equation says, \enquote{a can be any value from 1 to k and b can be any value from 1 to k-1} <br/> 
    This doesn't work because it's saying that the max value is k if $a$ is $k-1$ and $b$ is $k-2$
    <li> ${\sum_{k=1}^{100}} k \cdot \frac{2k}{100^{2}}$ <br/> 
    This equation says, \enquote{a can be any value from 1 to k and b can be any value from 1 to k} <br/> 
    This doesn't work because it's saying that the max value is k if $a$ is 1 and $b$ is 1
    <li> ${\sum_{k=1}^{100}} k \cdot bigg( \frac{1+2(k-1)}{100^{2}}bigg)$ <br/> 
    This one actually has multiple possibilities <br/> 
    <ul>
        <li> $a = k$ and $b = k$: 1 possibility
        <li> $a = k$ and $b$ is any value less than k: $k(k-1)$ possibilities
        <li> $a$ is any value less than k and $b = k$: $(k-1)k$ possibilities
    </ul>
    Summing them up, we get $1 + 2 \cdot k(k-1) $ 
    Each of the tree posibilities above makes sure that the max value is k
</ul>
