'use strict';

import DeepFramework from 'deep-framework';

export default class extends DeepFramework.Core.AWS.Lambda.Runtime {
  /**
   * @param {*} args
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * @param {Object} request
   */
  handle(request) {
    let db = this.kernel.get('db');

    db.get('Name').createItem(request, (error, nameModel) => {
      if (error) {
        this.createError(error).send();
      } else {
        this.createResponse({
          db: nameModel.get()
        }).send();
      }
    });
  }
}
