import DateCalc from './dateCalc';

test('gets 1 second', () => {
    const dateCalc = new DateCalc(1);
    expect(dateCalc.hour).toBe(1);
    expect(dateCalc.day).toBe(1);
    expect(dateCalc.month).toBe(1);
    expect(dateCalc.year).toBe(0);
    expect(dateCalc.ampm).toBe("am");
});

test('gets 10 seconds', () => {
    const dateCalc = new DateCalc(10);
    expect(dateCalc.hour).toBe(10);
    expect(dateCalc.day).toBe(1);
    expect(dateCalc.month).toBe(1);
    expect(dateCalc.year).toBe(0);
    expect(dateCalc.ampm).toBe("am");
  });

  test('gets 20 seconds', () => {
    const dateCalc = new DateCalc(20);
    expect(dateCalc.hour).toBe(8);
    expect(dateCalc.day).toBe(1);
    expect(dateCalc.month).toBe(1);
    expect(dateCalc.year).toBe(0);
    expect(dateCalc.ampm).toBe("pm");
  });

  test('gets 100 seconds', () => {
    const dateCalc = new DateCalc(100);
    expect(dateCalc.hour).toBe(4);
    expect(dateCalc.day).toBe(5);
    expect(dateCalc.month).toBe(1);
    expect(dateCalc.year).toBe(0);
    expect(dateCalc.ampm).toBe("am");
  });

  /*  If we want this to be better, we have to integrate 30 and 31 day months, leap years, etc. */
  
//   test('gets 1000 seconds', () => {
//     const dateCalc = new DateCalc(1000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(11);
//     expect(dateCalc.month).toBe(2);
//     expect(dateCalc.year).toBe(0);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 10000 seconds', () => {
//     const dateCalc = new DateCalc(10000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(20);
//     expect(dateCalc.month).toBe(2);
//     expect(dateCalc.year).toBe(1);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 100000 seconds', () => {
//     const dateCalc = new DateCalc(100000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(29);
//     expect(dateCalc.month).toBe(6);
//     expect(dateCalc.year).toBe(11);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 1000000 seconds', () => {
//     const dateCalc = new DateCalc(1000000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(29);
//     expect(dateCalc.month).toBe(1);
//     expect(dateCalc.year).toBe(114);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 10000000 seconds', () => {
//     const dateCalc = new DateCalc(10000000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(17);
//     expect(dateCalc.month).toBe(10);
//     expect(dateCalc.year).toBe(1140);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 100000000 seconds', () => {
//     const dateCalc = new DateCalc(100000000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(29);
//     expect(dateCalc.month).toBe(6);
//     expect(dateCalc.year).toBe(11);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 1000000000 seconds', () => {
//     const dateCalc = new DateCalc(1000000000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(29);
//     expect(dateCalc.month).toBe(6);
//     expect(dateCalc.year).toBe(11);
//     expect(dateCalc.ampm).toBe("pm");
//   });

//   test('gets 10000000000 seconds', () => {
//     const dateCalc = new DateCalc(10000000000);
//     expect(dateCalc.hour).toBe(4);
//     expect(dateCalc.day).toBe(29);
//     expect(dateCalc.month).toBe(6);
//     expect(dateCalc.year).toBe(11);
//     expect(dateCalc.ampm).toBe("pm");
//   });
