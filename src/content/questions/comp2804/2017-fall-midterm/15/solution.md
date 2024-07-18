We can draw a recursive tree to see how many times the word \enquote{hello} is printed.
begin{forest}
[Hello$ (5) $
[Hello$ (4) $
[Hello$ (3) $
[Hello$ (1) $
[Hello$ ()0 $]
]
[Hello$ (1) $]
]
[Hello$ (2) $
[Hello$ (1) $]
[Hello$ (0) $]
]
]
[Hello$ (3) $
[Hello$ (2) $
[Hello$ (1) $]
[Hello$ (0) $]
]
[Hello$ (1) $]
]
]
end{forest}
Each time HELLO is called, \enquote{hello} is printed once. We can count the number of times HELLO is called
After counting, we see that \enquote{hello} is printed 15 times.
