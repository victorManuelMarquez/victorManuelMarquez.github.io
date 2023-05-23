for (let i=1; i<=17; i++) {
    // JQuery -> cargo el código en cada elemento por ID
    // fuente: https://stackoverflow.com/questions/28007813/how-to-show-javascript-code-in-html
    $("#codeTP1-"+i).load("Ejercicio_" + i + ".js");

    document.getElementById("tp1-ejercicio-" + i).querySelector('.card-title').append(i);

    // instalo un "listener" para cada botón
    // fuentes:
    // https://stackoverflow.com/questions/20256760/javascript-console-log-to-html
    // https://stackoverflow.com/questions/7789521/how-to-link-external-javascript-file-onclick-of-button
    let button = document.getElementById("playTP1-" + i);
    button.onclick = function () {
        if (!console)
            console = {};
        
        // inserta el script en el head
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "Ejercicio_" + i + ".js";
        let head = document.getElementsByTagName("head")[0];
        if (head.querySelector("[src='" + script.getAttribute('src') + "']") == null)
            head.appendChild(script);

        // redefine la salida por consola
        let logger = document.getElementById("outputTP1-" + i);
        console.log = function (message) {
            if (typeof message == 'object')
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br>';
            else
                logger.innerHTML += message + '<br>';
        };
        return false;
    };
};