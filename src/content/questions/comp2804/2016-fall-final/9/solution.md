Let's draw a recursive tree to find out how many times the word \enquote{hello} is printed when we run $HELLO(7)$.
begin{forest}
[HELLO$ (7) $
		[HELLO$ (6) $
				[HELLO$ (3) $
						[HELLO$ (2) $
								[HELLO$ (1) $]
							]
							[HELLO$ (1) $]
					]
			]
			[HELLO$ (5) $
				[HELLO$ (4) $
						[HELLO$ (2) $
								[HELLO$ 1 $]
							]
					]
					[HELLO$ (3) $
						[HELLO$ (2) $
								[HELLO$ 1 $]
							]
							[HELLO$ (1) $]
					]
			]
	]
end{forest} 
As can be seen, the word \enquote{hello} is printed 5 times when we run $HELLO(7)$.
