/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import chai from 'chai';
import Handler from '../../../../../Backend/src/SayHello/CreateFs/Handler';

suite('Handlers', function() {
  test('Class Handler exists in say-hello-create-fs', function() {
    chai.expect(typeof Handler).to.equal('function');
  });
});
