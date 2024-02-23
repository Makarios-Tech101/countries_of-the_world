async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedData = data.map(country => ({
            flag: country.flags.png,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital ? country.capital[0] : "N/A"
        }));

        return formattedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

async function displayCountryInfo() {
    const countries = await fetchCountriesData();

    const countryInfoContainer = document.getElementById("countryGrid");

    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `
            <img src="${country.flag}" alt="${country.name} flag">
            <b>${country.name}</b>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong>${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>

        `
        ;
        

        // Apply inline styles
        countryDiv.style.width = "260px";
        countryDiv.style.backgroundColor = "#f9f9f9";
        countryDiv.style.borderRadius = "5px";

        const img = countryDiv.querySelector("img");
        img.style.display = "block";
        img.style.width = "260px";
        img.style.height = "auto";
        img.style.marginBottom = "20px";
        
        const paragraphs = countryDiv.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.style.lineHeight = "10px";
            p.style.padding = "0px 20px";
            p.style.fontFamily = "Poppins";
            p.style.fontSize = "15px";
        });

        const bold = countryDiv.querySelectorAll("b");
        bold.forEach(b => {
            b.style.padding = "0px 20px";
            b.style.marginTop = "20px";
            b.style.lineHeight = "10px";
            b.style.fontFamily = "Poppins";
            b.style.fontSize = "20px";
        })

        countryInfoContainer.appendChild(countryDiv);
    });
}

displayCountryInfo();