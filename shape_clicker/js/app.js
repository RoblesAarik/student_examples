console.log("shape clicker js file is connected");

//remember to set up your window onload!
const shapes = [
  "circle",
  "square",
  "triangle-down",
  "octagon",
  "heart",
  "triangle",
];

$(() => {
  const handleClick = event => {
    let $currentShape = $(event.currentTarget);
    $currentShape.removeClass();
    $currentShape.addClass(shapes[0]);
    shapes.push(shapes[0]);
    shapes.shift([0]);
  };

  $(".triangle").on("click", handleClick);
});
