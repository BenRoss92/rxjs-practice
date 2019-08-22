const Rx = require('rxjs');

const lampObservable = Rx.Observable.create((stream) => {
    stream.next('red');
    
    const delay = 5000 + (Math.random() * 2000);
    
    setTimeout(() => {
        stream.next('green');
        stream.complete();
    }, delay);
});

const nextHandler = (value) => console.log(value);
const errorHandler = (error) => console.error(error);
const onCompleteHandler = () => console.log('completed!');

lampObservable.subscribe(nextHandler, errorHandler, onCompleteHandler);