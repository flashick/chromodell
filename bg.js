chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {
  function suggest(filename, conflictAction) {
    __suggest({filename: filename,
               conflictAction: conflictAction,
               conflict_action: conflictAction});
  }
	if (item.filename.match(/viewer.jnlp.+/)){
		item.filename = "viewer.jnlp"
		suggest(item.filename, 'overwrite');
	}
});
