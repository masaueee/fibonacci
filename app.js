'use strict';

const fibMap = new Map();
fibMap.set(0,0);
fibMap.set(1,1);

function fib(n) {
    if (fibMap.has(n)) {
        return fibMap.get(n);
    }
    fibMap.set(n,fibMap.get(n-1) + fibMap.get(n-2))
    return fibMap.get(n);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}



