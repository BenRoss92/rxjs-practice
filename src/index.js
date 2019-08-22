const Rx = require('rxjs');

// creates a new cold observable
const oneValueObservable = Rx.Observable.create(observer => {
    observer.next(1);
    observer.complete()
});

module.exports = {
    oneValueObservable,
};
