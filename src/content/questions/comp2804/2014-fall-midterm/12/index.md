---
title: N/A
path: comp2804/2014-fall-midterm/12
type: multiple-choice
author: Michiel Smid
question: comp2804/2014-fall-midterm/12/question.ts
solution: comp2804/2014-fall-midterm/12/solution.md
tags:
  - comp2804
  - comp2804-midterm
  - recursive-functions
---

<div hidden>
  $\newcommand{\Fib}{{\rm F \scriptsize IB}}$
</div>
		
Consider the following recursive algorithm $\Fib$, which takes as input an
integer $n \geq 0$:

<p>
  $\mathbf{Algorithm}\ \Fib(n)\mathrm{:}$ <br>
  $\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
  $\mathbf{then}\ f = n$ <br>
  $\mathbf{else}\ f = \Fib(n - 1) + \Fib(n - 2)$ <br>
  $\mathbf{endif};$ <br>
  $\mathbf{return}\ f$ <br>
</p>

When running $\Fib(9)$, how many calls are there to $\Fib(4)$?

a) 6

b) 7

c) 8

d) 9
