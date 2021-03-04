// Image related Events

$(document).ready(()=>{

    //Hide
    $("#btn-hide").click(()=>{
        $("#cat-id").hide(3000, ()=>{
            console.log("The hidden Cat!");
        });
    });

    //Show
    $("#btn-show").click(()=>{
        $("#cat-id").show(2000, ()=>{
            console.log("Show the Cat!");
        });
    });

    //Toggle
    $("#btn-toggle").click(()=>{
        $("#cat-id").toggle(1000, ()=>{
            console.log("Toggled Cat!");
        });
    });

    jQuery("#btn-fade-out").click(()=>{
        jQuery("#cat-id").fadeOut(1000, ()=>{
            console.log("The Cat faded out!");
        });
    });

    jQuery("#btn-fade-in").click(()=>{
        jQuery("#cat-id").fadeIn(2000, ()=>{
            console.log("The Cat faded in!");
        });
    });

    jQuery("#btn-fade-to").click(()=>{
        jQuery("#cat-id").fadeTo(3000, 0.5, ()=>{
            console.log("The Cat fades to half!");
        });
    });

    jQuery("#btn-fade-toggle").click(()=>{
        jQuery("#cat-id").fadeToggle(3000, ()=>{
            console.log("The Cat fades toggled");
        });
    });

    $("#btn-slide-up").click(()=>{
        $("#cat-id").slideUp(1000, ()=>{
            console.log("Slide Up the Cat!");
        });
    });

    $("#btn-slide-down").click(()=>{
        $("#cat-id").slideDown(1000, ()=>{
            console.log("Slide down the Cat!");
        });
    });

    $("#btn-slide-toggle").click(()=>{
        $("#cat-id").slideToggle(1000, ()=>{
            console.log("Slide toggle the Cat!");
        });
    });

    $(".btn-human").click(()=>{
        $("#human-id").animate({left: "+=100"}, 1000, ()=>{
            console.log("Animated human!");
        });
    });

});