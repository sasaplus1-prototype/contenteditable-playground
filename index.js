(function(){

  'use strict';

  const editor = document.getElementById('js-editor');

  if (editor) {
    const selectionObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'characterData') {
          console.log('characterData old value:', mutation.oldValue);
          console.log('characterData new value:', mutation.target.textContent);
        }
      });
    });

    selectionObserver.observe(editor, {
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true,
    });

    //-----

    editor.addEventListener('keydown', function(event) {
      console.log('keydown', event);
    }, false);

    editor.addEventListener('keypress', function(event) {
      console.log('keypress', event);
    }, false);

    editor.addEventListener('keyup', function(event) {
      console.log('keyup', event);
    }, false);

    editor.addEventListener('input', function(event) {
      console.log('input', event);
    }, false);

    //-----

    // NOTE: trigger when move caret
    document.addEventListener('selectionchange', function(event) {
      console.log('selectionchange', document.getSelection());
    }, false);

    document.addEventListener('copy', function(event) {
      console.log('copy', event);
    }, false);

    document.addEventListener('paste', function(event) {
      console.log('paste', event);
    }, false);

    //-----

    console.info('setup done');
  }

}());
