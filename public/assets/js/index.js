$("#create-burger").submit(() => {
  const data = {
    burger_name: $("#burger-name").val().trim(),
  };
  if (data.burger_name) {
    $.post("/api/burgers", data, () => location.reload());
  }
});
