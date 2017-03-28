// Checking page title

/*
 * Message wrapper: div._1t_p
 * Name tag: h5._ih3 > span._3oh- > span
 *          div.clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr
 *          div.clearfix _o46 _3erg _29_7 direction_ltr text_align_ltr 
 * Message: div.clearfix _o46 _3erg
      div._3058 _ui9 _hh7 _aol _s1- _52mr _43by _3oh-
      div._3058 _ui9 _hh7 _aol _s1- _52mr _3oh- 
    > div._3058 _ui9 _hh7 _aol _s1- _52mr _3oh- 
        > div._aok 
            > span._3oh- _58nk 
                > span
*/

if (document.title.indexOf("Messenger") != -1) {
    scanPage();
}

document.body.onload = scanPage;

function scanPage(){
    var message_wrappers = document.getElementsByClassName("_1t_p");
    for(var i = 0; i < message_wrappers.length; i++){
        var name = message_wrappers[i].getElementsByClassName("_41ud")[0].getElementsByTagName("h5")[0].children[0].children[0].innerHTML;
        var messages = message_wrappers[i].getElementsByClassName("_41ud")[0].getElementsByClassName("_3058");
        //Loop through the message_wrappers
        for(var x = 0; x < messages.length; x++){
            var message = messages[x].getElementsByClassName("_aok")[0].getElementsByClassName("_3oh-")[0].innerHTML;
            message = str_replace(message, 'lzm', 'liksom');
            message = str_replace(message, 'idee', 'idé');
            message = str_replace(message, 'mlder', 'meldinger');
            console.log(message);
            document.getElementsByClassName("_1t_p")[i].getElementsByClassName("_41ud")[0].getElementsByClassName("_3058")[x].getElementsByClassName("_aok")[0].getElementsByClassName("_3oh-")[0].innerHTML = message;
        }
    }
}

function str_replace(str, replace, replaceWith){
    str = str.replace(' ' + replace + ' ', ' ' + replaceWith + ' ');
    str = str.replace(' ' + replace + '?', ' ' + replaceWith + '?');
    str = str.replace(' ' + replace + '!', ' ' + replaceWith + '!');
    str = str.replace(' ' + replace + '.', ' ' + replaceWith + '.');
    return str;
}