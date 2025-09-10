const API_BASE = "https://disease.sh/v3/covid-19";

function getData(country) {
    let url = country ? API_BASE + "/countries/" + country : API_BASE + "/all";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("countryName").textContent = country || "Global";
            document.getElementById("cases").textContent = data.cases;
            document.getElementById("deaths").textContent = data.deaths;
            document.getElementById("recovered").textContent = data.recovered;
        })
        .catch(function(error) {
            console.error("Error fetching data:", error);
        });
}

document.getElementById("countrySelect").addEventListener("change", function () {
    getData(this.value);
});

getData();