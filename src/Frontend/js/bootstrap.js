'use strict';

var deepKernel = DeepFramework.Kernel;

deepKernel.loadFromFile('_config.json', function() {
  var deepSecurity = deepKernel.get('security');

  deepSecurity.anonymousLogin(function(token) {
    var resource = deepKernel.get('resource');

    var sampleResource = resource.get('@hello.world.example:sample');

    var form = document.getElementById('hello-form');

    form.addEventListener('submit', function(event) {
      event.returnValue = false;

      var name = form.querySelector('input[name="name"]').value;

      var payload = {
        Name: name,
      };

      sampleResource.request('say-hello', payload).send(function(response) {
        alert('Response: ' + JSON.stringify(response.data));
      });

      return false;
    });
  });
});
