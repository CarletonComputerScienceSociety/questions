---
title: N/A
path: comp2804/2014-fall-midterm/13
type: multiple-choice
author: Michiel Smid
question: comp2804/2014-fall-midterm/13/question.ts
solution: comp2804/2014-fall-midterm/13/solution.md
tags:
  - comp2804
  - comp2804-midterm
  - comp2804-recursive-functions
---

<div hidden>
  $\newcommand{\Silly}{{\rm S \scriptsize ILLY}}
    \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
</div>
		
Consider the following recursive algorithm $\Silly$, which takes as input an integer $n \geq 1$ which is a power of 2:
		
<p>
  $\mathbf{Algorithm}\ \Silly(n)\mathrm{:}$ <br>
  $\mathbf{if}\ n = 1$ <br>
  $\mathbf{then}\ \text{drink one pint of beer}$ <br>
  $\mathbf{else}\ \mathbf{if}\ n = 2$ <br>
  $\elsesp \mathbf{then}\ \text{fart once}$ <br>
  $\elsesp \mathbf{else}\ \text{fart once};$ <br>
  $\elsesp \elsesp \Silly(n / 2);$ <br>
  $\elsesp \elsesp \text{fart once}$ <br>
  $\elsesp \mathbf{endif}$ <br>
  $\mathbf{endif}$
</p>

For $n$ a power of 2, let $F(n)$ be the number of times you fart when running algorithm $\Silly(n)$.
Which of the following is true? <br>
(n.b., $\log$ denotes the base-2 logarithm)

a) $F(n) = \log n\ \mathrm{for}\ n \geq 1.$

b) $F(n) = 2 \log n\ \mathrm{for}\ n \geq 1.$

c) $F(n) = (2 \log n) - 1\ \mathrm{for}\ n \geq 1.$

d) $F(n) = (2 \log n) - 1\ \mathrm{for}\ n \geq 2.$
