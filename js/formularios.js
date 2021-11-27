$(document).ready(function() {

    var actividades = {
        "actividades": [
            {
                "actividad": "u531",
                "desarrollo": `<h1>Actividad</h1>
                <h2>Ejercicio 1</h2>
                <div class="noPregunta">
                    <p>Supóngase que tienes dos propuestas para invertir y en cada una de ellas se requiere una inversión de $1,000,000.</p>
                    <p>El proyecto A presenta los siguientes FNE (datos en miles de pesos):</p>
                    <img class="centrado" width="90%" src="img/u531-1.png" />
                    <p>Para el proyecto B se contemplan los siguientes flujos netos de efectivo:</p>
                    <img class="centrado" width="90%" src="img/u531-2.png" />
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿Cuál es el periodo de recuperación de la inversión (PRI) del proyecto A?</p>
                        <div class="centrarOpciones"><p><input type="number" id="e1p1" /> años</p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿Cuál es el periodo de recuperación de la inversión (PRI) del proyecto B?</p>
                        <div class="centrarOpciones"><p><input type="number" id="e1p2-1" /> años &nbsp;&nbsp;&nbsp; <input type="number" id="e1p2-2" /> meses</p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Utilizando el método del PRI ¿Cuál proyecto es el más conveniente?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p3-1" value="Proyecto A" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p3-2" value="Proyecto B" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p3" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <h2>Ejercicio 2</h2>
                <div class="noPregunta">
                    <p>La empresa Colors, con la finalidad de agregar capacidad de producción a su planta existente, necesita adquirir nueva maquinaria. Tiene dos alternativas de inversión (máquina A y máquina B). La máquina A tiene un costo de adquisición de 5,000 y la máquina B cuesta 2,000.</p>
                    <p>La compañía estima que los flujos de efectivo que tendrá al tener en operación cada máquina son los siguientes:</p>
                    <table class="tabla" border="1">
                        <tr>
                            <th>Año</th>
                            <th>Máquina A</th>
                            <th>Máquina B</th>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">0</td>
                            <td class="textoCentrado" style="color: red;">- $5, 000</td>
                            <td class="textoCentrado" style="color: red;">- $2, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">1</td>
                            <td class="textoCentrado">$500</td>
                            <td class="textoCentrado">$500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">2</td>
                            <td class="textoCentrado">$1, 000</td>
                            <td class="textoCentrado">$1, 500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">3</td>
                            <td class="textoCentrado">$1, 000</td>
                            <td class="textoCentrado">$1, 500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">4</td>
                            <td class="textoCentrado">$1, 500</td>
                            <td class="textoCentrado">$1, 500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">5</td>
                            <td class="textoCentrado">$2, 500</td>
                            <td class="textoCentrado">$1, 500</td>
                        </tr>
                    </table>
                    <p>Supongamos que el período de recuperación máximo que, como política, establece la compañía es de cinco años.</p>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿En qué tiempo se recupera la inversión de la máquina A?</p>
                        <div class="centrarOpciones"><p><input type="number" id="e2p1-1" /> años &nbsp;&nbsp;&nbsp; <input type="number" id="e2p1-2" /> meses</p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce2p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿En qué tiempo se recupera la inversión de la máquina B?</p>
                        <div class="centrarOpciones"><p><input type="number" id="e2p2-1" /> años &nbsp;&nbsp;&nbsp; <input type="number" id="e2p2-2" /> meses &nbsp;&nbsp;&nbsp; <input type="number" id="e2p2-3" /> días</p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce2p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Con base en el método del PRI ¿qué máquina debe comprar Colors?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e2p3-1" value="Máquina B" />&nbsp;&nbsp;&nbsp;<input type="button" id="e2p3-2" value="Máquina A" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce2p3" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>`
            },
            {
                "actividad": "u532",
                "desarrollo": `<h1>Actividad</h1>
                <div class="noPregunta">
                    <p>Supongamos que estamos tratando de elegir entre dos proyectos mutuamente excluyentes que requieren una inversión de $10,000 pesos; se esperan los siguientes flujos netos de efectivo y un costo de capital del 35%</p>
                    <table class="tabla" border="1">
                        <tr>
                            <th>Año</th>
                            <th>Proyecto D</th>
                            <th>Proyecto E</th>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">0</td>
                            <td class="textoCentrado" style="color: red;">- $10, 000</td>
                            <td class="textoCentrado" style="color: red;">- $10, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">1</td>
                            <td class="textoCentrado">$4, 200</td>
                            <td class="textoCentrado">$7, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">2</td>
                            <td class="textoCentrado">$4, 200</td>
                            <td class="textoCentrado">$4, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">3</td>
                            <td class="textoCentrado">$4, 200</td>
                            <td class="textoCentrado">$1, 000</td>
                        </tr>
                    </table>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Escribe el rendimiento anual promedio para cada uno de los proyectos</p>
                        <p>Proyecto D: &nbsp;&nbsp;<input type="number" id="e1p1-1" /> %</p>
                        <p>Proyecto E: &nbsp;&nbsp;<input type="number" id="e1p1-2" /> %</p>
                    </div>
                    <div class="calificar">
                        <img id="ce1p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Con base en el método del RAP o TCR ¿cuál proyecto es más conveniente?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p2-1" value="Proyecto D" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p2-2" value="Proyecto E" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>`
            },
            {
                "actividad": "u533",
                "desarrollo": `<h1>Actividad</h1>
                <div class="noPregunta">
                    <p>La compañía “El Carrusel” desea invertir en uno de dos proyectos, el primero es un proyecto de reposición de maquinaria y el segundo es un proyecto de expansión de la empresa; para ambos proyectos se fija una tasa mínima de aceptación del 14%, y presentan los siguientes flujos netos de efectivo:</p>
                    <table class="tabla" border="1">
                        <tr>
                            <th>Año</th>
                            <th>Proyecto de reposición de maquinaria</th>
                            <th>Proyecto de expansión de la empresa</th>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">0</td>
                            <td class="textoCentrado" style="color: red;">- $10, 000</td>
                            <td class="textoCentrado" style="color: red;">- $21, 500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">1</td>
                            <td class="textoCentrado">$4, 500</td>
                            <td class="textoCentrado">$6, 800</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">2</td>
                            <td class="textoCentrado">$4, 500</td>
                            <td class="textoCentrado">$6, 800</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">3</td>
                            <td class="textoCentrado">$5, 200</td>
                            <td class="textoCentrado">$6, 800</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">4</td>
                            <td class="textoCentrado"></td>
                            <td class="textoCentrado">$10, 500</td>
                        </tr>
                    </table>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Escribe el índice de rentabilidad (IR) o razón de beneficio/costo para cada uno de los proyectos</p>
                        <p>Proyecto de reposición de maquinaria: &nbsp;&nbsp;<input type="number" id="e1p1-1" /></p>
                        <p>Proyecto de expansión de la empresa: &nbsp;&nbsp;<input type="number" id="e1p1-2" /></p>
                    </div>
                    <div class="calificar">
                        <img id="ce1p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿En cuál de los dos proyectos es mayor el costo que el beneficio?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p2-1" value="Reposición de maquinaria" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p2-2" value="Expansión de la empresa" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿Cuál proyecto es más conveniente?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p3-1" value="Reposición de maquinaria" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p3-2" value="Expansión de la empresa" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p3" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>`
            },
            {
                "actividad": "u534",
                "desarrollo": `<h1>Actividad</h1>
                <div class="noPregunta">
                    <p>Pepe es un joven empresario, le ofrecen invertir en dos proyectos diferentes, el primero se trata de una huerta de mangos y el segundo de una granja camaronera; ambos proyectos requieren la misma inversión de $ 2,800,000 pesos y tienen el mismo costo de capital o TMAR que es del 25%.</p>
                    <p>Los flujos netos de efectivo (FNE) para cada proyecto son:</p>
                    <table class="tabla" border="1">
                        <tr>
                            <th>Año</th>
                            <th>FNE<br />Huerta de mangos</th>
                            <th>FNE<br />Granja camaronera</th>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">0</td>
                            <td class="textoCentrado" style="color: red;">- $2, 800, 000</td>
                            <td class="textoCentrado" style="color: red;">- $2, 800,000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">1</td>
                            <td class="textoCentrado">$500, 000</td>
                            <td class="textoCentrado">$2, 500, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">2</td>
                            <td class="textoCentrado">$700, 000</td>
                            <td class="textoCentrado">$1, 400, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">3</td>
                            <td class="textoCentrado">$1, 000, 000</td>
                            <td class="textoCentrado">$1, 100, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">4</td>
                            <td class="textoCentrado">$1, 500, 000</td>
                            <td class="textoCentrado">$650, 000</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">5</td>
                            <td class="textoCentrado">$2, 500, 000</td>
                            <td class="textoCentrado">$550, 000</td>
                        </tr>
                    </table>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Escribe el valor presente neto VPN o valor actual neto VAN para cada proyecto</p>
                        <p>Huerta de mangos: &nbsp;&nbsp;<input type="number" id="e1p1-1" /> pesos</p>
                        <p>Granja camaronera: &nbsp;&nbsp;<input type="number" id="e1p1-2" /> pesos</p>
                    </div>
                    <div class="calificar">
                        <img id="ce1p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Con base en el VPN o VAN ¿Cuál proyecto debe descartar Pepe?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p2-1" value="Huerta de mangos" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p2-2" value="Granja camaronera" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Elige las razones que podría considerar Pepe para descartar dicho proyecto</p>
                        <p><label class="containerCheckbox"><input id="e1p3-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Recuperaría la inversión y le quedarían solo 3,400,000 pesos</label></p>
                        <p><label class="containerCheckbox"><input id="e1p3-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Solo recuperaría el valor de la inversión</label></p>
                        <p><label class="containerCheckbox"><input id="e1p3-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;No recuperaría ni siquiera el valor de la inversión</label></p>
                        <p><label class="containerCheckbox"><input id="e1p3-4" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;A valor presente le faltarían 6,400 pesos para recuperar la inversión</label></p>
                    </div>
                    <div class="calificar">
                        <img id="ce1p3" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿Cuál es la mejor opción para invertir?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p4-1" value="Huerta de mangos" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p4-2" value="Granja camaronera" />&nbsp;&nbsp;&nbsp;<br /><input type="button" id="e1p4-3" value="Es indistinto, ambos proyectos son igualmente convenientes" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p4" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>`
            },
            {
                "actividad": "u535",
                "desarrollo": `<h1>Actividad</h1>
                <div class="noPregunta">
                    <p>Imagina que vas a invertir $3,500 pesos y tienes la disyuntiva de elegir uno de los proyectos cuyos flujos netos de efectivo (FNE) se presentan a continuación:</p>
                    <table class="tabla" border="1">
                        <tr>
                            <th>Año</th>
                            <th>Proyecto A</th>
                            <th>Proyecto B</th>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">0</td>
                            <td class="textoCentrado" style="color: red;">- $3, 500</td>
                            <td class="textoCentrado" style="color: red;">- $3, 500</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">1</td>
                            <td class="textoCentrado">$1, 500</td>
                            <td class="textoCentrado">$1, 363.50</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">2</td>
                            <td class="textoCentrado">$500</td>
                            <td class="textoCentrado">$413.00</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">3</td>
                            <td class="textoCentrado">$500</td>
                            <td class="textoCentrado">$375.50</td>
                        </tr>
                        <tr>
                            <td class="conceptoTabla">4</td>
                            <td class="textoCentrado">$1, 500</td>
                            <td class="textoCentrado">$1, 024.50</td>
                        </tr>
                    </table>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Considerando un costo de capital (K) del 4%, calcula y escribe la TIR para cada uno de los proyectos</p>
                        <p>Proyecto A: &nbsp;&nbsp;<input type="number" id="e1p1-1" /> %</p>
                        <p>Proyecto B: &nbsp;&nbsp;<input type="number" id="e1p1-2" /> %</p>
                    </div>
                    <div class="calificar">
                        <img id="ce1p1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>¿En cuál de los dos proyectos invertirías tu dinero?</p>
                        <div class="centrarOpciones"><p><input type="button" id="e1p2-1" value="Proyecto A" />&nbsp;&nbsp;&nbsp;<input type="button" id="e1p2-2" value="Proyecto B" /></p></div>
                    </div>
                    <div class="calificar">
                        <img id="ce1p2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>`
            }
        ]
    }

    var
	w       = screen.availWidth - (screen.availWidth / 3) - 50,
	h       = screen.availHeight - (screen.availHeight / 4) - 50;

    var divPreguntas = $("#preguntas");
    divPreguntas.css({width: w, height: h});
    divPreguntas.parent().css({background: "#9DE9E7"});

    actividades.actividades.forEach((actividad) => {
        if(actividad.actividad == localStorage.getItem("seccion")) {
            divPreguntas.append(actividad.desarrollo);
        }
    })

    var botones = $("#preguntas").find('input[type=button]');

    botones.click(function() {
        if(!$(this).hasClass("botonSeleccionado")) {
            var botonesNivel = $(this).parent().find('input[type=button]').removeClass("botonSeleccionado");
            $(this).addClass("botonSeleccionado");
        }
    });

    var botonesCalificar = $(".calificarIndividual");

    botonesCalificar.click(function() {
        alert(this.id);
    });

});