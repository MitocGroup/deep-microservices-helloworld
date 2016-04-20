/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import chai from 'chai';
import bootstrap from '../../../node_modules/say-hello-create-msg/bootstrap';

suite('Bootstraps', function() {

  test('bootstrap exists in say-hello-create-msg', function() {
    chai.expect(typeof bootstrap).to.equal('object');
  });
});
