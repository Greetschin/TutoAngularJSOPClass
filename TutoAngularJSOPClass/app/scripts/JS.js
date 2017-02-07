$(function () {
    $(window).scroll(
            function () {//Au scroll dans la fenetre on d�clenche la fonction
                if ($(this).scrollTop() > 150) { //si on a d�fil� de plus de 150px du haut vers le bas
                    $('#top-header').addClass("fixtop-header"); //on ajoute la classe "fixNavigation" � <div id="navigation">
                } else {
                    $('#top-header').removeClass("fixtop-header");//sinon on retire la classe "fixNavigation" � <div id="navigation">
                }
            }
    );
});
console.log("Fin JS.js");