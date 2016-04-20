/**
 * Created by vcernomschi on 4/20/16.
 */

'use strict';

import bootstrap from '../../../Frontend/bootstrap';

describe('Bootstrap', function() {
  it('Should load bootstrap', function() {
    expect(typeof bootstrap).toBe('object');
  });
});

