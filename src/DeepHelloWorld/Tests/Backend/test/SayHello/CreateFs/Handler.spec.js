/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import chai from 'chai';
import Handler from '../../../node_modules/say-hello-create-fs/Handler';

suite('Handlers', function() {
  test('Class Handler exists in say-hello-create-fs', function() {
    chai.expect(typeof Handler).to.equal('function');
  });
});
