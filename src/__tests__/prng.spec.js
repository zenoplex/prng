// @flow
import { generator } from '../prng';

describe('math_utils', () => {
  describe('random', () => {
    it('should create random int', () => {
      const rand = generator(1);
      expect(rand.random()).toEqual(16807);
      expect(rand.random()).toEqual(282475249);
      expect(rand.random()).toEqual(1622650073);
    });
    it('should have same results for same seed', () => {
      const rand1 = generator(1);
      const rand2 = generator(1);

      expect(rand1.random()).toEqual(rand2.random());
      expect(rand1.random()).toEqual(rand2.random());
      expect(rand1.random()).toEqual(rand2.random());
    });
    it('should have different result for different seed', () => {
      const rand1 = generator(1);
      const rand2 = generator(9999);

      expect(rand1.random()).not.toEqual(rand2.random());
      expect(rand1.random()).not.toEqual(rand2.random());
      expect(rand1.random()).not.toEqual(rand2.random());
    });
  });

  describe('randomFloat', () => {
    it('should create random float', () => {
      const rand = generator(1);
      expect(rand.randomFloat()).toEqual(0.13153778814316625);
      expect(rand.randomFloat()).toEqual(0.7556053221950332);
      expect(rand.randomFloat()).toEqual(0.4586501319234493);
    });
    it('should have same results for same seed', () => {
      const rand1 = generator(1);
      const rand2 = generator(1);

      expect(rand1.randomFloat()).toEqual(rand2.randomFloat());
      expect(rand1.randomFloat()).toEqual(rand2.randomFloat());
      expect(rand1.randomFloat()).toEqual(rand2.randomFloat());
    });
    it('should have different result for different seed', () => {
      const rand1 = generator(1);
      const rand2 = generator(9999);

      expect(rand1.randomFloat()).not.toEqual(rand2.randomFloat());
      expect(rand1.randomFloat()).not.toEqual(rand2.randomFloat());
      expect(rand1.randomFloat()).not.toEqual(rand2.randomFloat());
    });
  });

  describe('range', () => {
    it('should create random int within range', () => {
      const rand = generator();
      const expected = expect(rand.range(1, 100));
      expected.toBeLessThanOrEqual(100);
      expected.toBeGreaterThanOrEqual(1);
    });
  });

  describe('rangeFloat', () => {
    it('should create random float within range', () => {
      const rand = generator();
      const expected = expect(rand.rangeFloat(0, 0.5));
      expected.toBeLessThanOrEqual(0.5);
      expected.toBeGreaterThanOrEqual(0);
    });
  });
});
