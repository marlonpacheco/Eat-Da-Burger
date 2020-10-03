//Munch button on-click function
$(function () {
    $(".munchBtn").on("click", function () {
        let id = $(this).data("id");
        let consumed = $(this).data("munched");

        let burgerStatus = {
            munched: consumed
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function () {
                location.reload()
            }
        )
    })
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
 
     let newBurger = {
       name: $("#burg").val().trim(),
     };
 
     // Send the POST request.
     $.ajax("/api/burgers", {
       type: "POST",
       data: newBurger
     }).then(
       function() {
         console.log("added burger");
         // Reload the page to get the updated list
         location.reload();
       }
     );
   });
})

