$().ready(()=>{
    // Add CSS Class
    $("#btn-addClass").click(()=>{
        $("p").addClass("myClass");
    });

    // Remove CSS Class
    $("#btn-removeClass").click(()=>{
        $("p").removeClass("myClass");
    });

    // Toggle CSS Class
    $("#btn-toggleClass").click(()=>{
        $("p").toggleClass("myClass");
    });
});