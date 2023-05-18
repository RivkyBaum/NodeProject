const validationUser = require ('./validation');

describe('Validation functions', () => {
    describe('validationUser', () => {
      test('checks if the name....', () => {
        expect(validationUser.validateName('chaya')).toBe(true);
      });
      test('checks if the name....', () => {
        expect(validationUser.validateName('123')).toBe(false);
      });
      test('check email....', () => {
        expect(validationUser.validateEmail('chaya@example.com')).toBe(true);
      });
      test('check email....', () => {
        expect(validationUser.validateEmail('chaya.erenfeld')).toBe(false);
      });
      test('Checks if the phone is valid', async () => {
        const validPhone = '972527171226'; 
        expect(await validationUser.validatePhone(validPhone)).toBe(true);
      });
      test('Checks if the phone is valid', async () => {
        const invalidPhone = '1234567890'; 
        expect(await validationUser.validatePhone(invalidPhone)).toBe(false);
    });
    });
  });