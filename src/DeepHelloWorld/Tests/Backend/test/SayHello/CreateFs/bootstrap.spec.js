/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import chai from 'chai';
import bootstrap from '../../../node_modules/say-hello-create-fs/bootstrap';

suite('Bootstraps', function() {

  test('bootstrap exists in say-hello-create-fs', function() {
    chai.expect(typeof bootstrap).to.equal('object');
  });
});
