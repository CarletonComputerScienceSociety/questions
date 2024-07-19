1. Find stuff out

   We can pair each E with an R and treat each as one entity

   This leaves us with

   <ul>
       <li> P: 3
       <li> O: 4
       <li> (ER): 2
       <li> S: 1
       <li> C: 1
   </ul>

2. Calculate

   So now, POOP(ER)SCOOP(ER) has 11 entities/positions

   Now, we need to figure out how many possible permutations of ER across the string there are

   <ul>
      <li> ER____ER
      <li> RE____ER
      <li> ER____RE
      <li> RE____RE
    </ul>

   This is 4 permutations

   We choose 3 of the 11 positions for P: $\binom{11}{3}$

   We choose 4 of the remaining 8 positions for O: $\binom{8}{4}$

   We choose 2 of the remaining 4 positions for ER: $\binom{4}{2}$

   We choose 1 of the remaining 2 positions for S: $\binom{2}{1}$

   We choose 1 of the remaining 1 positions for C: $\binom{1}{1}$

Now, we multiply all of these together to get the total number of cool strings:

$\binom{11}{3} \cdot \binom{8}{4} \cdot \binom{4}{2} \cdot \binom{2}{1} \cdot \binom{1}{1} \cdot 4$
