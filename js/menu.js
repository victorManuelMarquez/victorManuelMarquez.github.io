// fuente: https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});