/* subscribe to newsletter modal
*/

(function() {
  'use strict';

  var newsletterSubscribe = function(e) {
    if (!window.util.closest(e.target, '.js-newsletter-subscribe')) {
      return;
    }

    // track email
    var $content = document.querySelector('.card-content');
    var emailAddress = $content.querySelector('.email p').textContent.trim();

    var xhr = new window.XMLHttpRequest();
    xhr.open('POST', apiUrl + '/newsletter/subscribe');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({
      email: emailAddress
    }));
  };

  document.body.addEventListener('click', newsletterSubscribe);
})();
