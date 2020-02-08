console.log("Works");
$(() => {
  // function that requests Queens data
  const $queens = $.ajax({
    url:
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD",
    type: "GET",
    data: {
      $limit: 10,
    },
  }).done(function(data) {
    // alert("Retrived " + data.length + " records from the dataset!");
    console.log(data);
  });

  //   function that requests Brooklyn data
  const $brooklyn = $.ajax({
    url:
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD",
    type: "GET",
    data: {
      $limit: 10,
    },
  }).done(function(data) {
    // alert("Retrived " + data.length + " records from the dataset!");
    console.log(data);
  });

  // requests Manhattan data
  const $manhattan = $.ajax({
    url:
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD",
    type: "GET",
    data: {
      $limit: 10,
    },
  }).done(function(data) {
    // alert("Retrived " + data.length + " records from the dataset!");
    console.log(data);
  });

  //   requests Bronx data
  const $bronx = $.ajax({
    url:
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD",
    type: "GET",
    data: {
      $limit: 10,
    },
  }).done(function(data) {
    // alert("Retrived " + data.length + " records from the dataset!");
    console.log(data);
  });

  //   request Staten Island data
  const $statenIsland = $.ajax({
    url:
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN%20ISLAND&agency=NYPD",
    type: "GET",
    data: {
      $limit: 10,
    },
  }).done(function(data) {
    // alert("Retrived " + data.length + " records from the dataset!");
    console.log(data);
    $("#staten").html(data.descriptor);
  });

  const handleClick = () => {
    if ($(event.currentTarget).text() === "Queens") {
      $queens();
    } else if ($(event.currentTarget).text() === "Brookyln") {
      $brooklyn();
    }
  };

  $("button").on("click", handleClick);
});
