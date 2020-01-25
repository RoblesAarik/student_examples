var firstNumber, secondNumber, operation;

$(() => {
  const handleButtonClick = event => {
    const buttonValue = $(event.target).text();
    const displayValue = $("#display").text();
    // console.log($(event.target).text());

    // Find out if button is number container or operation container
    const buttonType = $(event.target)
      .parent()
      .attr("class");

    if (buttonType === "numbers") {
      $("#display").text(`${displayValue}${buttonValue}`);
    } else {
      // if an operation button is clicked
      // console.log("Operation button is clicked");
      if (buttonValue === "+") {
        console.log("Plus button clicked");
        operation = buttonValue;

        // Check if first number exists
        if (firstNumber) {
          alert("Number already defined");
        } else {
          firstNumber = Number(displayValue);
          $("#display").text("");
        }
      } else if (buttonValue === "-") {
        console.log("Minus button clicked");
      } else if (buttonValue === "=") {
        // add, subtract, divide, or multiply numbers together
        if (operation === "+") {
          // grab second number
          secondNumber = Number(displayValue);
          // sum of the numbers
          $("#display").text((firstNumber += secondNumber));
        }
      }
    }
  };

  $(".button").on("click", handleButtonClick);
});
