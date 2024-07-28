# Questions (name tbd)

# Setup

1. Install the required dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run dev
```

# Add a new Multiple Choice Question

Every multiple choice question directory should have the following structure

- `index.md`: Metadata of the question, make sure to mark the type as `multiple-choice`
- `question.ts`: The formatting question with it's options that can later be shuffled
- `solution.md` (optional): The markdown solution
- `generator.ts` (optional): A script that generates a question alike to the one in the director
- `generator.test.ts` (optional): The unit tests for `generator.ts`

For the Discrete Math tests, here are all the tags that can be used:

- comp2804-de-morgan's-law-(no-corresponding-chapter)
- comp2804
- comp2804-bitstrings
- comp2804-final
- comp2804-midterm
- comp2804-newton-binomial-coefficients
- comp2804-permutations
- comp2804-pigeonhole-principle
- comp2804-probability
- comp2804-recursion
- comp2804-the-product-rule-(3.1)
- comp2804-counting-bitstrings-of-length-n-(3.1.1)
- comp2804-counting-functions-(3.1.2)
- comp2804-placing-books-on-shelves-(3.1.3)
- comp2804-the-bijection-rule-(3.2.1)
- comp2804-the-complement-rule-(3.3)
- comp2804-the-sum-rule-(3.4)
- comp2804-the-principle-of-inclusion-and-exclusion-(3.5)
- comp2804-permutations-and-binomial-coefficients-(3.6)
- comp2804-permutations-and-binomial-coefficients-(3.6.1)
- comp2804-newton's-binomial-theorem-(3.6.2)
- comp2804-permutations-and-binomial-coefficients-(3.6.2)
- comp2804-combinatorial-proof-(3.7)
- comp2804-reordering-the-letters-of-a-word-(3.9.1)
- comp2804-counting-solutions-of-linear-equations-(3.9.2)
- comp2804-the-pigeonhole-principle-(3.10)
- comp2804-recursive-functions-(4.1)
- comp2804-fibonacci-numbers-(4.2)
- comp2804-counting-00-free-bitstrings-(4.2.1)
- comp2804-a-recursively-defined-set-(4.3)
- comp2804-uniform-probability-spaces-(4.4)
- comp2804-euclid's-algorithm-(4.5)
- comp2804-discrete-probability-(5)
- comp2804-basic-rules-of-probability-(5.3)
- comp2804-the-probability-of-getting-a-full-house-(5.4.1)
- comp2804-the-birthday-paradox-(5.5)
- comp2804-conditional-probability-(5.8)
- comp2804-the-law-of-total-probability-(5.9)
- comp2804-independent-events-(5.11)
- comp2804-rolling-two-dice-(5.11.1)
- comp2804-a-basic-property-of-independent-events-(5.11.2)
- comp2804-question-(5.73)
- comp2804-random-variables-and-expectation-(6)
- comp2804-random-variables-(6.1)
- comp2804-independent-random-variables-(6.2)
- comp2804-expected-values-(6.4)
- comp2804-linearity-of-expectations-(6.5)
- comp2804-determining-the-expected-value-(6.6.1)
- comp2804-determining-the-expected-value-(6.7.1)
- comp2804-indicator-random-variables-(6.8)
