for (let i=1; i<=12; i++) {
    // JQuery -> cargo el código en cada elemento por ID
    $("#codeTP1-"+i).load("Ejercicio_" + i + ".js");

    document.getElementById("tp1-ejercicio-" + i).querySelector('.card-title').append(i);

    // instalo un "listener" para cada botón
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