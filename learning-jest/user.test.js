const validations=require('../controller/validation');
const request = require('supertest');
const app = require('../controller/UserController.js');

test('check if the emailvalid',()=>{
    expect(validations.validateEmail("sss@gmail.com")).toBe(true);
}) 
test('check if the email contain @',()=>{
    expect(validations.validateEmail("sssgmail.com")).toBe(false);
})
test('check if the name is correct',()=>{
    expect(validations.validateName("kkk")).toBe(true);
})
test('check if the name is correct',()=>{
    expect(validations.validateName("88")).toBe(false);
})
describe('CORS functionality', () => {
    it('should allow GET requests from any origin', async () => {
      const res = await request(app)
        .get('/UserRoute')
        .set('Origin', 'https://example.com')
        .expect('Access-Control-Allow-Origin', '*')
        .expect(200);
  
      // Add more assertions as needed
    });
  
    // it('should allow POST requests from specific origins', async () => {
    //   const res = await request(app)
    //     .post('/api/data')
    //     .set('Origin', 'https://example.com')
    //     .expect('Access-Control-Allow-Origin', 'https://example.com')
    //     .expect(200);
  
    //   // Add more assertions as needed
    // });
  
    // Add more tests for other CORS functionality as needed
  });