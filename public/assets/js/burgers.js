//Munch button on-click function
$(function () {
    $(".munchBtn").on("click", function () {
        let id = $(this).data("id");
        let consumed = $(this).data("data-munched");

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
})