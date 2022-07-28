function isDivideBy(number, a, b) {
  return (number % a || number % b) === 0;
}

isDivideBy(21, 5, 5);
