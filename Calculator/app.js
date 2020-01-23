$(() => {
  const handleButtonClick = event => {
    console.log($(event.taget).text());
  };

  $(".button").on("click", handleButtonClick);
});
