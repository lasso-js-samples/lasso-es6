import testClasses from "./test-classes";
import testFreeze from "./test-freeze";

function reportResult(name, err) {
    var ul = document.getElementById('testResults');
    var li = document.createElement('li');
    if (err) {
        li.className = 'success';
        li.innerHTML = '✓ ' + name;
    } else {
        li.className = 'failure';
        li.innerHTML = '✗ ' + name + ' - ' + err;

        var pre = document.createElement('pre');
        pre.appendChild(document.createTextNode((err.stack || err) + ''));

        li.appendChild(pre);
    }

    ul.appendChild(li);
}

function runTest(name, func) {
    try {
        func();
        reportResult(name);
    } catch(err) {
        reportResult(name, err);
    }
}

runTest('Classes', testClasses);
runTest('Object.freeze', testFreeze);