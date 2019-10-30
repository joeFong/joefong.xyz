window.onload = function() {
    //Get the button:
    var saveResumeEl = document.getElementById("saveResume");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            saveResumeEl.style.display = "block";

            saveResumeEl.addEventListener("click", saveResume);

        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function saveResume() {
        //document.body.scrollTop = 0; // For Safari
        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        var win = window.open('https://joefong.xyz/wp-content/uploads/2019/10/joemanfong_resume.pdf', '_blank');
        win.focus();
    }


}
