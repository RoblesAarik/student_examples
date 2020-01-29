console.log("Works");

$(() => {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
    success: data => {
      console.log(data);
    },
    error: () => {
      console.log("bad request");
    },
  });
});
