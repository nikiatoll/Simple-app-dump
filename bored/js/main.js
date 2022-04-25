
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  let boredUrl = `http://www.boredapi.com/api/activity`
  let activityType = ''

  var mylist = document.getElementById("myList");
  activityType = `?type=${mylist.options[mylist.selectedIndex].text}`
  console.log(activityType)
  boredUrl=boredUrl+activityType
  var search_term 
  fetch(boredUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h4').innerText = data.activity
      activityType =''
      document.querySelector('h5').innerText = `Activity type: ${data.type}`
      search_term = data.type
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

  var apikey = 'AK7A3HR2DSZ5'
  var lmt = 1
  
  
  
  var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
    apikey + "&limit=" + lmt
  fetch(search_url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('img').src=data.results[0].itemurl
    })
}
