async function fetchWeather() {
  // My NASA API key
  const key = "?api_key=bTf1g1Q2o8yIUAKBFUNwZFotBpUMxecD5efRgfr6"

  // Using DEMO key while NASA is fixing the Insight sensors
  const demoKey = "?api_key=DEMO_KEY"

  // API Base url with added key and feed type/version
  const url =
    "https://api.nasa.gov/insight_weather/" + key + "&feedtype=json&ver=1.0"

  // Fetching response from the API and calling the displayWeather function
  try {
    const response = await fetch(url)
    const json = await response.json()
    displayWeather(json)

    // Cathing any errors and displaying error message
  } catch (error) {
    console.error(error)

    const errorContainer = document.querySelector(".weather-error-container")

    errorContainer.innerHTML = `
            <p class="error__message">
                I'm sorry Dave, I'm afraid I can't do that.
            </p>
        `
  }
}

// Function to display the following 6 days in the DOM
function displayWeather(json) {
  console.log(json)
  // Get all sols from the API response
  const sols = json.sol_keys

  // Declare the HTML variable
  let html = ""

  sols.forEach(sol => {
    let weather = json[sol]

    // Get the corresponding earth date
    const earthDate = new Date(weather.First_UTC).toLocaleDateString(
      undefined,
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    )

    // Function to round down the numbers
    function roundValues(value) {
      return Math.round(value)
    }

    // Get the air temperatures
    const maxTemp = weather.AT ? roundValues(weather.AT.mx) : "No reading"
    const minTemp = weather.AT ? roundValues(weather.AT.mn) : "No reading"

    // Get the wind speed
    const maxWind = weather.HWS ? roundValues(weather.HWS.mx) : "No reading"
    const minWind = weather.HWS ? roundValues(weather.HWS.mn) : "No reading"

    // Get the wind direction if there are readings available
    const windDirection = weather.WD.most_common
      ? weather.WD.most_common.compass_degrees
      : "No reading"
    const compassHeading = weather.WD.most_common
      ? weather.WD.most_common.compass_point
      : "No reading"

    // Create the html for displaying the weather data
    html += `
                <div class="mars__weather__entry">
                    <p class="mars__weather__date">Sol ${sol} | ${earthDate}</p>
                    <p class="mars__weather__heading">Air temperature</p>
                    <p class="mars__weather__details">
                        Low: ${minTemp}&deg; C | High: ${maxTemp}&deg; C
                    </p>
                    <p class="mars__weather__heading">Wind speed</p>
                    <p class="mars__weather__details">Min: ${maxWind} m/s | Max: ${maxWind} m/s</p>
                    <p class="mars__weather__heading">Wind direction</p>
                    <div class="compass">
                    <div class="arrow" style="transform: rotate(${windDirection}deg)"></div>
                    </div>
                    <p class="mars__weather__details">${windDirection}&deg; ${compassHeading}</p>

                </div>
        `
  })

  // get the container to display the weather
  const container = document.querySelector(".mars__weather__container")

  // Apply the HTML to the container
  container.innerHTML = html

  // Remove the loader
  const loader = document.querySelector(".mars__weather__display .loader")
  loader.style.display = "none"
}

// Calling the function to fetch the weather
fetchWeather()
