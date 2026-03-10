async function loadData() {

  const response = await fetch(
    "https://jolly-dream-4dc5.reeamm.workers.dev/"
  );

  const data = await response.json();

  document.getElementById("result").innerText =
    "Scraped title: " + data.title;
}
