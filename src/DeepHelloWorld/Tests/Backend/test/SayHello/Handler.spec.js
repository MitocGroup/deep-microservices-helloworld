/**
 * Created by vcernomschi on 9/18/15.
 */

'use strict';

import chai from 'chai';
import Handler from '../../node_modules/say-hello-test/Handler';

suite('Handlers', function() {
  test('Class Handler exists in SayHello', function() {
    chai.expect(typeof Handler).to.equal('function');
  });
});
