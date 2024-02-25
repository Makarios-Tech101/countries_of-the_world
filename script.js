
const countryDisplay = document.querySelector('.countryDisplay')
const filterRegion = document.querySelector('.filterRegion')
const inputSearch = document.querySelector('.searchContainer input')

const theme = document.querySelector('.theme')

let allCountriesData

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        renderCountries(data)
        allCountriesData= data
    })
    // .then((data) => {
    //     allCountriesData = data
    //     data.forEach((country) => {
    //         // console.log(country);

    //         //created an anchor tag
    //         const countryItem = document.createElement('a')
    //         countryItem.classList.add('countryItem')

    //         countryItem.innerHTML = `
    //             <img src= ${country.flags.svg} alt=${country.name.common}>
    //             <div class="countryText">
    //                 <h5 id="name"><b>${country.name.common} </b> </h5>
    //                 <p id="population"><b>Population: </b>${country.population.toLocaleString('en-US')} </p>
    //                 <p id="region"><b>Region: </b>${country.region} </p>
    //                 <p id="capital"><b>Capital: </b>${country.capital?.[0]} </p> 
    //             </div>
    //         `
            
    //         //passing country.html 
    //         countryItem.href = `./country.html?name=${country.name.common}`

    //         countryDisplay.append(countryItem)

    //         // console.log(countryDisplay)

    // })   
    
// })

filterRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
    .then((response) => response.json())
    .then(renderCountries) 
//     .then((data) => {
//         countryDisplay.innerHTML = ''
//         data.forEach((country) => {
//             // console.log(country);

//             //created an anchor tag
//             const countryItem = document.createElement('a')
//             countryItem.classList.add('countryItem')

//             countryItem.innerHTML = `
//                 <img src= ${country.flags.svg} alt=${country.name.common}>
//                 <div class="countryText">
//                     <h5 id="name"><b>${country.name.common} </b> </h5>
//                     <p id="population"><b>Population: </b>${country.population.toLocaleString('en-US')} </p>
//                     <p id="region"><b>Region: </b>${country.region} </p>
//                     <p id="capital"><b>Capital: </b>${country.capital?.[0]} </p> 
//                 </div>
//             `
            
//             //passing country.html 
//             countryItem.href = `./country.html?name=${country.name.common}`

//             countryDisplay.append(countryItem)

//             // console.log(countryDisplay)

//     })   
    
//   })
})


function renderCountries(data) {
    countryDisplay.innerHTML = ''
        data.forEach((country) => {
            // console.log(country);

            //created an anchor tag
            const countryItem = document.createElement('a')
            countryItem.classList.add('countryItem')

            countryItem.innerHTML = `
                <img src= ${country.flags.svg} alt=${country.name.common}>
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

            // console.log(countryDisplay)

    })   
    
}

inputSearch.addEventListener('input', (e) => {
    console.log(e.target.value)

    const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))  

    console.log(filteredCountries)
    renderCountries(filteredCountries)
}) 


theme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})