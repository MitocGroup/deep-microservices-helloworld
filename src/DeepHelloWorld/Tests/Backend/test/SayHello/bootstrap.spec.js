/**
 * Created by vcernomschi on 9/18/15.
 */

'use strict';

import chai from 'chai';
import bootstrap from '../../node_modules/say-hello-test/bootstrap';

suite('Bootstraps', function() {

  test('bootstrap exists in SayHello', function() {
    chai.expect(typeof bootstrap).to.equal('object');
  });
});
