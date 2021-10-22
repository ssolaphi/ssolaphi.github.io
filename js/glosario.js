$(document).ready(function() {

    var lista = {
        "conceptos": [
            {
                "concepto": "Evaluación financiera",
                "definicion": `<p>“La evaluación financiera describe los métodos actuales de evaluación que toman en cuenta el valor del dinero a través del tiempo (como la tasa interna de rendimiento y el valor presente neto), anota sus limitaciones de aplicación y los compara con métodos contables de evaluación que no toman en cuenta el valor del dinero en el tiempo, y en ambos muestra su aplicación práctica. La decisión de inversión casi siempre recae en la evaluación financiera” (Angulo, 2016).</p>`
            },
            {
                "concepto": "Flujo neto de efectivo (FNE) o flujo de caja",
                "definicion": `<p>Informe que resume las entradas y salidas de dinero a lo largo de la vida útil del proyecto, y que permite determinar la rentabilidad de la inversión (Angulo, 2016).</p>`
            },
            {
                "concepto": "Horizonte de evaluación de un proyecto",
                "definicion": `<p>“Es el período durante el cual se pronosticarán los flujos de caja para medir la rentabilidad de un proyecto” La vida útil de un proyecto no debe confundirse con el horizonte de evaluación, aunque pueden coincidir (Angulo, 2016).</p>`
            },
            {
                "concepto": "Índice de rentabilidad (IR) o razón de beneficio/costo",
                "definicion": `<p>El método del índice de rentabilidad o también conocido como razón de beneficio/costo permitirá calcular la ganancia o pérdida neta que tiene una inversión durante el tiempo de vida del proyecto, el resultado se expresa como un porcentaje del costo inicial de la inversión. Las ganancias o beneficios de la inversión se pueden definir como la razón que hay entre la suma de los valores presentes de los flujos netos de efectivo (FNE) de un proyecto, descontados con la tasa de costo de capital (K), y la inversión inicial requerida (Alemán, 2003).</p>
                <img class="centrado ecuacion" width="50%" src="img/eq3.2.png" />
                <p>El IR se puede interpretar como el valor presente o la rentabilidad que se obtiene por cada unidad monetaria invertida en el proyecto.</p>
                <h3>Criterios de decisión:</h3>
                <table class="tabla" border="1">
                    <tr>
                        <td>IR > 1</td>
                        <td>El proyecto se acepta, ya que los beneficios o ganancias que genera son<br />superiores a su costo.</td>
                    </tr>
                    <tr>
                        <td>IR &lt; 1</td>
                        <td>El proyecto se rechaza, porque los beneficios que genera son inferiores a<br />su costo; es decir, habría pérdidas.</td>
                    </tr>
                    <tr>
                        <td>IR = 1</td>
                        <td>Es indiferente aceptar o rechazar el proyecto, porque sus beneficios son<br />exactamente iguales a su costo; es decir, no hay pérdidas ni ganancias</td>
                    </tr>
                </table>`
            },
            {
                "concepto": "Inversión",
                "definicion": `<p>“Es el empleo de un conjunto de recursos para producir un bien o servicio y generar una utilidad” (Sabino, 2015, citado en Angulo 2016).</p>
                <p>La inversión implica “emplear recursos hoy: se renuncia al uso inmediato de un recurso disponible con la esperanza de recuperarlo en un tiempo determinado con una utilidad adicional. En pocas palabras se renuncia a un beneficio inmediato por uno futuro” (Angulo, 2016).</p>`
            },
            {
                "concepto": "Métodos de evaluación financiera para proyectos de inversión",
                "definicion": `<p>Los métodos para evaluar proyectos de inversión son una herramienta financiera que permiten determinar la rentabilidad económica que generaría el proyecto durante su tiempo de vida. Existen los métodos que toman en cuenta el valor del dinero en el tiempo y los que no lo toman en cuenta.</p>`
            },
            {
                "concepto": "Período de recuperación de la inversión (PRI)",
                "definicion": `<p>Método de evaluación de proyectos que permite estimar el tiempo (en años, meses y días) que se requieren para recuperar la inversión inicial de un proyecto. Únicamente se tiene que sumar los flujos netos de efectivo del proyecto hasta recuperar la inversión inicial (Alemán, 2003).</p>`
            },
            {
                "concepto": "Presupuesto de inversión",
                "definicion": `<p>El presupuesto de inversión es una estimación en términos monetarios de lo que se necesita para arrancar un proyecto. Dicho presupuesto se compone de tres partes (Nacional Financiera, 1998; Angulo, 2016):</p>
                <ol>
                    <li><b>Inversión diferida.</b> Se refiere a los desembolsos que se harán por trámites, permisos, gastos notariales y licencias para la constitución legal de la empresa; desembolsos por pago de renta, compra de artículos de oficina y en sí de los gastos preoperatorios. Entendiéndose por estos todos aquellos gastos que se realizan antes de que se lleve a cabo la operación del negocio.</li>
                    <li><b>Inversión fija.</b> Corresponde a los desembolsos que se hacen para equipar la empresa (propiedades, planta y equipo). La cantidad y el tipo de activos fijos que se adquirirán estarán en función del tipo de proyecto y de un plan de producción.</li>
                    <li><b>Capital de trabajo.</b> Constituido por los activos circulantes de la empresa.</li>
                </ol>`
            },
            {
                "concepto": "Proceso de preparación y evaluación de proyectos",
                "definicion": `<p>El proceso de preparación y evaluación de proyectos incluye los siguientes estudios: de mercado, técnico, administrativo o de organización y financiero (Baca, 2016; Sapag, 2007; Angulo, 2016).</p>`
            },
            {
                "concepto": "Proyecto",
                "definicion": `<p>“Proyecto es un esfuerzo temporal que se lleva a cabo para obtener un producto, servicio o resultado único” (Guía del PMBOK, 2017). Esta definición es bastante inclusiva podría abarcar, por ejemplo, un proyecto escolar, un proyecto de vida, la construcción de una vivienda, el lanzamiento de un satélite, así como la creación de una empresa, por mencionar algunos.</p>
                <p>“Un proyecto es la búsqueda de una solución inteligente al planteamiento de un problema, la cual tiende a resolver una necesidad humana o aprovechar una oportunidad de negocio” (Baca, 2016).</p>`
            },
            {
                "concepto": "Proyecto de inversión",
                "definicion": `<p>“Es un plan que, si se le asigna determinado monto de capital y se le proporcionan insumos de varios tipos, producirá un bien o servicio, útil para la sociedad” (Baca, 2016).</p>
                <p>“Una propuesta (un documento con varios planes o estudios) de inversión para instalaciones destinadas a proporcionar bienes o servicios (Angulo, 2016).</p>`
            },
            {
                "concepto": "Rendimiento anual promedio (RAP) o tasa contable del rendimiento (TCR)",
                "definicion": `<p>Método de evaluación de proyectos que permite calcular la razón que existe entre los flujos netos de efectivo promedio del proyecto y la inversión inicial requerida; es decir:</p>
                <img class="centrado ecuacion" width="60%" src="img/eq3.1.png" />
                <h3>Criterios de decisión:</h3>
                <p>Si el cálculo del rendimiento anual promedio es igual o mayor a la tasa de rendimiento anual mínima establecida por el inversionista el proyecto podría aceptarse, de lo contrario se rechazaría (Alemán, 2003).</p>`
            },
            {
                "concepto": "Tasa interna de rendimiento (TIR)",
                "definicion": `<p>El método de la TIR está estrechamente relacionado con el método del VPN, ya que es la tasa de descuento que hace que la suma del valor presente de los flujos netos de efectivo generados por un proyecto sea igual a la inversión inicial. Es decir, es la tasa que induce a que el VPN de un proyecto sea igual a cero. Se dice que la TIR es una tasa de rendimiento interna ya que depende solamente de los flujos de efectivo que genera el proyecto (Baca, 2017; Angulo, 2016; Alemán, 2003).</p>
                <p>Su fórmula es:</p>
                <img class="centrado ecuacion" width="90%" src="img/eq3.3.png" />
                <div class="definicionVariables">
                    <p>Donde:</p>
                    <ul>
                        <li>TIR = Tasa de rendimiento</li>
                        <li>VPN = Valor presente neto</li>
                        <li>FNE = Flujo neto de efectivo</li>
                        <li>I<sub>o</sub> = Inversión inicial requerida</li>
                        <li>n = Número de periodos de vida del proyecto (tiempo de vida)</li>
                    </ul>
                </div>
                <h3>Criterios de decisión:</h3>
                <table class="tabla" border="1">
                    <tr>
                        <td>TIR > K</td>
                        <td>El proyecto se acepta porque genera flujos de efectivo superiores a los<br />que se requieren para financiarlo, por lo tanto incrementa el patrimonio<br />de los accionistas</td>
                    </tr>
                    <tr>
                        <td>TIR &lt; K</td>
                        <td>El proyecto se rechaza porque los flujos de efectivo que genera son<br />inferiores a los que se requieren para financiarlo; por lo tanto,<br />disminuye el patrimonio de los inversionistas</td>
                    </tr>
                    <tr>
                        <td>TIR = K</td>
                        <td>Es indiferente aceptar o rechazar el proyecto. El rendimiento genera<br />compensa exactamente al costo de capital</td>
                    </tr>
                </table>`
            },
            {
                "concepto": "Valor presente neto (VPN) o valor actual neto (VAN)",
                "definicion": `<p>Método que toma en cuenta el valor del dinero en el tiempo. Se define como el valor de los flujos netos de efectivo proyectados descontados al presente menos la inversión inicial. Es un método financiero utilizado para evaluar la rentabilidad de la inversión inicial de un proyecto.</p>
                <p>El cálculo depende de la tasa mínima aceptable de rendimiento (TMAR) o también conocida como costo de capital (K) que se establezca para el proyecto en cuestión. La fórmula para calcular el VPN o VAN es a través de un quebrado o razón aritmética en donde el numerador de dicha razón es dinero (flujos netos de efectivo descontados al presente) y el denominador es la tasa de interés a la cual se ajusta el proyecto (TMAR), a este resultado se le restara el valor de la inversión inicial (Io). (Baca, 2017; Angulo, 2016; Alemán, 2003).</p>
                <h3>Criterios de decisión:</h3>
                <table class="tabla" border="1">
                    <tr>
                        <td>VPN > 0</td>
                        <td>El proyecto se acepta porque crea valor para la empresa (genera<br />ganancia).</td>
                    </tr>
                    <tr>
                        <td>VPN &lt; 0</td>
                        <td>El proyecto se rechaza porque no crea valor para la empresa (genera<br />pérdidas).</td>
                    </tr>
                    <tr>
                        <td>VPN = 0</td>
                        <td>Es indiferente aceptar o rechazar el proyecto porque no crea ni<br />destruye valor para la empresa.</td>
                    </tr>
                </table>`
            },
            {
                "concepto": "Vida útil del proyecto",
                "definicion": `<p>“La vida útil de un proyecto se asocia con el tiempo durante el cual se espera recibir beneficios o con el plazo en el que se estima subsistirán los problemas que se busca resolver. La vida útil no debe confundirse con el horizonte de evaluación, aunque pueden coincidir” (Angulo, 2016).</p>`
            }
        ]
    }

    var cajaTexto = $("#conceptos");

    lista.conceptos.forEach((valor) => {
        cajaTexto.append("<h2>" + valor.concepto + "</h2>");
        cajaTexto.append(valor.definicion);
    });

    var buscador = $("#buscador");
    buscador.keyup(() => {
        if(buscador.val() == "") {
            cajaTexto.html("");
            lista.conceptos.forEach((valor) => {
                cajaTexto.append("<h2>" + valor.concepto + "</h2>");
                cajaTexto.append(valor.definicion);
            });
        } else {
            cajaTexto.html("");
            lista.conceptos.forEach((valor) => {
                if(valor.concepto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(buscador.val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
                    cajaTexto.append("<h2>" + valor.concepto + "</h2>");
                    cajaTexto.append(valor.definicion);
                }
            });
        }
    });

});