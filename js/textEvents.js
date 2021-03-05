
$().ready(()=>{
    // // Get text
    // let textdata = $("p").text();
    // console.log(textdata)

    // // Set text
    // $("#btn-setText").click(()=>{
    //     let newtextdata = "This is a new World...";
    //     $("p").text(newtextdata);
    // });

    // // Get HTML
    // let htmldata = $("p").html();
    // console.log(htmldata);

    // // Set HTML
    // $("#btn-setHTML").click(()=>{
    //     let newhtmldata = "<b>This is a new HTML tag</b>";
    //     $("p").html(newhtmldata);
    // })

    // Get value
    let inputValue = $("#name").val();
    console.log(inputValue);

    // Set Value
    $("#btn-setValue").click(()=>{
        let newValue = "I am excited.";
        $("#name").val(newValue)
    })

    // Get Attribute
    let attrValue1 = $("link").attr("href");
    console.log(attrValue1);

    let attrValue2 = $("#name").attr("data-new");
    console.log(attrValue2);

    $("#btn-setAttrValue").click(()=>{
        // Get Old Data
        console.log("Old data:", $("#name").attr("data-new"))

        // Set New Data
        $("#name").attr("data-new", "BeTheBest");

        // Get New Data
        console.log("New set data:", $("#name").attr("data-new"));
    });

    // Set Image Attribute
    $("#btn-setImageAttr").click(()=>{
        $("#human-id").attr("id", "tech-id");
        $("#tech-id").attr({"src":"image/tech.jpg", 
                            "alt":"tech"});
    });

});