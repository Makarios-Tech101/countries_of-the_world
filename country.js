const countryName = (new URLSearchParams(window.location.search).get('name'))
const flagImage = document.querySelector('.countryDetails img')
const countryTitle = document.querySelector('.countryDetails h2')
const nativeName = document.querySelector('.nativeName')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.subRegion')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.topLevelDomain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.borderCountries')
const theme = document.querySelector('.theme')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
 .then((response) => response.json())
 .then(([country]) => {
    // console.log(country)

    flagImage.src = country.flags.svg;
    countryTitle.innerText = country.name.common;

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common
    } else {
      nativeName.innerText = country.name.common;
    }

    population.innerText = country.population;
    region.innerText = country.region;
    subRegion.innerText = country.subregion;
    capital.innerText = country.capital?.[0];
    topLevelDomain.innerText = country.tld;

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(',')
    }else {
      currencies.innerText = country.currencies.name
    }

    if (country.languages) {
      languages.innerText = Object.values(country.languages).map((language) => language).join(', ')
    }
    
    if(country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => {
          console.log(borderCountry)


        const borderCountryTag = document.createElement('a')
        borderCountryTag.innerText = borderCountry.name.common
        console.log(borderCountryTag) 

        borderCountries.append(borderCountryTag)
        })

      })
    }

 })



 theme.addEventListener('click', ()=> {
  document.body.classList.toggle('dark')
})