'use strict';

import url from 'url';
import DeepFramework from 'deep-framework';

export default class extends DeepFramework.Core.AWS.Lambda.Runtime {
  /**
   * @param {*} args
   */
  constructor(...args) {
    super(...args);

    this._fs = this.kernel.get('fs');
  }

  /**
   * @param {Object} request
   */
  handle(request) {
    let fileName = `request_payload_${(new Date()).getTime()}`; 

    this._fs.public.writeFile(fileName, JSON.stringify(request), (error, meta) => {
      if (error) {
        this.createError(error).send();
      } else {
        this.createResponse({
          fs: fileName,
          link: this._getFileLink(fileName)
        }).send();
      }
    });
  }

  /**
   *
   * @param {String} fileName
   * @returns {String}
   * @private
   */
  _getFileLink(fileName) {
    let s3fs = this._fs.public;

    if (this._fs.localBackend) {
      return s3fs.getPath(fileName);
    }

    return url.resolve(
      s3fs.s3.endpoint.href,
      s3fs.getPath(fileName)
    );
  }
}
