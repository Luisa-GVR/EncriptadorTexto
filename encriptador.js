function encriptar() {
    var texto = document.getElementById("inputText").value; 

    if (!validar(texto)) {
        return; 
    }

    var textoEncriptado = ""; 


    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += texto[i];
        }
    }
    console.log("Texto encriptado:", textoEncriptado);

    document.getElementById("output").innerText = "Texto encriptado: " + textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("inputText").value;

    if (!validar(textoEncriptado)) {
        return; 
    }
    var textoDesencriptado = reemplazarPalabras(textoEncriptado); 
    console.log("Texto desencriptado:", textoDesencriptado);

    document.getElementById("output").innerText = "Texto desencriptado: " + textoDesencriptado;
}

function reemplazarPalabras(texto) {
    const regex = /ober|enter|imes|ai|ufat/g;
    return texto.replace(regex, match => {
        switch(match) {
            case 'ober':
                return 'o';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ufat':
                return 'u';
        }
    });
}

function validar(texto) {
    var regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin caracteres especiales ni acentos.");
        document.body.classList.add("shake");
        setTimeout(function () {
            document.body.classList.remove("shake");
        }, 500);
        return false;
    }
    return true; 
}



function copiarTexto() {
    var textoCopiar = document.getElementById("output").innerText.trim();

    if (!textoCopiar) {
        alert("No hay texto para copiar.");
        return;
    }

    // Eliminar el prefijo "Texto encriptado: " o "Texto desencriptado: "
    textoCopiar = textoCopiar.replace(/^Texto (encriptado|desencriptado): /, '');

    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert("Ocurrió un error al copiar el texto.");
        });
}
