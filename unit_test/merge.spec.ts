import { merge } from '../src/merge';

describe('merge', () => {
  it('should merge three collections correctly', () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [8, 6, 4, 2];
    const collection3 = [0, 9, 10];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([]);
  });

  it('should handle when collection1 is empty', () => {
    const collection1: number[] = [];
    const collection2 = [5, 3, 1];
    const collection3 = [2, 4, 6];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle when collection2 is empty', () => {
    const collection1 = [1, 3, 5];
    const collection2: number[] = [];
    const collection3 = [2, 4, 6];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle when collection3 is empty', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [6, 4, 2];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle single element arrays', () => {
    const collection1 = [5];
    const collection2 = [3];
    const collection3 = [7];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([3, 5, 7]);
  });

  it('should handle duplicate values', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [5, 3, 1];
    const collection3 = [3, 5];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 1, 3, 3, 3, 5, 5, 5]);
  });

  it('should handle negative numbers', () => {
    const collection1 = [-5, -3, 0, 2];
    const collection2 = [5, 3, -1];
    const collection3 = [-10, 1];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([-10, -5, -3, -1, 0, 1, 2, 3, 5]);
  });

  it('should handle large arrays', () => {
    const collection1 = [1, 4, 7, 10, 13];
    const collection2 = [15, 12, 9, 6, 3];
    const collection3 = [0, 2, 5, 8, 11, 14];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});
