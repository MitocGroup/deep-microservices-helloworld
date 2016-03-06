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
   * @param {Object} nameData
   */
  handle(nameData) {
    this.persistPayloadInFs(nameData, (error, createdFile) => {
      if (error) {
        return this.createError(error).send();
      }

      this.persistPayloadInDb(nameData, (error, NameModel) => {
        if (error) {
          return this.createError(error).send();
        }

        this.createResponse({
          msg: `Hello ${nameData.Name}!`,
          db: NameModel.get(),
          fs: createdFile,
        }).send();
      });
    });
  }

  /**
   * Saves request payload into system fs (it can be also saved into public and temp fs)
   *
   * @param {Object} payload
   * @param {Function} callback
   */
  persistPayloadInFs(payload, callback) {
    let fs = this.kernel.get('fs');

    //replace special chars in timestamp to be able to be used in Windows filenames
    let timestamp = (new Date()).toISOString().(/[\<\>\:\"\/\\\|\?\*]/g, '_');

    let fileName = `request_payload_${timestamp}`;

    fs.system.writeFile(fileName, JSON.stringify(payload), (error) => {
      error ? callback(error, null) : callback(null, fileName);
    });
  }

  /**
   * Saves request payload into DB
   *
   * @param {Object} payload
   * @param {Function} callback
   */
  persistPayloadInDb(payload, callback) {
    let db = this.kernel.get('db');

    db.get('Name').createItem(payload, (error, NameModel) => {
      error ? callback(error, null) : callback(null, NameModel);
    });
  }
}
