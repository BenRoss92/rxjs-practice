const { source } = require('../src/index');

describe('Observable emitting value 1 and completing', () => {
    describe('when subscribing to the observable', () => {
        test('observable emits the value 1', (done) => {
            source.subscribe(function(value) {
                expect(value).toBe(1);
                done();
            });
        });
    });
});
