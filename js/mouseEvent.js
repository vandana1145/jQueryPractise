//Mouse events : click, doubleclick, mouseenter, mouseleave, hover etc

$().ready(()=>{
    $("p").click(()=>{
        console.log('Clicked!');
    });

    $("#p1").dblclick(()=>{
        console.log('Double Clicked!');
    });

    $(".p2").mouseenter(()=>{
        console.log('Mouse enters!');
    });

    $(".p2").mouseleave(()=>{
        console.log('Mouse leaves!');
    });

    $(".p2").hover(()=>{
        console.log('Mouse hovered!');
    });
}); 

// const newLocal = $().ready(() => {
//     $("p").click(() => {
//         console.log('Clicked!');
//     });

//     $("#p1").dblclick(() => {
//         console.log('Double Clicked!');
//     });

//     $(".p2").mouseenter(() => {
//         console.log('Mouse enters!');
//     });

//     $(".p2").mouseleave(() => {
//         console.log('Mouse leaves!');
//     });

//     $(".p2").hover(() => {
//         console.log('Mouse hovered!');
//     });
// }); 