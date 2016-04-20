/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import chai from 'chai';
import bootstrap from '../../../../../Backend/src/SayHello/CreateMsg/bootstrap';

suite('Bootstraps', function() {

  test('bootstrap exists in say-hello-create-msg', function() {
    chai.expect(typeof bootstrap).to.equal('object');
  });
});
