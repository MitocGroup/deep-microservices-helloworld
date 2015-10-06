'use strict';
'format es6';

export default function deepHelloWorld() {
  return System.import('/hello.world.example/js/app/angular/index.js');
}

export function configLoad() {
  return new Promise((resolve, reject) => {
    let deepSecurity = DeepFramework.Kernel.get('security');

    deepSecurity.anonymousLogin((token) => {
      resolve(token);
    });
  });
}