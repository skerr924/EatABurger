// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".devourBtn").on("click", function(event){ 
        var id = $(this).data("id"); 
        var newDevourState = { 
            devoured: true
        }; 

        $.ajax("/api/burgers/"+id, { 
            type: "PUT", 
            data: newDevourState
        }).then(
            function(){ 
                console.log("changed devoured state to true"); 
                location.reload(); 
            }
        );
    });

    $(".addBurger").on("click", function(event) {
        event.preventDefault();
        console.log("clicked")
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };

        //POST request to data
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".deleteBtn").on("click", function(event){ 
        event.preventDefault(); 
        console.log("delete button clicked")

        $.ajax("/api/burgers/all", { 
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted all burgers"); 
                location.reload(); 
            }
        );
    });
});
