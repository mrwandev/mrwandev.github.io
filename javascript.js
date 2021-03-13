function handleTheMainJsScript(scriptName, headId)
{
    var slashesNum = (window.location.href.split("/").length - 1) - 2; // count slashes and the last -2 for the: https://
    var where = '';

    // adds ../ with the slashesNum so it get the main script where ever u were in the goddamn website
    for (i = 0; i < slashesNum - 1; i++) 
    {
        where += '../';
    }

    // these 5 lines make a script tag: <script src="javascript.js" id="bruh">< /script> and put it in the head tag
    var tagToAdd = document.createElement("script");
    tagToAdd.setAttribute('src', where + scriptName + '.js');
    tagToAdd.setAttribute('id', 'bruh'); // i needed it before but now nah but meeh whatever i jst wanted to keep it there. send me a dm in twitter @mrwandev "yeee boi im frm the code" if u read this.
    var element = document.getElementById(headId);
    element.appendChild(tagToAdd);

    // checks if there is a script tag cuz else it'll skip the function that redirects
    let update = null;

    update = setInterval(() => 
    {
        if(document.querySelector('head').contains(document.querySelector('script')))
        {
            // function that calls another function cuz cant call function in main file from this interval
            callRedirect();
            clearInterval(update);
        }
    }, 0);
}



function callRedirect()
{   
    $.getscript("main.js", function()
    {
        redirectWithTimer(10, "", "");
    });
};