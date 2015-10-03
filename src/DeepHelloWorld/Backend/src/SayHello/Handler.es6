'use strict';

import DeepFramework from 'deep-framework';

export default class extends DeepFramework.Core.AWS.Lambda.Runtime {
  /**
   * @param {Array} args
   */
  constructor(...args) {
    super(...args);
  }

  /**
   *
   * @param request
   */
  handle(request) {
    let fs = this.kernel.get('fs');
    let db = this.kernel.get('db');

    let dateString = new Date().toISOString();

    let requestFile = `hello_request_${dateString}`;

    // The local server uses this folder to mimic s3fs
    if (fs.system._rootFolder) {
      console.log(`Using FS local root folder: ${fs.system._rootFolder}`);
    }

    console.log(`Persisting request to file ${requestFile}`);

    fs.system.writeFile(requestFile, JSON.stringify(request.data), function(error) {
      if (error) {
        this.createError(error).send();
        return;
      }

      let NameModel = db.get('Name');

      let passedName = request.getParam('Name', 'World');

      let data = {
        Name: passedName
      };

      console.log(`Persisting data into 'Name' model: `, data);

      NameModel.createItem(data, function(error, NameModel) {
        if (error) {
          this.createError(error).send();
          return;
        }

        this.createResponse({
          model: NameModel.get(),
          msg: `Hello ${passedName}!`,
        }).send();
      }.bind(this));
    }.bind(this));
  }
}
