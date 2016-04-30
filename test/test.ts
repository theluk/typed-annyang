import * as test from 'blue-tape';

// we need to mock the global window.speechRecognition
// as otherwise annyang exits early
declare const GLOBAL;
if (typeof window === 'undefined') {
    GLOBAL.window = <any>{};
}
Object.defineProperty(window, 'SpeechRecognition' , {value: function() {}});
import * as annyang from 'annyang';

test('test', (t) => {
  t.plan(1);
  t.equal(annyang.isListening(), false);
});
