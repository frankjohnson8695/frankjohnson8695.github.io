$(document).ready(function () {

    // Add tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Add tooltip

    // Portfolio filter
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all") {
            $('.filter').show('3000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
    // Portfolio filter
});