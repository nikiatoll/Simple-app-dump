
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const imgUrl = `https://api.thecatapi.com/v1/images/search?size=thumb`

  fetch(imgUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  const factUrl = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`

  fetch(factUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h4').innerText = data.text

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

