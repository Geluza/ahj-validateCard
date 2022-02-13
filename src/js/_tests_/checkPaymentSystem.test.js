import checkPaymentSystem from '../checkPaymentSystem';

test('check card Visa', () => {
  const toBe = checkPaymentSystem('4276540020147108');
  expect(toBe).toEqual('visa');
});

test('check card Mir', () => {
  const toBe = checkPaymentSystem('2202202249443502');
  expect(toBe).toEqual('mir');
});

test('check card MasterCard', () => {
  const toBe = checkPaymentSystem('5381500007136259');
  expect(toBe).toEqual('master');
});

test('check card Maestro', () => {
  const toBe = checkPaymentSystem('5018874825049437');
  expect(toBe).toEqual('maestro');
});
