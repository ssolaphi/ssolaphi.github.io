$(document).ready(function() {

    var preguntas = {
        "preguntas": [
            {
                "pregunta": "p1",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Cual de las siguientes afirmaciones son ciertas</p>
                        <label class="containerCheckbox"><input id="p1-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Un proyecto es la búsqueda de una solución inteligente al planteamiento de un problema, la cual tiende a resolver una necesidad humana o aprovechar una oportunidad de negocio</label>
                        <label class="containerCheckbox"><input id="p1-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Es buena serie de pasos para lograr un objetivo</label>
                        <label class="containerCheckbox"><input id="p1-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Es una estimación de los ingresos y los gastos y costos del emprendimiento</label>
                    </div>
                    <div class="calificar">
                        <img id="cp1" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p2",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Un proyecto mutuamente excluyente es:</p>
                        <label class="containerCheckbox"><input id="p2-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Son proyectos que se pueden realizar varios de ellos al mismo tiempo </label>
                        <label class="containerCheckbox"><input id="p2-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Son proyectos cuyo propósito dependen uno del otro</label>
                        <label class="containerCheckbox"><input id="p2-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Son proyectos que dan respuesta a la misma problemática o necesidad pero que no se pueden realizar al mismo tiempo</label>
                    </div>
                    <div class="calificar">
                        <img id="cp2" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p3",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>La preparación y formulación de un proyecto de inversión realiza los siguientes estudios:</p>
                        <label class="containerCheckbox"><input id="p3-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Estudio de mercado, Estudio técnico, Estudio del impacto ambiental, Estudio financiero y Evaluación financiera</label>
                        <label class="containerCheckbox"><input id="p3-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Estudio de Costos, Estudio de factibilidad, Estudio de viabilidad</label>
                        <label class="containerCheckbox"><input id="p3-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Estudio de mercado, Estudio técnico, Estudio de administración, Estudio financiero y Evaluación financieros</label>
                    </div>
                    <div class="calificar">
                        <img id="cp3" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p4",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>El estudio de mercado nos permite demostrar:</p>
                        <label class="containerCheckbox"><input id="p4-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Las características y el número de empleados que requiere el proyecto para su realización</label>
                        <label class="containerCheckbox"><input id="p4-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;El monto de la inversión que se requiere para llevar a cabo el proyecto</label>
                        <label class="containerCheckbox"><input id="p4-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;La existencia de una necesidad o problemática no satisfecha o no resulta que puede satisfacerse o resolverse con un producto o con un servicio</label>
                    </div>
                    <div class="calificar">
                        <img id="cp4" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p5",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Los proyectos de inversión en los que podemos emplear la metodología de evaluación de proyecto son:</p>
                        <label class="containerCheckbox"><input id="p5-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Proyectos informáticos, proyectos de investigación y proyectos de innovación</label>
                        <label class="containerCheckbox"><input id="p5-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Proyectos de creación de una nueva empresa, proyectos de sustitución o renovación de maquinaria, proyectos de distribución de nuevos productos en una empresa ya existente y proyectos de la ampliación de la capacidad instalada</label>
                        <label class="containerCheckbox"><input id="p5-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Proyectos agrícolas, proyectos científicos y proyectos académicos</label>
                    </div>
                    <div class="calificar">
                        <img id="cp5" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p6",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Los métodos para evaluar proyectos de inversión son una herramienta financiera que nos permiten:</p>
                        <label class="containerCheckbox"><input id="p6-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Proyectar la información financiera de la empresa</label>
                        <label class="containerCheckbox"><input id="p6-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Evaluar la factibilidad de mercado de un proyecto</label>
                        <label class="containerCheckbox"><input id="p6-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Determinar la rentabilidad económica que generaría el proyecto durante su tiempo de vida.</label>
                    </div>
                    <div class="calificar">
                        <img id="cp6" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p7",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Los flujos netos de efectivo (FNE) son un resumen de:</p>
                        <label class="containerCheckbox"><input id="p7-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Los ingresos de la empresa</label>
                        <label class="containerCheckbox"><input id="p7-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Los egresos de la empresa</label>
                        <label class="containerCheckbox"><input id="p7-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Las entradas y salidas de dinero</label>
                    </div>
                    <div class="calificar">
                        <img id="cp7" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p8",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Los métodos que utilizan como criterio de evaluación el valor de dinero en el tiempo son:</p>
                        <label class="containerCheckbox"><input id="p8-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del periodo de recuperación de la inversión (PRI), Método del valor presente (VP)</label>
                        <label class="containerCheckbox"><input id="p8-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del rendimiento anual promedio (RAP), Método de análisis financiero (AN)</label>
                        <label class="containerCheckbox"><input id="p8-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del, índice de rentabilidad (IR), el Método del valor presente neto (VPN) y Método de la tasa interna de retorno (TIR)</label>
                    </div>
                    <div class="calificar">
                        <img id="cp8" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p9",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Es el dato que se utiliza para medir la rentabilidad del proyecto</p>
                        <label class="containerCheckbox"><input id="p9-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Flujos netos de efectivo (FNE)</label>
                        <label class="containerCheckbox"><input id="p9-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;La utilidad Neta</label>
                        <label class="containerCheckbox"><input id="p9-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;La inversión inicial</label>
                    </div>
                    <div class="calificar">
                        <img id="cp9" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p10",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Periodo durante el cual se pronostican los flujos netos de efectivo para medir la rentabilidad del proyecto</p>
                        <label class="containerCheckbox"><input id="p10-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Horizonte de evaluación</label>
                        <label class="containerCheckbox"><input id="p10-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Vida útil del proyecto</label>
                        <label class="containerCheckbox"><input id="p10-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Periodo de recuperación de la inversión</label>
                    </div>
                    <div class="calificar">
                        <img id="cp10" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p11",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Es el método que nos permite establecer el tiempo en años, meses y dias que se requieren para recuperar la inversión inicial de un proyecto.</p>
                        <label class="containerCheckbox"><input id="p11-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del índice de rentabilidad (IR)</label>
                        <label class="containerCheckbox"><input id="p11-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del valor presente neto (VPN)</label>
                        <label class="containerCheckbox"><input id="p11-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del periodo de recuperación de la inversión (PRI)</label>
                    </div>
                    <div class="calificar">
                        <img id="cp11" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p12",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Es el método conocido como razón de beneficio/costo y nos permitirá calcular la ganancia o pérdida neta que tiene una inversión durante el tiempo de vida del proyecto</p>
                        <label class="containerCheckbox"><input id="p12-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del Índice de rentabilidad (IR)</label>
                        <label class="containerCheckbox"><input id="p12-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método del rendimiento anual promedio (RAP)</label>
                        <label class="containerCheckbox"><input id="p12-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Método de la tasa interna de retorno (TIR)</label>
                    </div>
                    <div class="calificar">
                        <img id="cp12" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p13",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Es la tasa que se fija como parámetro para evaluar un proyecto de inversión:</p>
                        <label class="containerCheckbox"><input id="p13-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Tasa mínima aceptable de rendimiento (TEMAR)</label>
                        <label class="containerCheckbox"><input id="p13-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Costo de capital (K)</label>
                        <label class="containerCheckbox"><input id="p13-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;La dos anteriores</label>
                        <label class="containerCheckbox"><input id="p13-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Ninguna de las anteriores</label>
                    </div>
                    <div class="calificar">
                        <img id="cp13" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p14",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Si aplicas el método del valor presente neto (VPN), cuál es el criterio para aceptar el proyecto de inversión:</p>
                        <label class="containerCheckbox"><input id="p14-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Valor presente neto (VAN) = 0</label>
                        <label class="containerCheckbox"><input id="p14-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Valor presente neto (VPN) > 0</label>
                        <label class="containerCheckbox"><input id="p14-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Valor presente neto (VPN) &lt; 0 </label>
                    </div>
                    <div class="calificar">
                        <img id="cp14" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            },
            {
                "pregunta": "p15",
                "desarrollo": `
                <div class="pregunta">
                    <div class="cuerpo">
                        <p>Si aplicas el método de la tasa interna de rendimiento (TIR), cuál es el criterio para rechazar el proyecto de inversión:</p>
                        <label class="containerCheckbox"><input id="p15-1" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Tasa interna de rendimiento (TIR) = al costo de capital (K)</label>
                        <label class="containerCheckbox"><input id="p15-2" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Tasa interna de rendimiento (TIR) > al costo de capital (K)</label>
                        <label class="containerCheckbox"><input id="p15-3" type="checkbox"><span class="checkmark"></span>&nbsp;&nbsp;Tasa interna de rendimiento (TIR) &lt; al costo de capital (K)</label>
                    </div>
                    <div class="calificar">
                        <img id="cp15" class="calificarIndividual" src="img/btn-calificarIndividual.png" />
                    </div>
                </div>
                `
            }
        ]
    }

    var respuestas = {
        "preguntas": [
            {
                "pregunta": "p1",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "si",
                    "2": "no",
                    "3": "no"
                }
            },
            {
                "pregunta": "p2",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p3",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p4",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p5",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "si",
                    "3": "no"
                }
            },
            {
                "pregunta": "p6",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p7",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p8",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p9",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "si",
                    "2": "no",
                    "3": "no"
                }
            },
            {
                "pregunta": "p10",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "si",
                    "2": "no",
                    "3": "no"
                }
            },
            {
                "pregunta": "p11",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
            {
                "pregunta": "p12",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "si",
                    "2": "no",
                    "3": "no"
                }
            },
            {
                "pregunta": "p13",
                "tipo": "multiple",
                "reactivos": "4",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si",
                    "4": "no"
                }
            },
            {
                "pregunta": "p14",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "si",
                    "3": "no"
                }
            },
            {
                "pregunta": "p15",
                "tipo": "multiple",
                "reactivos": "3",
                "respuestas": {
                    "1": "no",
                    "2": "no",
                    "3": "si"
                }
            },
        ] 
    }

    var divBotonCalificar = `
    <div class="calificarTodo">
        <div class="calificar">
            <p></p>
        </div>
        <div class="botonCalificar">
            <input type="button" id="botonCalificarTodo" value="Revisar" />
        </div>
    </div>
    `

    var p = [];
    while(p.length < 5) {
        var r = Math.floor(Math.random() * 14) + 1;
        if(p.indexOf(r) === -1) p.push(r);
    }

    var divActividad = $("#actividad");

    p.forEach((pr) => {
        divActividad.append(preguntas.preguntas[pr].desarrollo);
    })

    divActividad.append(divBotonCalificar);

    var check = $("#actividad").find('.containerCheckbox');

    check.click(function() {
        if(!$(this).is(':checked')) {
            $(this).parent().find('input[type=checkbox]').prop('checked', false);
            $(this).find('input[type=checkbox]').prop('checked', true);
        }
    });

    var botonesCalificar = $(".calificarIndividual");

    botonesCalificar.click(function() {
        var checks = $(this).parent().parent().find('input[type=checkbox]');
        var pregunta = parseInt(this.id.replace("cp", "")) - 1
        var acierto = true
        for(var i=0; i<respuestas.preguntas[pregunta].reactivos; i++) {
            var intento = $(checks[i]).is(":checked")
            var correcto = respuestas.preguntas[pregunta].respuestas[i+1]
            if((intento && correcto == "no") || (!intento && correcto == "si")) {
                acierto = false
            }
        }
        if(acierto) {
            divPregunta = $(this).parent().parent();
            divPregunta.css({background: "#ACDEBD"});
        } else {
            divPregunta = $(this).parent().parent();
            divPregunta.css({background: "#FB9F9F"});
        }
    });

    var botonCalificarTodo = $("#botonCalificarTodo");

    botonCalificarTodo.click(function(){
        var aciertos = 0;
        var aciertosTotales = 0;
        var preguntas = $("#actividad").find(".pregunta");
        aciertosTotales = preguntas.length;
        for(var i=0; i<preguntas.length; i++) {
            var reactivos = $(preguntas[i]).find("input[type=checkbox]")
            var acierto = true;
            respuestas.preguntas.forEach((pregunta) => {
                if(reactivos[0].id.split("-")[0] == pregunta.pregunta) {
                    for(var j=0; j<reactivos.length; j++) {
                        var intento = $(reactivos[j]).is(":checked")
                        var correcto = pregunta.respuestas[j+1];
                        if((intento && correcto == "no") || (!intento && correcto == "si")) {
                            acierto = false
                        }
                    }
                }
            })
            if(acierto) {
                aciertos++;
                reactivos.parent().parent().parent().css({background: "#ACDEBD"});
            } else {
                reactivos.parent().parent().parent().css({background: "#FB9F9F"});
            }
        }
        var divResultado = $(".calificarTodo .calificar p");
        divResultado.text("" + aciertos + "/" + aciertosTotales + " aciertos");
    });

});