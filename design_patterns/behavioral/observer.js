const subject = () => {
    let subscriptions = [];
    return {
        subscribe: (fn) => {
            subscriptions.push(fn);
        },
        unsubscribe: (fn) => {
            subscriptions = subscriptions.filter(item => item != fn);
        },
        publish: (data) => {
            subscriptions.forEach(sub => {
                sub(data);
            });
        }
    }
}

const store = subject();

const fn1 = (data) => {
    console.log('fn1', data);
};

const fn2 = (data) => {
    console.log('fn2', data);
};

const fn3 = (data) => {
    console.log('fn3', data);
};

const fn4 = (data) => {
    console.log('fn4', data);
};

store.subscribe(fn1);
store.subscribe(fn2);
store.subscribe(fn3);

store.publish('message 1');

store.unsubscribe(fn3);

store.publish('message 2');

store.subscribe(fn4);

store.publish('message 3');

