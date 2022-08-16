function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  /* 
    const d = randomDate(new Date(2012, 0, 1), new Date());
    console.log(d);
  */
}
