import * as validUrl from 'valid-url'
describe('Valid Url format', () => {
    test('test if user input is valid url', () => {
        const userInput = 'http://testing.but not really an url'
        expect(validUrl.isWebUri(userInput) === undefined).toBe(true);
    });
    test('test if user input is valid url', () => {
        const userInput = 'http://www.google.com'
        expect(validUrl.isWebUri(userInput) ==='http://www.google.com').toBe(true);
    });
});