window.onscroll = function() {
    if (window.scrollY == 0) {
        document.getElementById("navbar").style.backgroundColor = "transparent"; 
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = ""; 
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "#540a0a"
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
        }
    }
};

