import  { submitHandler } from '../js/submitHandler';


describe('Check if function exists' , () => {
    test('Handler for submit is defined', async () => {
        expect(submitHandler).toBeDefined();
    });
    test('Check that its type === func', async () => {
        expect(typeof submitHandler).toBe('function');
    });
});
