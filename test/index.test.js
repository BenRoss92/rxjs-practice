const { oneValueObservable } = require('../src/index');

describe('One-value observable', () => {
    describe('when subscribing to this observable', () => {
        test('it emits the value 1', (done) => {
            oneValueObservable.subscribe(function(value) {
                expect(value).toBe(1);
                done();
            });
        });
    });
});