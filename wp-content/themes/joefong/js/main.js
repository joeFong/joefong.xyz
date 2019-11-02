window.onload = function() {
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/json");
    editor.setValue(resumeObj);
    editor.removeSelectionMarker();
    
    editor.session.on('change', function(delta) {
        var value = editor.getValue(); // or session.getValue
        var resume = document.getElementById('resume');
        resume.setAttribute('resume', JSON.stringify(JSON.parse(value)));
    });

    // When the user clicks on the button, scroll to the top of the document
    function saveResume() {
        //document.body.scrollTop = 0; // For Safari
        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        var win = window.open('https://joefong.xyz/wp-content/uploads/2019/10/joemanfong_resume.pdf', '_blank');
        win.focus();
    }

}


