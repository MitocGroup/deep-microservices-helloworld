/**
 * Created by AlexanderC on 9/18/15.
 */

'use strict';

export default function deepHelloWorld() {
  return System.import('/hello.world.example/js/angular/index');
};

export function configLoad() {
  let promise = new Promise(() => {});
  let deepSecurity = DeepFramework.Kernel.get('security');

  deepSecurity.anonymousLogin(function(token) {
    promise.resolve();
  });

  return promise;
}
