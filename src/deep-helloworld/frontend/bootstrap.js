(function(framework) {
  'use strict';

  var security = framework.Kernel.get('security');
  var resource = framework.Kernel.get('resource');
  var asset = framework.Kernel.get('asset');

  function loadAsset(assetPath, callback) {
    var xhttp = new XMLHttpRequest();
    var realPath = asset.locate(assetPath);

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        callback(xhttp.responseText);
      }
    };

    xhttp.open('GET', realPath, true);
    xhttp.send();
  }

  loadAsset('@deep-helloworld:view/hello.html', function(plainHtml) {
    var body = document.body;
    body.innerHTML = plainHtml;

    var sendBtn = body.querySelector('#send-name');
    var dataTag = body.querySelector('#data');
    var nameInput = body.querySelector('#name');

    sendBtn.addEventListener('click', function(e) {
      e.preventDefault();

      var payload = {Name: nameInput.value};
      var checkedResource = body.querySelector('input[name="resource"]:checked');
      var resourceIdentifier = '@deep-helloworld:say-hello:create-' + checkedResource.value;

      security.anonymousLogin(function() {
        resource.get(resourceIdentifier).request(payload).send(function(response) {
          dataTag.innerHTML = JSON.stringify(response.data, null, '  ');
        });
      });
    });
  });
})(DeepFramework);
