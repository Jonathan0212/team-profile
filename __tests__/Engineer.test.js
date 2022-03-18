const Engineer = require('../lib/Engineer');

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer('Joey', 1, 'Joey@test.com', testValue);
    expect(e.github).toBe(testValue);
});

test ("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer('Johnny', 1, 'Johnny@test.com', 'GitHubUser')
    expect(e.getRole()).toBe(testValue);
});


test ("Can get Github username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer('Steve', 1, 'Steve@test.com', testValue)
    expect(e.getGithub()).toBe(testValue);
});



