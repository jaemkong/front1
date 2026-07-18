export async function getWeather(lat, lon) {
    var apiUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

    var response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("날씨 정보를 가져오지 못했습니다.");
    }

    var data = await response.json();

    return data.current;
}