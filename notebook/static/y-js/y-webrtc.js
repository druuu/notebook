(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let y = new Y('htmleditor', {
  connector: {
    name: 'webrtc',
    //name: 'websockets-client',
    room: 'dinesh',
    url: 'http://finwin.io:1256'
  },
  share: {
    codemirror: 'Text',
    codemirror2: 'Text',
    codemirror3: 'Text',
    codemirror4: 'Text',
    codemirror5: 'Text',
    codemirror6: 'Text',
    codemirror7: 'Text',
    codemirror8: 'Text',
    codemirror9: 'Text',
    codemirror10: 'Text',
    xml: 'Xml',
    xml2: 'Xml',
    xml3: 'Xml',
    xml4: 'Xml',
    xml5: 'Xml',
    xml6: 'Xml',
    xml7: 'Xml',
    xml8: 'Xml',
    xml9: 'Xml',
    xml10: 'Xml'
  }
});

//window.y = y;
//window.yXmlType = y.define('xml', Y.XmlFragment);
//new Y.DomBinding(window.yXmlType, document.body);
//
console.log('############');
//window.yXml = y;
y.share.codemirror.bind(window.shared_elements['codemirror']);
y.share.codemirror2.bind(window.shared_elements['codemirror2']);
y.share.codemirror3.bind(window.shared_elements['codemirror3']);
y.share.codemirror4.bind(window.shared_elements['codemirror4']);
y.share.codemirror5.bind(window.shared_elements['codemirror5']);
y.share.codemirror6.bind(window.shared_elements['codemirror6']);
y.share.codemirror7.bind(window.shared_elements['codemirror7']);
y.share.codemirror8.bind(window.shared_elements['codemirror8']);
y.share.codemirror9.bind(window.shared_elements['codemirror9']);
y.share.codemirror10.bind(window.shared_elements['codemirror10']);
y.share.xml._bindToDom(window.shared_elements['xml']);
y.share.xml2._bindToDom(window.shared_elements['xml2']);
y.share.xml3._bindToDom(window.shared_elements['xml3']);
y.share.xml4._bindToDom(window.shared_elements['xml4']);
y.share.xml5._bindToDom(window.shared_elements['xml5']);
y.share.xml6._bindToDom(window.shared_elements['xml6']);
y.share.xml7._bindToDom(window.shared_elements['xml7']);
y.share.xml8._bindToDom(window.shared_elements['xml8']);
y.share.xml9._bindToDom(window.shared_elements['xml9']);
y.share.xml10._bindToDom(window.shared_elements['xml10']);


//window.undoManager = new Y.utils.UndoManager(window.yXmlType, {
//  captureTimeout: 500
//})
//
//document.onkeydown = function interceptUndoRedo (e) {
//  if (e.keyCode === 90 && (e.metaKey || e.ctrlKey)) {
//    if (!e.shiftKey) {
//      window.undoManager.undo()
//    } else {
//      window.undoManager.redo()
//    }
//    e.preventDefault()
//  }
//}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCB5ID0gbmV3IFkoJ2h0bWxlZGl0b3InLCB7XG4gIGNvbm5lY3Rvcjoge1xuICAgIG5hbWU6ICd3ZWJydGMnLFxuICAgIC8vbmFtZTogJ3dlYnNvY2tldHMtY2xpZW50JyxcbiAgICByb29tOiAnZGluZXNoJyxcbiAgICB1cmw6ICdodHRwOi8vZmlud2luLmlvOjEyNTYnXG4gIH0sXG4gIHNoYXJlOiB7XG4gICAgY29kZW1pcnJvcjogJ1RleHQnLFxuICAgIGNvZGVtaXJyb3IyOiAnVGV4dCcsXG4gICAgY29kZW1pcnJvcjM6ICdUZXh0JyxcbiAgICBjb2RlbWlycm9yNDogJ1RleHQnLFxuICAgIGNvZGVtaXJyb3I1OiAnVGV4dCcsXG4gICAgY29kZW1pcnJvcjY6ICdUZXh0JyxcbiAgICBjb2RlbWlycm9yNzogJ1RleHQnLFxuICAgIGNvZGVtaXJyb3I4OiAnVGV4dCcsXG4gICAgY29kZW1pcnJvcjk6ICdUZXh0JyxcbiAgICBjb2RlbWlycm9yMTA6ICdUZXh0JyxcbiAgICB4bWw6ICdYbWwnLFxuICAgIHhtbDI6ICdYbWwnLFxuICAgIHhtbDM6ICdYbWwnLFxuICAgIHhtbDQ6ICdYbWwnLFxuICAgIHhtbDU6ICdYbWwnLFxuICAgIHhtbDY6ICdYbWwnLFxuICAgIHhtbDc6ICdYbWwnLFxuICAgIHhtbDg6ICdYbWwnLFxuICAgIHhtbDk6ICdYbWwnLFxuICAgIHhtbDEwOiAnWG1sJ1xuICB9XG59KTtcblxuLy93aW5kb3cueSA9IHk7XG4vL3dpbmRvdy55WG1sVHlwZSA9IHkuZGVmaW5lKCd4bWwnLCBZLlhtbEZyYWdtZW50KTtcbi8vbmV3IFkuRG9tQmluZGluZyh3aW5kb3cueVhtbFR5cGUsIGRvY3VtZW50LmJvZHkpO1xuLy9cbmNvbnNvbGUubG9nKCcjIyMjIyMjIyMjIyMnKTtcbi8vd2luZG93LnlYbWwgPSB5O1xueS5zaGFyZS5jb2RlbWlycm9yLmJpbmQod2luZG93LnNoYXJlZF9lbGVtZW50c1snY29kZW1pcnJvciddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjIuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yMiddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjMuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yMyddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjQuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yNCddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjUuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yNSddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjYuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yNiddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjcuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yNyddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjguYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yOCddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjkuYmluZCh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWydjb2RlbWlycm9yOSddKTtcbnkuc2hhcmUuY29kZW1pcnJvcjEwLmJpbmQod2luZG93LnNoYXJlZF9lbGVtZW50c1snY29kZW1pcnJvcjEwJ10pO1xueS5zaGFyZS54bWwuX2JpbmRUb0RvbSh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWyd4bWwnXSk7XG55LnNoYXJlLnhtbDIuX2JpbmRUb0RvbSh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWyd4bWwyJ10pO1xueS5zaGFyZS54bWwzLl9iaW5kVG9Eb20od2luZG93LnNoYXJlZF9lbGVtZW50c1sneG1sMyddKTtcbnkuc2hhcmUueG1sNC5fYmluZFRvRG9tKHdpbmRvdy5zaGFyZWRfZWxlbWVudHNbJ3htbDQnXSk7XG55LnNoYXJlLnhtbDUuX2JpbmRUb0RvbSh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWyd4bWw1J10pO1xueS5zaGFyZS54bWw2Ll9iaW5kVG9Eb20od2luZG93LnNoYXJlZF9lbGVtZW50c1sneG1sNiddKTtcbnkuc2hhcmUueG1sNy5fYmluZFRvRG9tKHdpbmRvdy5zaGFyZWRfZWxlbWVudHNbJ3htbDcnXSk7XG55LnNoYXJlLnhtbDguX2JpbmRUb0RvbSh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWyd4bWw4J10pO1xueS5zaGFyZS54bWw5Ll9iaW5kVG9Eb20od2luZG93LnNoYXJlZF9lbGVtZW50c1sneG1sOSddKTtcbnkuc2hhcmUueG1sMTAuX2JpbmRUb0RvbSh3aW5kb3cuc2hhcmVkX2VsZW1lbnRzWyd4bWwxMCddKTtcblxuXG4vL3dpbmRvdy51bmRvTWFuYWdlciA9IG5ldyBZLnV0aWxzLlVuZG9NYW5hZ2VyKHdpbmRvdy55WG1sVHlwZSwge1xuLy8gIGNhcHR1cmVUaW1lb3V0OiA1MDBcbi8vfSlcbi8vXG4vL2RvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIGludGVyY2VwdFVuZG9SZWRvIChlKSB7XG4vLyAgaWYgKGUua2V5Q29kZSA9PT0gOTAgJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpKSB7XG4vLyAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbi8vICAgICAgd2luZG93LnVuZG9NYW5hZ2VyLnVuZG8oKVxuLy8gICAgfSBlbHNlIHtcbi8vICAgICAgd2luZG93LnVuZG9NYW5hZ2VyLnJlZG8oKVxuLy8gICAgfVxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgfVxuLy99XG4iXX0=
