$(document).ready(function(){
    console.log("hello jquery")
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        })
    })
})
$(document).ready(function(){
    console.log("hello jquery")
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#cards #card").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        })
    })
})