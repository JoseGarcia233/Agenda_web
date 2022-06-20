const Api = 'http://www.raydelto.org/agenda.php'
const form = document.getElementById("form")
fetch(Api)
  .then(response => response.json())
  .then(data => showData(data))
  .catch(error => console.log(error))

const showData = (data) => {
  console.log(data)
  let tbody = ""
  for (let i = 0; i < data.length; ++i) {
    tbody += `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    document.getElementById('dt').innerHTML = tbody
  }
}
async function postdata(url, data) {
  const response = await fetch(url, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response.json()
}
form.addEventListener("submit", async (ev) => {
  ev.preventDefault()
  const data = {
    "nombre": ev.target[0].value,
    "apellido": ev.target[1].value,
    "telefono": ev.target[2].value
  }
  postdata(Api, data)
    .then((value) => {
      console.log(value)
      window.location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
})



