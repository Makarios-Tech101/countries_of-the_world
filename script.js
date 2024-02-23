
const countryDisplay = document.querySelector('.countryDisplay')

fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => {
    data.forEach((country) => {
        console.log(country);

        //created an anchor tag
        const countryItem = document.createElement('a')
        countryItem.classList.add('countryItem')

        countryItem.innerHTML = `
            <img src= ${country.flags.svg} id="flag">
            <div class="countryText">
                <h5 id="name"><b>${country.name.common} </b> </h5>
                <p id="population"><b>Population: </b>${country.population.toLocaleString('en-US')} </p>
                <p id="region"><b>Region: </b>${country.region} </p>
                <p id="capital"><b>Capital: </b>${country.capital?.[0]} </p> 
            </div>
        `
        
        //passing country.html 
        countryItem.href = `./country.html?name=${country.name.common}`

        countryDisplay.append(countryItem)

        console.log(countryDisplay)

        })    
})






