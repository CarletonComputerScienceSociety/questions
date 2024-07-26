ngl, I have no idea how the right answer is the right answer. Let's just do this and let the math take us to heaven or hell

Since they're standing in a cirlce, the last person has the first person to their right. That means we consider every single person

<ul>
	<li> Let S be the set of all possible coin tosses for $p_i$ and his/her neighbours <br/>
	$ |S| = 2^3 = 8 $
	<li> Let A be the event that $p_i$ says Huzzah when they get a head
	$p_i$ gets a head: 1 <br/>
	$p_{i-1}$ must get a tail: 1 <br/>
	$p_{i+1}$ must get a tail: 1 <br/>
	$ |A| = 1 $ <br/>
	$ \Pr(A) = \frac{1}{8} $
	<li> Let B be the event that $p_i$ says Huzzah when they get a tail <br/>
	$p_i$ gets a tail: 1 <br/>
	$p_{i-1}$ must get a head: 1 <br/>
	$p_{i+1}$ must get a head: 1 <br/>
	$ |B| = 1 $ <br/>
	$ \Pr(B) = \frac{1}{8} $
	<li> A and B are mutually exclusive, so let's just calculate their union<br/>
	$ \Pr(A \cup B) = \Pr(A) + \Pr(B) $ <br/>
	$ \Pr(A \cup B) = \frac{1}{8} + \frac{1}{8} $ <br/>
	$ \Pr(A \cup B) = \frac{2}{8} $ <br/>
	$ \Pr(A \cup B) = \frac{1}{4} $
</ul>

$E(X) = \sum\_{i=1}^{n} 1 \cdot \Pr(A \cup B) $

$E(X) = n \cdot \Pr(A \cup B) $

$E(X) = n \cdot \frac{1}{4} $

$E(X) = \frac{n}{4} $
