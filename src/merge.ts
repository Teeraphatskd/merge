export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[],
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = collection2.length - 1;
  let k = 0;

  while (
    i < collection1.length ||
    j >= 0 ||
    k < collection3.length
  ) {
    const val1 = i < collection1.length ? collection1[i] : Infinity;
    const val2 = j >= 0 ? collection2[j] : Infinity;
    const val3 = k < collection3.length ? collection3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j--;
    } else {
      result.push(val3);
      k++;
    }
  }

  return result;
}
