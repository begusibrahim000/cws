var lat
var long

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

function showPosition(pos) {
    lat = pos.coords.latitude
    long = pos.coords.longitude

    document.write(`Latitude : ${lat}`)
    document.write("</br>")
    document.write(`Longitude : ${long}`)
}

document.getElementById("Simpan").onClick = getLocation()
var f = document.createElement("form")
f.setAttribute('method', "post")
f.setAttribute('action', "simpan.html")
var lo = document.createElement("long")
lo.setAttribute('type', "hidden")
lo.setAttribute('name', long)
var la = document.createElement("la")
la.setAttribute('type', "hidden")
la.setAttribute('name', lat)
var s = document.createElement("submit")
s.setAttribute('type', "submit")
s.setAttribute('id', "Simpan")
s.setAttribute('value', "Submit")
f.appendChild(lo)
f.appendChild(la)
f.appendChild(s)
document.getElementsByClassName('body')[0].appendChild(f)