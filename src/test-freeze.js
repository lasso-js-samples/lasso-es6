import { ok } from 'assert';

export default function() {
    var foo = {};
    Object.freeze(foo);

    ok(Object.isFrozen(foo) === true);

    try {
        foo.bar  = true;
    } catch(e) {
        return;
    }

    ok(foo.bar === undefined);

}