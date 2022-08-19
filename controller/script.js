const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
console.log("Hello World");

const onGenerateSubmit = (e) => {
    e.preventDefault();

    ClearUI();
    const url = document.getElementById("url").value;

    if (url == "") {
        alert("Please Enter a URL");
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQR(url);
        }, 1000);
    }
};

const generateQR = (url) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: 400,
        height: 400,
    });
};

const ClearUI = () => {
    qr.innerHTML = "";
};
const showSpinner = () => {
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
    document.getElementById("spinner").style.display = "none";
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
