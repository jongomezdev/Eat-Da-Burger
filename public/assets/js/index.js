$("#create-burger").submit(() => {
  const data = {
    burger_name: $("#burger-name").val().trim(),
  };
  if (data.burger_name) {
    $.post("/api/burgers", data, () => location.reload());
  }
});

$(".devour-btn").click(function () {
  console.log("you clicked me");
  const id = $(this).attr("data-id");
  $.ajax(`/api/burgers/${id}`, {
    type: "PATCH",
  }).then(() => location.reload());
});

$("#clear-btn").click(() => {
  $.ajax("/api/burgers", {
    type: "DELETE",
  }).then(() => location.reload());
});
