function lifeInWeeks(age) {
  const result = {
    years: 90 - age,
    days: (90 - age) * 365,
    weeks: (90 - age) * 52,
    months: (90 - age) * 12,
    hours: (90 - age) * 8760,
  };
  return result;
}

function displayResult(event) {
  let age = event.target.age.value;
  let result = lifeInWeeks(age);
  for (let key in result) {
    result[key] = result[key].toLocaleString();
  }

  let resultHTML = `
    <h1>You have ${result.years} years left.</h1>
    <h2>...or ${result.months} months left</h2>
    <h2>...or ${result.weeks} weeks left</h2>
    <h2>...or ${result.days} days left</h2>
    <h2>...or ${result.hours} hours left</h2>
    <h1>So think about what you want to do with rest of your time.</h1>`;
  $("#title").html(resultHTML);
  $("#submitForm").hide();
}

$("#submitForm").submit(function (event) {
  displayResult(event);
  event.preventDefault();
});

// restrict input to numbers only and set min to 1 and max to 90
$("#age").on("input", function () {
  if (this.value < 1) {
    this.value = '';
  } else if (this.value > 90) {
    this.value = 90;
  }
  this.value = this.value.replace(/[^0-9]/g, "");
});
