let chart;

function calculate() {

  let km = parseFloat(document.getElementById("km").value);
  let petrol = parseFloat(document.getElementById("petrol").value);
  let diesel = parseFloat(document.getElementById("diesel").value);
  let electric = parseFloat(document.getElementById("electric").value);
  let mileage = parseFloat(document.getElementById("mileage").value);

  if (isNaN(km) || isNaN(petrol) || isNaN(diesel) || isNaN(electric) || isNaN(mileage)) {
    alert("Fill all fields");
    return;
  }

  // Calculations
  let petrolCost = (km / mileage) * petrol * 30;
  let dieselCost = (km / mileage) * diesel * 30;
  let evCost = (km / 6) * electric * 30;

  // Show results
  document.getElementById("petrolRes").innerText =
    "⛽ Petrol: ₹" + petrolCost.toFixed(0);

  document.getElementById("dieselRes").innerText =
    "🛢️ Diesel: ₹" + dieselCost.toFixed(0);

  document.getElementById("evRes").innerText =
    "⚡ EV: ₹" + evCost.toFixed(0);

  // Best option
  let min = Math.min(petrolCost, dieselCost, evCost);
  let best = "";

  if (min === evCost) best = "⚡ EV is cheapest";
  else if (min === dieselCost) best = "🛢️ Diesel is cheapest";
  else best = "⛽ Petrol is cheapest";

  document.getElementById("best").innerText = best;

  // Chart
  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["Petrol", "Diesel", "EV"],
      datasets: [{
        label: "Monthly Cost ₹",
        data: [petrolCost, dieselCost, evCost]
      }]
    }
  });
}
