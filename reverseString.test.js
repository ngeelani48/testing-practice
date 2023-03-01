const reverseString= require('./reverseString');

test('check reverse string',()=> {
    
    expect(reverseString('hello')).toBe('olleh');
})