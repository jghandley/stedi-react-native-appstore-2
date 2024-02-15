import myName from '../utils/hello.logan.mjs';
import assert from 'assert';

it("Tests helloworld", ()=>{

    const hello = myName();

    assert.equal(hello,"Hello Logan");

});