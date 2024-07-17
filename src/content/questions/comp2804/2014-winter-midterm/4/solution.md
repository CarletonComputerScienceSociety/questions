<ul>
<li> A = set of subsets that contain x but not z 
We can take for granted that one of the element has a fixed possibility of being x: 1 
Since $z$ can't be in this subset and $x$ is in this subset, we can create subsets from the remaining 35 elements. 
$|A| = 2^{35} $
	<li> B = set of subsets that contain y but not z 
	      We can take for granted that one of the element has a fixed possibility of being y: 1 
	      Since $z$ can't be in this subset and $y$ is in this subset, we can create subsets from the remaining 35 elements. 
$|B| = 2^{35} $
	<li> Now, let's try to determine $ A cap B $, which is, enquote{subsets that have x and don't have z and have y and don't have z} 
	      We can take for granted that one of the element has a fixed possibility of being x: 1 
	      We can take for granted that one of the element has a fixed possibility of being y: 1 
	      Since $z$ can't be in this subset and $x$ and $y$ are in this subset already, we can create subsets from the remaining 34 elements. 
$|A cap B| = 2^{34} $
</ul>
$|A cup B| = |A| + |B| - |A cap B|$ 
$|A cup B| = 2^{35} + 2^{35} - 2^{34}$ 
$|A cup B| = (1+1) \cdot 2^{35} - 2^{34}$ 
$|A cup B| = 2 \cdot 2^{35} - 2^{34}$ 
$|A cup B| = 2^{36} - 2^{34}$
