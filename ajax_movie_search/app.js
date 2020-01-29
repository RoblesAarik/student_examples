console.log("Works");

$(() => {
  const promise = $.ajax({
    url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
  });

  promise.then(
    data => {
      console.log(data);
    },
    () => {
      console.log("bad request");
    }
  );
});
