<img width="500px" src="./public/logo2.png"/>

<br/>

The Carleton Computer Science Question Repository is a website that hosts a collection of practice questions for Carleton University's Computer Science courses. The questions are sourced from previous evaluations and the project was developed by students with resources and content provided by staff members of Carleton University's School of Computer Science.

# Contributing

This project is a great opportunity for students to get their first open-source contribution.

In addition to fixing issues found on our Github issues page, here are other ways you can contribute:

### Contributing a "Generator"

If you'd like to contribute a generator, read the [guide here](https://github.com/CarletonComputerScienceSociety/questions/blob/main/docs/contributing-generators.md).

"Generators" are scripts that create variants of existing questions enabling students to better practice for exams.

They power the pages that you can navigate to whether you see the ✨ icon.

Here is an example generator: [COMP 2804 Midterm Fall 2013 - 1](https://questions.carletoncomputerscience.ca/questions/generator/comp2804/2013-fall-midterm/1).

<img src="./public/images/docs/generator_example.png"/>

### Adding Missing Question Tags

Do you believe a question is missing or improperly tagged? Open a pull request to correct the tagging of a question

### Contributing & Improving Solutions

Do you want to contribute a missing solution or improve the formatting of an existing solution? Open a pull request!

# Project Setup

1. Install the required dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run dev
```

# Content

## Multiple Choice Questions

Every multiple choice question directory should have the following structure

- `index.md`: Metadata of the question, make sure to mark the type as `multiple-choice`
- `question.ts`: The formatting question with it's options that can later be shuffled
- `solution.md` (optional): The markdown solution
- `generator.ts` (optional): A script that generates a question alike to the one in the director
- `generator.test.ts` (optional): The unit tests for `generator.ts`

## Tags

Here is the list of currently supported question tags:

- comp2804-de-morgan's-law-(no-corresponding-chapter)
- comp2804
- comp2804-final
- comp2804-midterm
- comp2804-the-product-rule
- comp2804-counting-bitstrings-of-length-n
- comp2804-counting-functions
- comp2804-placing-books-on-shelves
- comp2804-the-bijection-rule
- comp2804-the-complement-rule
- comp2804-the-sum-rule
- comp2804-the-principle-of-inclusion-and-exclusion
- comp2804-permutations-and-binomial-coefficients
- comp2804-permutations-and-binomial-coefficients
- comp2804-newton's-binomial-theorem
- comp2804-permutations-and-binomial-coefficients
- comp2804-combinatorial-proof
- comp2804-reordering-the-letters-of-a-word
- comp2804-counting-solutions-of-linear-equations
- comp2804-the-pigeonhole-principle
- comp2804-recursive-functions
- comp2804-fibonacci-numbers
- comp2804-counting-00-free-bitstrings
- comp2804-a-recursively-defined-set
- comp2804-uniform-probability-spaces
- comp2804-euclid's-algorithm
- comp2804-discrete-probability
- comp2804-basic-rules-of-probability
- comp2804-the-probability-of-getting-a-full-house
- comp2804-the-birthday-paradox
- comp2804-conditional-probability
- comp2804-the-law-of-total-probability
- comp2804-independent-events
- comp2804-rolling-two-dice
- comp2804-a-basic-property-of-independent-events
- comp2804-question
- comp2804-random-variables-and-expectation
- comp2804-random-variables
- comp2804-independent-random-variables
- comp2804-expected-values
- comp2804-linearity-of-expectations
- comp2804-determining-the-expected-value
- comp2804-determining-the-expected-value
- comp2804-indicator-random-variables
