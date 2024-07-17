We can draw a recursive tree to visualize the number of calls to $FIB(14)$ when running $FIB(18)$.
begin{forest}
[Fib$ (18) $
		[Fib$ (17) $
				[Fib$ (16) $
						[Fib$ (15) $
								[Fib$ (14) $]
									[FIB$ (13) $]
							]
							[FIB$ (14) $]
					]
					[Fib$ (15) $
						[Fib$ (14) $]
							[FIB$ (13) $]
					]
			]
			[Fib$ (16) $
				[Fib$ (15) $
						[Fib$ (14) $]
							[FIB$ (13) $]
					]
					[FIB$ (14) $]
			]
	]
end{forest} 
There are 5 calls to $FIB(14)$ when running $FIB(18)$.
