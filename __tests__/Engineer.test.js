const Engineer = require('../lib/Engineer')

test ('creates an Engineer object', () => {
    const engineer = new Engineer('John', 9, 'abc@xyz.com', 'johnGithub');

    expect(engineer.github).toEqual('johnGithub');
})