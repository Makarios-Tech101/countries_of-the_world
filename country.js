const countryName = (new URLSearchParams(window.location.search).get('name'))

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
 .then((response) => response.json())
 .then((data) => {
    console.log(data)
 })