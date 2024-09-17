export function makeIndexTransition(index: number, length: number) {
  if (index < 0) {
    return length - 1;
  }

  if (index >= length) {
    return 0;
  }

  return index;
}

export function safeDiv(a?: number, b?: number) {
  if (!a) return null;
  if (!b) return null;
  return (a / b).toPrecision(2);
}
