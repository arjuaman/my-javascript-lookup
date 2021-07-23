import "../css/main.css";

import { getWeatherData } from "./GetData";

onload = () => {
  // const location_table = document.getElementById('location-details') as HTMLTableElement;
  // const stats_table = document.getElementById('current-stats') as HTMLTableElement;
  const input = document.getElementById("input-place") as HTMLInputElement;
  let to_search: string | undefined;
  input.addEventListener("keyup", (e: KeyboardEvent) => {
    to_search = input.value;
    // console.log("Event recorded");

    if (e.key === "Enter" || e.keyCode === 13) {
      const name = document.getElementById("name") as HTMLElement;
      const region = document.getElementById("region") as HTMLElement;
      const country = document.getElementById("country") as HTMLElement;
      const lat = document.getElementById("lat") as HTMLElement;
      const lon = document.getElementById("lon") as HTMLElement;
      const time = document.getElementById("time") as HTMLElement;

      const last_updated = document.getElementById(
        "last_updated"
      ) as HTMLElement;
      const temp_c = document.getElementById("temp_c") as HTMLElement;
      const temp_f = document.getElementById("temp_f") as HTMLElement;
      const condition_text = document.getElementById(
        "condition_text"
      ) as HTMLElement;
      // const wind_mph = document.getElementById("wind_mph") as HTMLElement;
      const wind_kph = document.getElementById("wind_kph") as HTMLElement;
      const wind_degree = document.getElementById("wind_degree") as HTMLElement;
      const wind_dir = document.getElementById("wind_dir") as HTMLElement;
      // const pressure_mb = document.getElementById("pressure_mb") as HTMLElement;
      // const pressure_in = document.getElementById("pressure_in") as HTMLElement;
      // const precip_mm = document.getElementById("precip_mm") as HTMLElement;
      // const precip_in = document.getElementById("precip_in") as HTMLElement;
      const humidity = document.getElementById("humidity") as HTMLElement;
      const cloud = document.getElementById("cloud") as HTMLElement;
      const feelslike_c = document.getElementById("feelslike_c") as HTMLElement;
      // const feelslike_f = document.getElementById("feelslike_f") as HTMLElement;
      const vis_km = document.getElementById("vis_km") as HTMLElement;
      // const vis_miles = document.getElementById("vis_miles") as HTMLElement;
      const uv = document.getElementById("uv") as HTMLElement;
      // const gust_mph = document.getElementById("gust_mph") as HTMLElement;
      // const gust_kph = document.getElementById("gust_kph") as HTMLElement;

      const result = getWeatherData(to_search);
      result
        .then((data) => {
          {
            name.innerHTML = `<strong>Name:</strong> ${data.location.name} `;
            region.innerHTML = `<strong>Region:</strong> ${data.location.region}`;
            country.innerHTML = `<strong>Country:</strong>  ${data.location.country}`;
            lat.innerHTML = `<strong>Latitude:</strong> ${data.location.lat}`;
            lon.innerHTML = `<strong>Longitude:</strong> ${data.location.lon}`;
            time.innerHTML = `<strong>Localtime:</strong> ${data.location.localtime}`;

            last_updated.innerHTML = `<strong>Last updated:</strong> ${data.current.last_updated}`;
            temp_c.innerHTML = `<strong>Temperature (in Celcius):</strong> ${data.current.temp_c}`;
            temp_f.innerHTML = `<strong>Temperature (in Fahreneit):</strong> ${data.current.temp_f}`;
            condition_text.innerHTML = `<strong>Hmmm it seems there is:</strong> ${data.current.condition.text} !!`;
            // wind_mph.innerHTML = `<strong>Wind in mph:</strong> ${data.current.wind_mph}`;
            wind_kph.innerHTML = `<strong>Wind (in kph):</strong> ${data.current.wind_kph}`;
            wind_degree.innerHTML = `<strong>Wind degree:</strong>${data.current.wind_degree}`;
            wind_dir.innerHTML = `<strong>Wind direction:</strong> ${data.current.wind_dir}`;
            // pressure_in.innerHTML = `<strong>Pressure:</strong> ${data.current.pressure_in}`;
            // pressure_mb.innerHTML = `<strong>Pressure in mb:</strong> ${data.current.pressure_mb}`;
            // precip_in.innerHTML = `<strong>Precipitation:</strong> ${data.current.precip_in}`;
            // precip_mm.innerHTML = `<strong>Precipitation in mm: </strong>${data.current.precip_mm}`;
            humidity.innerHTML = `<strong>Humidity:</strong> ${data.current.humidity}`;
            cloud.innerHTML = `<strong>Cloud:</strong> ${data.current.cloud}`;
            // feelslike_f.innerHTML = `<strong>Feels like (Fahreneit):</strong> ${data.current.feelslike_f}`;
            feelslike_c.innerHTML = `<strong>Feels like (Celcius):</strong> ${data.current.feelslike_c}`;
            // vis_miles.innerHTML = `<strong>Visibility in miles:</strong> ${data.current.vis_miles}`;
            vis_km.innerHTML = `<strong>Visibility (in km):</strong> ${data.current.vis_km}`;
            uv.innerHTML = `<strong>UV:</strong> ${data.current.uv}`;
            // gust_kph.innerHTML = `<strong>Gust kph:</strong> ${data.current.gust_kph}`;
            // gust_mph.innerHTML = `<strong>Gust mph:</strong> ${data.current.gust_mph}`;
          }
        })
        .catch((err) => {
          alert("No region found of such name, please try again!");
        });
    }
  });
};

/*
fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=patna", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3e54eccc67msh4a93ffd74125e4ep18034djsne94106419d2a",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data=>console.log(data));

//run using  tsc ./src/index.ts --target es6

*/
