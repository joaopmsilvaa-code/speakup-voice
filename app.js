// Voiceflow web chat widget, embedded mode. Only the public project ID is used — no API key.
(function (d, t) {
  var VOICEFLOW_PROJECT_ID = '6ac996af5fadc33e2b04e864';
  var VOICEFLOW_VERSION = 'production';

  var v = d.createElement(t);
  var s = d.getElementsByTagName(t)[0];

  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: VOICEFLOW_PROJECT_ID },
      url: 'https://general-runtime.voiceflow.com',
      versionID: VOICEFLOW_VERSION,
      voice: { url: 'https://runtime-api.voiceflow.com' },
      render: {
        mode: 'embedded',
        target: d.getElementById('voiceflow-chat-frame')
      },
      autostart: true
    });
  };

  v.onerror = function () {
    d.getElementById('vf-fallback').hidden = false;
  };

  v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
  v.type = 'text/javascript';
  s.parentNode.insertBefore(v, s);
})(document, 'script');
