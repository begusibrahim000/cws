// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDkCutkCPzbaCUBxCAxXuEua2cn5FHZunU",
    authDomain: "pak-budi-the-cameramen.firebaseapp.com",
    databaseURL: "https://pak-budi-the-cameramen.firebaseio.com",
    projectId: "pak-budi-the-cameramen",
    storageBucket: "pak-budi-the-cameramen.appspot.com",
    messagingSenderId: "167463575749",
    appId: "1:167463575749:web:002c3b6e6443c5597310ac",
    measurementId: "G-NF6M4G55T1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

function uploadImage() {
    const ref = firebase.storage().ref()
    const file = document.querySelector("#photo").files[0]
    const name = +new Date() + "-" + file.name
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata)
    task
        .then(snapshot => {
            snapshot.ref.getDownloadURL()
            alert('Foto berhasil di upload')
        })
        .then(url => {
            console.log(url)
            document.querySelector("#image").src = url
        })
        .catch(console.error)
}

const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const snap = document.getElementById("snap")
const errorMsgElement = document.querySelector('span#errorMsg')

const constraints = {
    audio: false,
    video: {
        width: 400,
        height: 400
    }
}

// Access webcam
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        handleSuccess(stream)
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`
    }
}

// Success
function handleSuccess(stream) {
    window.stream = stream
    video.srcObject = stream
}

// Load init
init()

// Draw image
var context = canvas.getContext('2d')
snap.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480)
    var image = new Image()
    image.id = "pic"
    image.src = canvas.toDataURL()
    console.log(image.src)
    var button = document.createElement('button')
    button.textContent = 'Upload Foto Capture'
    document.body.appendChild(button)

    button.onclick = function () {
        const ref = firebase.storage().ref()
        ref.child(new Date() + '-' + 'base64').putString(image.src, 'data_url').then(function (
            snapshot) {
            console.log('Uploaded a data_url string!')
            alert("Foto dari capture berhasil di upload :)")
        })
    }
})