import { describe, expect } from "@jest/globals";
import Generator from "./generator";

describe("comp2804/2022-winter-final/1", () => {
    describe("generateValues", () => {
        it("will return two values", () => {
            const generator = new Generator();

            const values = generator.generateValues();

            expect(values).toHaveLength(2);
        });

        it("will return a string length between 50 and 100", () => {
            const generator = new Generator();

            const [stringLength, _] = generator.generateValues();

            expect(stringLength).toBeGreaterThanOrEqual(50);
            expect(stringLength).toBeLessThanOrEqual(100);
        });

        it("will return a positions value between 5 and 20", () => {
            const generator = new Generator();

            const [_, positions] = generator.generateValues();

            expect(positions).toBeGreaterThanOrEqual(5);
            expect(positions).toBeLessThanOrEqual(20);
        });
    });

    describe("createOptions", () => {
        it("will return five options", () => {
            const generator = new Generator();

            const options = generator.createOptions(50, 5);

            expect(options).toHaveLength(5);
        });

        it("will have exactly one correct option", () => {
            const generator = new Generator();

            const options = generator.createOptions(50, 5);
            const correctOptions = options.filter((option) => option.correct);

            expect(correctOptions).toHaveLength(1);
        });
    });

    describe("createCorrectOption", () => {
        it("will return the correct option", () => {
            const generator = new Generator();

            const option = generator.createCorrectOption(50, 10);

            expect(option.label).toBe("$\\binom{50}{10}\\cdot 4^{40}$");
            expect(option.correct).toBe(true);
        });
    });

    describe("createIncorrectOption1", () => {
        it("will return an option with the combination being multiplied with 5 ^ value instead of 4 ^ value", () => {
            const generator = new Generator();

            const option = generator.createIncorrectOption1(50, 10);

            expect(option.label).toBe("$\\binom{50}{10}\\cdot 5^{40}$");
            expect(option.correct).toBe(false);
        });
    });

    describe("createIncorrectOption2", () => {  
        it("will return an option with the combination using the number of letters instead of positions and being multiplied with 5 ^ value instead of 4 ^ value", () => {
            const generator = new Generator();

            const option = generator.createIncorrectOption2(50, 10);

            expect(option.label).toBe("$\\binom{50}{5}\\cdot 5^{40}$");
            expect(option.correct).toBe(false);
        });
    });

    describe("createIncorrectOption3", () => {
        it("will return an option with the combination using the number of letters instead of positions", () => {
            const generator = new Generator();

            const option = generator.createIncorrectOption3(50, 10);

            expect(option.label).toBe("$\\binom{50}{5}\\cdot 4^{40}$");
            expect(option.correct).toBe(false);
        });
    });

    describe("createIncorrectOption4", () => {
        it("will return an option which does not use combinations", () => {
            const generator = new Generator();

            const option = generator.createIncorrectOption4(50, 10);

            expect(option.label).toBe("$5^{10}\\cdot 4^{40}$");
            expect(option.correct).toBe(false);
        });
    });
});