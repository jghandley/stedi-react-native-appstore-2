import myName from '../utils/hello.jesse.mjs';
import assert from 'assert';

it("Tests helloworld", ()=>{

    const hello = myName();

    assert.equal(hello,"Hello Jesse");

});