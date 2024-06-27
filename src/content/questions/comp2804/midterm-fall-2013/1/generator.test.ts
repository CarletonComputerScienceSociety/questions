import { describe, expect } from "@jest/globals";
import Generator from "./generator";

describe("comp2804/midterm-fall-2013/1", () => {
  describe("createSetSizes", () => {
    it("will make sizeA smaller than sizeB", () => {
      const generator = new Generator();

      const [sizeA, sizeB] = generator.createSetSizes();

      expect(sizeA).toBeLessThanOrEqual(sizeB);
    });
  });

  describe("createOptions", () => {
    it("will return four options", () => {
      const generator = new Generator();

      const options = generator.createOptions(1, 2);

      expect(options).toHaveLength(4);
    });

    it("will have exactly one correct option", () => {
      const generator = new Generator();

      const options = generator.createOptions(1, 2);
      const correctOptions = options.filter((option) => option.correct);

      expect(correctOptions).toHaveLength(1);
    });
  });

  describe("createCorrectOption", () => {
    it("will return the correct option", () => {
      const generator = new Generator();

      const option = generator.createCorrectOption(7, 13);

      expect(option.label).toBe("$\\frac{13!}{6!}$");
      expect(option.correct).toBe(true);
    });
  });

  describe("createIncorrectOption1", () => {
    it("will return an option where the numerator and delimeter are flipped", () => {
      const generator = new Generator();

      const option = generator.createIncorrectOption1(7, 13);

      expect(option.label).toBe("$\\frac{6!}{13!}$");
      expect(option.correct).toBe(false);
    });
  });

  describe("createIncorrectOption2", () => {
    it("will return an option where the delimeter is one less than the correct option", () => {
      const generator = new Generator();

      const option = generator.createIncorrectOption2(7, 13);

      expect(option.label).toBe("$\\frac{13!}{5!}$");
      expect(option.correct).toBe(false);
    });
  });

  describe("createIncorrectOption3", () => {
    it("will return an option where the numerator is one less than the correct option and the delimeter is one more than the correct option", () => {
      const generator = new Generator();

      const option = generator.createIncorrectOption3(7, 13);

      expect(option.label).toBe("$\\frac{12!}{7!}$");
      expect(option.correct).toBe(false);
    });
  });
});
