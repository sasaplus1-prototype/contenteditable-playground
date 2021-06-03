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

    document.addEventListener('selectionchange', function(event) {
      console.log('selectionchange', document.getSelection());
    }, false);

    //-----

    console.info('setup done');
  }

}());
