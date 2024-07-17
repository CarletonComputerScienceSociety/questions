I've been playing an MMO RPG called Orna recently. It uses GPS and forces me to touch grass
<ul>
<li> Let S be the set of all possibilities \\
$ |S| = 2^5 = 32 $
	<li> Let's determine A \\
	      There are 2 possible starts to the bitstring: 101 and 110: 2 \\
	      The remaining 2 bitstrings can be any of the 2 bits: $ 2^2 = 4 $ \\
	      $ |A| = 2 \cdot 4 = 8 $ \\
	      $ \Pr(A) = \frac{8}{32} = \frac{1}{4} $
	<li> Let's determine B \\
	      There is only 1 possible end to the bitstring: 111: 1 \\
	      The first 2 bitstrings can be any of the 2 bits: $ 2^2 = 4 $ \\
	      $ |B| = 1 \cdot 4 = 4 $ \\
	      $ \Pr(B) = \frac{4}{32} = \frac{1}{8} $
	<li> Now, let's determine $ A \cap B $ \\
	      The last 3 bits are 111: 1 \\
	      The first 3 bits are 101 and can't be 110 because the third bit as discussed above is a 1: 1 \\
	      $ |A \cap B| = 1 $ \\
	      $ \Pr(A \cap B) = \frac{1}{32} $
</ul>
Now, let's check whether it's independent \\
$ \Pr(A \cap B) = \Pr(A) \cdot \Pr(B) $ \\
$ \frac{1}{32} = \frac{1}{4} \cdot \frac{1}{8} $ \\
$ \frac{1}{32} = \frac{1}{32} $ \\
BOOM. THE RESULTS SPEAK FOR THEMSELVES. HAPPY INDEPENDENCE DAY. MURICAAAA
