// // jQuery uses CSS syntax to select elements and in addition, it has some own custom selectors.
// -> Element Selector : e.g; 'p', 'div'

// -> Id Selector : e.g; '#btn', '#myid'

// -> Class Selector : e.g; '.myclass', '.city'

// -> Universal Selector : e.g; '*'

// jQuery("button").click(function(){
//     console.log('Clicked')
// });

// $("button").click(function(){
//     console.log('Clicked')
// });

jQuery.noConflict();
jQuery(document).ready(function($){
    $("button").click(function(){
        console.log('Clicked')
    });

    $("p").click(()=>{
        alert('Element Selector');
    });

    $("#btn-id").click(()=>{
        alert('ID Selector');
    });

    $(".btn-class").click(()=>{
        alert('Class Selector');
    });
});

// $.noConflict();
// $().ready(()=>{
//     $("button").click(()=>{
//         console.log('Clicked')
//     });
// });

