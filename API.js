
const adresa = "https://limitless-scrubland-84566.herokuapp.com"

export default {
  dohvatiKupce: () => {
    return fetch(adresa + "/kupac/svi")
    .then(response => response.json())
  },
  dohvatiKupceSaPutem: () => {
    return fetch(adresa + "/kupac/put")
    .then(response => response.json())
  },
  dodajKupca: (data) => {
     return fetch(adresa + "/kupac", {
       method: "PUT",
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(data)
     })
     .then(response => response.json())
  },
  obrisiKupca: (id) => {
     return fetch(adresa + "/kupac", {
       method: "DELETE",
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({ id: id })
     })
    .then(response => response.json())
  }
  

};