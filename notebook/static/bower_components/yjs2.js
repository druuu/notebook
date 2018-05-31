define(['bower_components/yjs/y.js'], function(Y){
    "use strict";
    console.log(Y);
    var yjs2 = function (cm, room) {
      console.log(Y);
      console.log(cm);
      console.log(room);
      Y({
        db: {
          name: 'memory'
        },
        connector: {
          name: 'webrtc',
          room: room
        },
        sourceDir: '/bower_components',
        share: {
          textarea: 'Text'
        }
      }).then(function (y) {
        y.share.textarea.bindCodeMirror(cm);
      });
    };
    console.log('done');
    return {'yjs2': yjs2};
});
