//Keyboard Events

$().ready(()=>{
    $("#name").keypress(()=>{
        console.log("Key pressed!");
    });

    $("#name").keydown(()=>{
        console.log("Key down!");
    });

    $("#name").keyup(()=>{
        console.log("Key up!");
    });
});