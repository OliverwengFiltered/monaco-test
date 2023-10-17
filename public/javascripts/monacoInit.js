(async () => {
    // un comment the below code to reproduce the issue.
    // monaco.EditorLib.editor.getModels().forEach((m) => {
    //     m.dispose();
    // });
    if (!monaco.LanguageClientLib.wasVscodeApiInitialized()) {
        await monaco.LanguageClientLib.initServices({
            enableFilesService: true,
            debugLogging: false
        });
    }
    const editor = monaco.EditorLib.editor.create(document.getElementById('editor'), {
        language: 'javascript',
        theme: 'vs-dark',
        wordWrap: 'on',
        wrappingIndent: 'same',
        scrollBeyondLastLine: false,
        renderWhitespace: 'all',
        codeLens: false,
        formatOnPaste: true,
        fontSize: 12,
        fixedOverflowWidgets: true,
        contextmenu: false,
        lineNumbers: 'on',
        lightbulb: {
            enabled: true
        },
        pasteAs: { enabled: false }
    });
})();