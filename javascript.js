function bars(x) {
    x.classList.toggle("change");
}

function checkBoxFunction() {
    document.documentElement.style.setProperty('--transitionTimeSwitch', '.4s');
    document.documentElement.style.setProperty('--transitionTime', '.4s');

    var checkBox = document.getElementById("themeCheck");

    if (checkBox.checked == true) {

        document.body.style.background = "#e8e8e8";
        document.getElementById("header1").style.backgroundColor = "#f5f5f5";

        document.getElementById("att1").style.color = "#131313";
        document.getElementById("att2").style.color = "#131313";
        document.getElementById("att3").style.color = "#131313";
        document.getElementById("logo").style.color = "#131313";

        document.documentElement.style.setProperty('--hoverColor', '#dddddd');
        document.documentElement.style.setProperty('--shadowColor', 'black');
        document.documentElement.style.setProperty('--cornerColor', '#f5f5f5');

        document.getElementById("bar1").style.backgroundColor = "#131313";
        document.getElementById("bar2").style.backgroundColor = "#131313";
        document.getElementById("bar3").style.backgroundColor = "#131313";
    } 
    else {
        document.body.style.background = "#131313";
        document.getElementById("header1").style.backgroundColor = "#202020";

        document.getElementById("att1").style.color = "#e1e1e1";
        document.getElementById("att2").style.color = "#e1e1e1";
        document.getElementById("att3").style.color = "#e1e1e1";
        document.getElementById("logo").style.color = "#e1e1e1";

        document.documentElement.style.setProperty('--hoverColor', '#595959');
        // document.documentElement.style.setProperty('--shadowColor', 'white');
        document.documentElement.style.setProperty('--cornerColor', '#202020');

        document.getElementById("bar1").style.backgroundColor = "#e1e1e1";
        document.getElementById("bar2").style.backgroundColor = "#e1e1e1";
        document.getElementById("bar3").style.backgroundColor = "#e1e1e1";
    }
}