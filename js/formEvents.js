// Form Events

$().ready(()=>{
    $("#name").focus(()=>{
        console.log("Focus Field!");
    });

    $("#name").blur(()=>{
        console.log("Blur Field!");
    });

    $("#form-id").submit((e)=>{
        console.log("Form Submitted!");
        e.preventDefault();
    });


    // Window Event : Load, Unload, Scroll, Resize  
    $(window).resize(()=>{
        console.log("Window Resized!");
    });

});