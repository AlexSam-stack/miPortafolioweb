class Portfolio {
    constructor() {
        this.currentPath = '/';
        this.terminalHistory = [];
        this.currentView = 'terminal';
        
        this.fileStructure = {
            '/': {
                type: 'directory',
                children: ['portada', 'sobre-mi', 'proyectos', 'cuaderno', 'reflexion-final', 'bibliografia']
            },
            '/portada': {
                type: 'file',
                content: {
                    title: '¡Bienvenido/a a mi Portafolio!',
                    description: `
                        <div class="bienvenida-animada">
                            <div class="saludo">👋 ¡Hola! Soy <span class="nombre">Alex Samaniego</span></div>
                            <div class="presentacion">
                                Estudiante del <b>9no semestre de Ingeniería de Sistemas</b> en la <b>Universidad Nacional del Centro del Perú</b>.
                            </div>
                            <div class="intereses">
                                <span class="destacado">Entusiasta de la Ciberseguridad</span> y el <span class="destacado">Desarrollo de Software</span>.
                            </div>
                            <div class="extras">
                                Con conocimientos en <b>Ciencia de Datos</b> y experiencia colaborando en equipos multidisciplinarios.<br>
                                <span class="ready">¡Listo para afrontar nuevos retos e impulsar proyectos innovadores!</span>
                            </div>
                        </div>
                        <style>
                            .bienvenida-animada { 
                                animation: fadeIn 1.5s; 
                                background: #f8fafc; 
                                border-radius: 12px; 
                                padding: 24px 18px; 
                                box-shadow: 0 2px 12px #0001;
                                font-size: 1.1em;
                            }
                            .saludo { font-size: 1.4em; font-weight: bold; margin-bottom: 8px; }
                            .nombre { color: #1976d2; animation: colorPulse 2s infinite; }
                            .presentacion, .intereses, .extras { margin-bottom: 8px; }
                            .destacado { color: #388e3c; font-weight: 600; }
                            .ready { color: #d32f2f; font-weight: 600; }
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(-20px);}
                                to { opacity: 1; transform: translateY(0);}
                            }
                            @keyframes colorPulse {
                                0% { color: #1976d2; }
                                50% { color: #388e3c; }
                                100% { color: #1976d2; }
                            }
                        </style>
                    `
                }
            },
            '/sobre-mi': {
                type: 'file',
                content: {
                    title: 'Sobre Mí',
                    description: `
                        <div class="sobre-mi-box">
                            <div class="foto-perfil">
                                <img src="../fotos/alex.jpg" alt="Foto de Alex Samaniego" />
                            </div>
                            <div class="info-personal">
                                <div class="nombre-sobre-mi">Alex Samaniego</div>
                                <div class="trayectoria">
                                    Estudiante del <b>9no semestre de Ingeniería de Sistemas</b> en la <b>Universidad Nacional del Centro del Perú</b>. Apasionado por la <span class="destacado">ciberseguridad</span>, el <span class="destacado">desarrollo de software</span> y la <span class="destacado">ciencia de datos</span>.
                                </div>
                                <div class="habilidades">
                                    <b>Habilidades:</b>
                                    <ul>
                                        <li>Python (Django, Flask, Pandas, NumPy), Java, JavaScript (React)</li>
                                        <li>Ciberseguridad: redes, criptografía, pentesting básico</li>
                                        <li>Bases de datos: MySQL, PostgreSQL, MongoDB</li>
                                        <li>Desarrollo web: HTML, CSS, APIs RESTful</li>
                                        <li>Ciencia de datos: análisis y visualización con Python</li>
                                        <li>Control de versiones: Git, GitHub</li>
                                    </ul>
                                </div>
                                <div class="experiencia">
                                    <b>Experiencia:</b> Participación en proyectos grupales y hackathons, destacando el desarrollo de un sistema de autenticación multifactor ("SecureLink") with Python y Flask. Fuerte capacidad de trabajo en equipo, liderazgo y comunicación.
                                </div>
                            </div>
                        </div>
                        <style>
                            .sobre-mi-box {
                                display: flex;
                                align-items: flex-start;
                                gap: 24px;
                                background: #f8fafc;
                                border-radius: 12px;
                                padding: 24px 18px;
                                box-shadow: 0 2px 12px #0001;
                                animation: fadeIn 1.2s;
                            }
                            .foto-perfil img {
                                width: 120px;
                                height: 120px;
                                border-radius: 50%;
                                object-fit: cover;
                                border: 3px solid #1976d2;
                                box-shadow: 0 2px 8px #0002;
                            }
                            .info-personal {
                                flex: 1;
                            }
                            .nombre-sobre-mi {
                                font-size: 1.3em;
                                font-weight: bold;
                                color: #1976d2;
                                margin-bottom: 6px;
                            }
                            .trayectoria, .habilidades, .experiencia {
                                margin-bottom: 10px;
                            }
                            .destacado {
                                color: #388e3c;
                                font-weight: 600;
                            }
                            ul {
                                margin: 6px 0 0 18px;
                                padding: 0;
                            }
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(-20px);}
                                to { opacity: 1; transform: translateY(0);}
                            }
                        </style>
                    `
                }
            },
            '/proyectos': {
                type: 'directory',
                children: ['En Proceso']
            },
            '/proyectos/proyectos-concluidos': {
                type: 'file',
                content: {
                    title: 'Proyectos Finalizados',
                    description: 'En proceso'
                }
            },
            '/cuaderno': {
                type: 'directory',
                children: ['semana1', 'semana2', 'semana3','semana4', 'semana5', 'semana6', 'semana7']
            },
            '/cuaderno/semana1': {
                type: 'file',
                content: {
                    title: 'Semana 1: Fundamentos Web',
                    topics: [
                        'Conceptos: web, app, sitio, página',
                        'Tecnologías básicas: HTML, CSS',
                        'Cómo funciona la web: DNS, TCP/IP, HTTP',
                        'Roles web: Frontend, Backend, Fullstack',
                        'Herramienta: Visual Studio Code'
                    ],
                    exercise: 'Identifica y explica la diferencia entre sitio web, página web y aplicación web. Realiza un “Hola Mundo” en HTML y CSS en VS Code.',
                    code: `<!-- Ejemplo de Página Web Básica -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Hola Mundo Web</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f8fafc; }
        h1 { color: #1976d2; }
        .ejemplo { color: #388e3c; }
    </style>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <p class="ejemplo">Esto es una página web simple usando HTML y CSS.</p>
</body>
</html>
<!-- ...otros ejemplos... */`,
                    description: `
                        <b>Resultado esperado del código:</b>
                        <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                            <h1 style="color: #1976d2;">¡Hola Mundo!</h1>
                            <p style="color: #388e3c;">Esto es una página web simple usando HTML y CSS.</p>
                        </div>
                    `,
                    reflection: 'Comprendí la diferencia entre los conceptos web y cómo se conectan los distintos roles y tecnologías para crear experiencias digitales.'
                }
            },
            // ...existing code...
'/cuaderno/semana2': {
    type: 'file',
    content: {
        title: 'Semana 2: Desarrollo Web con HTML y CSS',
        topics: [
            'HTML y XML: Estructura básica de páginas con HTML5 y XML',
            'Etiquetas principales de HTML5',
            'Concepto del Árbol DOM y su renderizado',
            'Optimización SEO y compatibilidad entre navegadores',
            'CSS3: Sintaxis y modelos de caja (block, inline, inline-block)',
            'Unidades de medida (absolutas y relativas)',
            'Diseño avanzado: Flexbox y CSS Grid Layout',
            'Principios de diseño fluido y web responsivo',
            'Productividad: Uso de Emmet para generar código HTML/CSS rápido'
        ],
        exercise: 'Crea una página sencilla con estructura HTML5, aplica estilos con Flexbox y hazla responsiva usando CSS. Incluye ejemplos de código Emmet.',
        code: `<!-- Estructura básica HTML5 -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo Flexbox Responsive</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; }
        header { background: #1976d2; color: #fff; padding: 16px; text-align: center; }
        .contenedor {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding: 16px;
        }
        .caja {
            background: #f8fafc;
            border: 1px solid #1976d2;
            border-radius: 8px;
            flex: 1 1 200px;
            min-width: 180px;
            padding: 16px;
            box-sizing: border-box;
            text-align: center;
        }
        @media (max-width: 600px) {
            .contenedor { flex-direction: column; }
        }
    </style>
</head>
<body>
    <header>Ejemplo de Flexbox y Diseño Responsive</header>
    <div class="contenedor">
        <div class="caja">Caja 1</div>
        <div class="caja">Caja 2</div>
        <div class="caja">Caja 3</div>
    </div>
</body>
</html>

<!-- Ejemplo de código Emmet para tablas y landing page -->

<!-- Tabla de 20 filas: -->
table>tbody>tr*20>td{fila$@-}+td{dato}

<!-- Resultado: -->
<table>
    <tbody>
        <tr><td>fila20</td><td>dato</td></tr>
        <tr><td>fila19</td><td>dato</td></tr>
        <!-- ...hasta fila1... -->
    </tbody>
</table>

<!-- Landing page básica con Emmet: -->
.container.mx-auto.p-8>section.hero.text-center>h1.text-4xl{Bienvenido a Mi Sitio}+p.text-lg{Tu solución digital empieza aquí}^section.servicios.grid.grid-cols-3.gap-4>(div.servicio>h3.text-xl{Servicio $}+p{Descripción del servicio $})*3+section.cta.bg-blue-500.text-white.p-6.text-center>h2.text-2xl{¿Listo para empezar?}+button.boton{Contáctanos}

<!-- Resultado: -->
<div class="container mx-auto p-8">
    <section class="hero text-center">
        <h1 class="text-4xl">Bienvenido a Mi Sitio</h1>
        <p class="text-lg">Tu solución digital empieza aquí</p>
    </section>
    <section class="servicios grid grid-cols-3 gap-4">
        <div class="servicio">
            <h3 class="text-xl">Servicio 1</h3>
            <p>Descripción del servicio 1</p>
        </div>
        <div class="servicio">
            <h3 class="text-xl">Servicio 2</h3>
            <p>Descripción del servicio 2</p>
        </div>
        <div class="servicio">
            <h3 class="text-xl">Servicio 3</h3>
            <p>Descripción del servicio 3</p>
        </div>
        <section class="cta bg-blue-500 text-white p-6 text-center">
            <h2 class="text-2xl">¿Listo para empezar?</h2>
            <button class="boton">Contáctanos</button>
        </section>
    </section>
</div>
`,
        description: `
            <b>Resultado esperado del laboratorio:</b>
            <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                <div style="background:#1976d2;color:#fff;padding:8px 0;border-radius:6px 6px 0 0;text-align:center;">Ejemplo de Flexbox y Diseño Responsive</div>
                <div style="display:flex;gap:12px;padding:12px 0;flex-wrap:wrap;">
                    <div style="background:#fff;border:1px solid #1976d2;border-radius:8px;flex:1 1 120px;min-width:80px;padding:12px;text-align:center;">Caja 1</div>
                    <div style="background:#fff;border:1px solid #1976d2;border-radius:8px;flex:1 1 120px;min-width:80px;padding:12px;text-align:center;">Caja 2</div>
                    <div style="background:#fff;border:1px solid #1976d2;border-radius:8px;flex:1 1 120px;min-width:80px;padding:12px;text-align:center;">Caja 3</div>
                </div>
                <span style="font-size:0.95em;color:#1976d2;">(Las cajas se adaptan al ancho de la pantalla)</span>
                <hr>
                <b>Ejemplo de tabla generada con Emmet:</b>
                <table style="width:100%;border-collapse:collapse;margin-top:8px;">
                    <tbody>
                        <tr><td style="border:1px solid #1976d2;padding:4px;">fila20</td><td style="border:1px solid #1976d2;padding:4px;">dato</td></tr>
                        <tr><td style="border:1px solid #1976d2;padding:4px;">fila19</td><td style="border:1px solid #1976d2;padding:4px;">dato</td></tr>
                        <tr><td style="border:1px solid #1976d2;padding:4px;">fila18</td><td style="border:1px solid #1976d2;padding:4px;">dato</td></tr>
                        <!-- ... -->
                    </tbody>
                </table>
                <hr>
                <b>Ejemplo de landing page generada con Emmet:</b>
                <div style="background:#e3f2fd;padding:16px;border-radius:8px;margin-top:8px;">
                    <h1 style="font-size:2em;text-align:center;margin:0 0 8px 0;">Bienvenido a Mi Sitio</h1>
                    <p style="text-align:center;margin:0 0 16px 0;">Tu solución digital empieza aquí</p>
                    <div style="display:flex;gap:8px;justify-content:center;">
                        <div style="background:#fff;border-radius:6px;padding:10px 16px;">
                            <h3 style="margin:0 0 4px 0;">Servicio 1</h3>
                            <p style="margin:0;">Descripción del servicio 1</p>
                        </div>
                        <div style="background:#fff;border-radius:6px;padding:10px 16px;">
                            <h3 style="margin:0 0 4px 0;">Servicio 2</h3>
                            <p style="margin:0;">Descripción del servicio 2</p>
                        </div>
                        <div style="background:#fff;border-radius:6px;padding:10px 16px;">
                            <h3 style="margin:0 0 4px 0;">Servicio 3</h3>
                            <p style="margin:0;">Descripción del servicio 3</p>
                        </div>
                    </div>
                    <div style="background:#1976d2;color:#fff;padding:12px 0;margin-top:16px;border-radius:6px;text-align:center;">
                        <h2 style="margin:0 0 8px 0;">¿Listo para empezar?</h2>
                        <button style="background:#fff;color:#1976d2;border:none;padding:8px 18px;border-radius:4px;cursor:pointer;">Contáctanos</button>
                    </div>
                </div>
            </div>
        `,
        reflection: 'Aprendí a estructurar páginas web modernas y responsivas usando HTML5 y CSS3, aplicando Flexbox, principios de diseño fluido y productividad con Emmet.'
    }
},
// ...existing code...
            '/cuaderno/semana3': {
                type: 'file',
                content: {
                    title: 'Semana 3: Frameworks CSS y UI',
                    topics: [
                        'Desarrollo con Bootstrap: Uso de layouts y componentes para diseño Front-End',
                        'Desarrollo con Tailwind CSS: Utilidades para tipografía, fondo, bordes, efectos y espaciado',
                        'Gestión de layouts: contenedores, columnas, display, posición',
                        'Dominio de Flexbox: dirección, wrap, grow, shrink',
                        'Componentes de Interfaz de Usuario (UI): avatares, insignias, desplegables, botones, grupos de botones',
                        'Construcción de interfaces: cabeceras, visualización de datos, listas, formularios, navegación y superposiciones'
                    ],
                    exercise: 'Desarrolla una página sencilla usando Bootstrap o Tailwind CSS que incluya una cabecera, botones, una lista y un formulario.',
                    code: `<!-- Ejemplo con Bootstrap 5 CDN -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo Bootstrap UI</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi Sitio</a>
        </div>
    </nav>
    <div class="container">
        <h1 class="mb-3">Bienvenido</h1>
        <button class="btn btn-success mb-2">Botón Principal</button>
        <ul class="list-group mb-3">
            <li class="list-group-item">Elemento 1</li>
            <li class="list-group-item">Elemento 2</li>
        </ul>
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</body>
</html>
<!-- Puedes cambiar Bootstrap por Tailwind CSS si lo prefieres -->`,
                    description: `
                        <b>Resultado esperado del laboratorio:</b>
                        <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                            <div style="background:#1976d2;color:#fff;padding:8px 0;border-radius:6px 6px 0 0;text-align:center;">Mi Sitio</div>
                            <h1 style="margin:16px 0 8px 0;">Bienvenido</h1>
                            <button style="background:#388e3c;color:#fff;border:none;padding:8px 18px;border-radius:4px;margin-bottom:8px;">Botón Principal</button>
                            <ul style="list-style:none;padding:0;margin-bottom:12px;">
                                <li style="background:#fff;border:1px solid #1976d2;border-radius:4px;padding:8px 0 8px 12px;margin-bottom:4px;">Elemento 1</li>
                                <li style="background:#fff;border:1px solid #1976d2;border-radius:4px;padding:8px 0 8px 12px;">Elemento 2</li>
                            </ul>
                            <form>
                                <div style="margin-bottom:8px;">
                                    <label>Nombre</label><br>
                                    <input type="text" style="padding:6px 10px;border:1px solid #ccc;border-radius:4px;width:100%;max-width:220px;">
                                </div>
                                <button style="background:#1976d2;color:#fff;border:none;padding:8px 18px;border-radius:4px;">Enviar</button>
                            </form>
                        </div>
                    `,
                    reflection: 'Aprendí a utilizar frameworks CSS como Bootstrap y Tailwind para crear interfaces modernas y responsivas de manera eficiente.'
                }
            },
'/cuaderno/semana4': {
    type: 'file',
    content: {
        title: 'Semana 4: Desarrollo Front-End con JavaScript y TypeScript',
        topics: [
            'Fundamentos de JavaScript y TypeScript: Motores, variables, operadores y tipos de datos',
            'Estructuras de control y bucles',
            'Funciones en JavaScript: sintaxis, invocación, tipos (anónimas, flecha, auto invocadas, closures)',
            'Manipulación del DOM y Canvas: métodos y propiedades del DOM',
            'Estilización de elementos con JavaScript',
            'Creación de animaciones y gráficos con Canvas'
        ],
        exercise: 'Desarrolla una animación sencilla utilizando JavaScript y el elemento Canvas.',
        code: `<!-- Ejemplo de animación con JavaScript y Canvas -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Animación Canvas JS</title>
    <style>
        body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; }
    </style>
</head>
<body>
    <canvas id="lienzo" width="320" height="120" style="border:1px solid #1976d2;"></canvas>
    <script>
        const canvas = document.getElementById('lienzo');
        const ctx = canvas.getContext('2d');
        let x = 40, dx = 2;
        const radio=20;    

        function dibujar() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(x, 60, 20, 0, Math.PI * 2);
            ctx.fillStyle = '#1976d2';
            ctx.fill();
            ctx.closePath();
            x += dx;
            if (x + radio> canvas.width || x-radio < 20) {
            dx *= -1;
            }
            requestAnimationFrame(dibujar);
        }
        dibujar();
    </script>
</body>
</html>
<!-- Este ejemplo crea una animación simple de una pelota rebotando en el canvas -->`,
        description:`
    <b>Resultado esperado del laboratorio:</b>
    <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
        <canvas id="demo-canvas" width="320" height="120" style="background:#fff;border:1px solid #1976d2;border-radius:6px;display:block;margin:auto;"></canvas>
        <span style="display:block;text-align:center;margin-top:8px;color:#1976d2;">(Pelota animada rebotando)</span>
        <script>
            (function() {
                const canvas = document.getElementById('demo-canvas');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                let x = 40, dx = 2;
                const radio = 20;
                function dibujar() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.arc(x, 60, radio, 0, Math.PI * 2);
                    ctx.fillStyle = '#1976d2';
                    ctx.fill();
                    ctx.closePath();
                    x += dx;
                    if (x + radio > canvas.width || x - radio < 0) {
                        dx *= -1;
                    }
                    requestAnimationFrame(dibujar);
                }
                dibujar();
            })();
        </script>
    </div>
`,
        reflection: 'Aprendí a manipular el DOM y Canvas con JavaScript, creando animaciones y comprendiendo la interacción entre código y elementos visuales.'
    }
},


// ...existing code...
'/cuaderno/semana5': {
    type: 'file',
    content: {
        title: 'Semana 5: Desarrollo Front-End con Framework JS',
        topics: [
            'Fundamentos de Frameworks JS: Estructura y operación de frameworks (Client Side Rendering)',
            'Gestión de dependencias y herramientas de creación de proyectos',
            'Desarrollo Basado en Componentes: Conceptos de JSX, Props y Children',
            'Estilización en Frameworks JS: Métodos de estilos (inline, Style Sheets, Modules, Styled Components, Frameworks CSS)'
        ],
        exercise: 'Implementa el paso de datos entre componentes utilizando props y children en un framework JS.',
        code: `// Ejemplo en React: Lista de tareas con componentes, props y children
import React, { useState } from 'react';

function Tarea({ texto, completada, onToggle }) {
    return (
        <li
            style={{
                textDecoration: completada ? 'line-through' : 'none',
                color: completada ? '#888' : '#1976d2',
                cursor: 'pointer',
                padding: 6,
                borderRadius: 4
            }}
            onClick={onToggle}
        >
            {texto}
        </li>
    );
}

function ListaTareas({ children }) {
    return (
        <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
            {children}
        </ul>
    );
}

export default function App() {
    const [tareas, setTareas] = useState([
        { texto: 'Aprender JSX', completada: false },
        { texto: 'Usar props y children', completada: false },
        { texto: 'Estilizar componentes', completada: false }
    ]);

    const toggleTarea = idx => {
        setTareas(tareas =>
            tareas.map((t, i) =>
                i === idx ? { ...t, completada: !t.completada } : t
            )
        );
    };

    return (
        <div style={{ border: '1px solid #1976d2', borderRadius: 8, padding: 20, maxWidth: 340 }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>Lista de Tareas</h3>
            <ListaTareas>
                {tareas.map((t, i) => (
                    <Tarea
                        key={i}
                        texto={t.texto}
                        completada={t.completada}
                        onToggle={() => toggleTarea(i)}
                    />
                ))}
            </ListaTareas>
            <p style={{ fontSize: '0.95em', color: '#888', marginTop: 12 }}>
                Haz clic en una tarea para marcarla como completada.
            </p>
        </div>
    );
}
`,
        description: `
            <b>Resultado esperado del laboratorio:</b>
            <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                <div style="border:1px solid #1976d2;border-radius:8px;padding:20px;max-width:340px;margin:auto;">
                    <h3 style="color:#1976d2;margin-top:0;">Lista de Tareas</h3>
                    <ul style="padding:0;list-style:none;margin:0;">
                        <li style="color:#1976d2;padding:6px;border-radius:4px;">Aprender JSX</li>
                        <li style="color:#1976d2;padding:6px;border-radius:4px;">Usar props y children</li>
                        <li style="color:#1976d2;padding:6px;border-radius:4px;">Estilizar componentes</li>
                    </ul>
                    <p style="font-size:0.95em;color:#888;margin-top:12px;">
                        Haz clic en una tarea para marcarla como completada.
                    </p>
                </div>
            </div>
        `,
        reflection: 'Aprendí a crear componentes reutilizables, pasar datos y funciones como props, y a usar children para estructurar interfaces dinámicas en React.'
    }
},
// ...existing code...



// ...existing code...
'/cuaderno/semana6': {
    type: 'file',
    content: {
        title: 'Semana 6: Interactividad y Consumo de APIs con Framework JS',
        topics: [
            'Lógica en Aplicaciones Front-End: Manejo de Eventos',
            'Renderizado Condicional e Iterativo',
            'Gestión de Formularios y Rutas (Routing)',
            'Consumo de APIs: Promesas y Async/Await',
            'Obtención de datos de una API externa',
            'Uso de la librería Axios para peticiones HTTP'
        ],
        exercise: 'Implementa una lista dinámica que obtenga datos de una API externa y permita filtrar resultados mediante un formulario.',
        code: `// Ejemplo en React: Lista de usuarios desde una API con filtro y Axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsuarios(res.data);
                setCargando(false);
            });
    }, []);

    const usuariosFiltrados = usuarios.filter(u =>
        u.name.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div style={{ border: '1px solid #1976d2', borderRadius: 8, padding: 20, maxWidth: 400 }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>Usuarios</h3>
            <input
                type="text"
                placeholder="Filtrar por nombre..."
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
                style={{ marginBottom: 12, padding: 6, width: '100%', borderRadius: 4, border: '1px solid #ccc' }}
            />
            {cargando ? (
                <div style={{ color: '#888' }}>Cargando...</div>
            ) : (
                <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                    {usuariosFiltrados.map(u => (
                        <li key={u.id} style={{ padding: 6, borderBottom: '1px solid #eee' }}>
                            <b>{u.name}</b> <span style={{ color: '#888' }}>({u.email})</span>
                        </li>
                    ))}
                    {usuariosFiltrados.length === 0 && (
                        <li style={{ color: '#d32f2f', padding: 6 }}>No hay resultados.</li>
                    )}
                </ul>
            )}
        </div>
    );
}
`,
        description: `
            <b>Resultado esperado del laboratorio:</b>
            <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                <div style="border:1px solid #1976d2;border-radius:8px;padding:20px;max-width:400px;margin:auto;">
                    <h3 style="color:#1976d2;margin-top:0;">Usuarios</h3>
                    <input type="text" placeholder="Filtrar por nombre..." style="margin-bottom:12px;padding:6px;width:100%;border-radius:4px;border:1px solid #ccc;">
                    <ul style="padding:0;list-style:none;margin:0;">
                        <li style="padding:6px;border-bottom:1px solid #eee;"><b>Leanne Graham</b> <span style="color:#888;">(Sincere@april.biz)</span></li>
                        <li style="padding:6px;border-bottom:1px solid #eee;"><b>Ervin Howell</b> <span style="color:#888;">(Shanna@melissa.tv)</span></li>
                        <li style="padding:6px;border-bottom:1px solid #eee;"><b>Clementine Bauch</b> <span style="color:#888;">(Nathan@yesenia.net)</span></li>
                        <!-- ...otros usuarios... -->
                    </ul>
                </div>
            </div>
        `,
        reflection: 'Aprendí a consumir APIs externas, manejar eventos y renderizar listas dinámicas en React usando datos obtenidos de manera asíncrona.'
    }
},
// ...existing code...
// ...existing code...
'/cuaderno/semana7': {
    type: 'file',
    content: {
        title: 'Semana 7: Gestión de Estado con Hooks en Framework JS',
        topics: [
            'Uso de Hooks Fundamentales: useState, useEffect, useContext, useRef',
            'Hooks avanzados: useReducer, useCallback, useMemo',
            'Hooks Personalizados: Creación y aplicación',
            'Evaluación de Logro 01'
        ],
        exercise: 'Implementa un contador con React usando useState y un hook personalizado para registrar el historial de cambios.',
        code: `// Ejemplo en React: Contador con useState y un hook personalizado
import React, { useState } from 'react';

// Hook personalizado para historial
function useHistorial(valor) {
    const [historial, setHistorial] = useState([valor]);
    React.useEffect(() => {
        setHistorial(h => [...h, valor]);
    }, [valor]);
    return historial;
}

export default function App() {
    const [contador, setContador] = useState(0);
    const historial = useHistorial(contador);

    return (
        <div style={{ border: '1px solid #1976d2', borderRadius: 8, padding: 20, maxWidth: 340 }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>Contador con Historial</h3>
            <div style={{ fontSize: '2em', margin: '12px 0' }}>{contador}</div>
            <button onClick={() => setContador(c => c + 1)} style={{ marginRight: 8 }}>Incrementar</button>
            <button onClick={() => setContador(c => c - 1)}>Decrementar</button>
            <div style={{ marginTop: 16 }}>
                <b>Historial:</b>
                <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                    {historial.map((v, i) => (
                        <li key={i} style={{ color: '#1976d2' }}>{v}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
`,
        description: `
            <b>Resultado esperado del laboratorio:</b>
            <div style="font-family: Arial, sans-serif; background: #f8fafc; border-radius: 8px; padding: 12px 18px; margin: 12px 0;">
                <div style="border:1px solid #1976d2;border-radius:8px;padding:20px;max-width:340px;margin:auto;">
                    <h3 style="color:#1976d2;margin-top:0;">Contador con Historial</h3>
                    <div style="font-size:2em;margin:12px 0;">0</div>
                    <button style="margin-right:8px;">Incrementar</button>
                    <button>Decrementar</button>
                    <div style="margin-top:16px;">
                        <b>Historial:</b>
                        <ul style="padding:0;list-style:none;margin:0;">
                            <li style="color:#1976d2;">0</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        reflection: 'Aprendí a gestionar el estado en React usando hooks fundamentales y personalizados, y a registrar el historial de cambios de estado.'
    }
},
// ...existing code...

            // ...existing code...
'/reflexion-final': {
    type: 'file',
    content: {
        title: 'Reflexión Final',
        description: `
            <div class="reflexion-final-animada">
                <h2>🌟 Reflexión Final del Portafolio 🌟</h2>
                <p>
                    A lo largo de este portafolio, he recorrido un camino de aprendizaje integral en el desarrollo web, desde los <b>fundamentos de HTML y CSS</b> hasta la <b>gestión avanzada de estado con Hooks en React</b>. Cada semana representó un nuevo reto y una oportunidad para fortalecer mis habilidades técnicas y creativas.
                </p>
                <ul>
                    <li><b>Semana 1-2:</b> Aprendí a estructurar páginas web modernas, aplicar estilos responsivos y utilizar herramientas como Emmet para agilizar mi flujo de trabajo.</li>
                    <li><b>Semana 3:</b> Descubrí el poder de los frameworks CSS como Bootstrap y Tailwind para crear interfaces atractivas y funcionales.</li>
                    <li><b>Semana 4:</b> Profundicé en JavaScript y TypeScript, manipulando el DOM y creando animaciones visuales.</li>
                    <li><b>Semana 5:</b> Me adentré en el desarrollo con frameworks JS, comprendiendo la importancia de los componentes, props y estilos modernos.</li>
                    <li><b>Semana 6:</b> Experimenté la interactividad real al consumir APIs externas y renderizar datos dinámicamente.</li>
                    <li><b>Semana 7:</b> Alcancé un dominio sólido en la gestión de estado y hooks personalizados, logrando aplicaciones más robustas y escalables.</li>
                </ul>
                <p>
                    Este proceso no solo me permitió adquirir conocimientos técnicos, sino también desarrollar habilidades de <b>autonomía, resolución de problemas y creatividad</b>. Cada laboratorio fue una oportunidad para experimentar, equivocarme y mejorar, consolidando mi pasión por la tecnología y el desarrollo de software.
                </p>
                <div class="reflexion-firma">
                    <span>🚀 ¡Listo para nuevos retos y seguir aprendiendo! 🚀</span>
                </div>
            </div>
            <style>
                .reflexion-final-animada {
                    background: linear-gradient(120deg, #e3f2fd 0%, #f8fafc 100%);
                    border-radius: 14px;
                    padding: 32px 24px;
                    box-shadow: 0 4px 24px #1976d233;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    animation: fadeInReflexion 1.5s;
                    margin: 24px auto;
                    max-width: 700px;
                }
                .reflexion-final-animada h2 {
                    color: #1976d2;
                    text-align: center;
                    margin-bottom: 18px;
                    animation: colorPulseReflexion 2.5s infinite;
                }
                .reflexion-final-animada ul {
                    margin: 18px 0 18px 24px;
                    padding: 0;
                    font-size: 1.08em;
                }
                .reflexion-final-animada li {
                    margin-bottom: 7px;
                    transition: color 0.3s;
                }
                .reflexion-final-animada li:hover {
                    color: #388e3c;
                }
                .reflexion-final-animada p {
                    margin-bottom: 14px;
                    line-height: 1.7;
                }
                .reflexion-firma {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 1.2em;
                    color: #388e3c;
                    font-weight: bold;
                    letter-spacing: 1px;
                    animation: firmaAnimada 2s infinite alternate;
                }
                @keyframes fadeInReflexion {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes colorPulseReflexion {
                    0% { color: #1976d2; }
                    50% { color: #388e3c; }
                    100% { color: #1976d2; }
                }
                @keyframes firmaAnimada {
                    0% { letter-spacing: 1px; }
                    100% { letter-spacing: 4px; color: #1976d2; }
                }
            </style>
        `
    }
},
// ...existing code...
            // ...existing code...
'/bibliografia': {
    type: 'file',
    content: {
        title: 'Bibliografía',
        description: `
            <ul class="bibliografia-lista">
                <li>
                    <b>HTML & CSS:</b> Duckett, J. (2011). <i>HTML and CSS: Design and Build Websites</i>. Wiley.
                </li>
                <li>
                    <b>JavaScript:</b> Flanagan, D. (2020). <i>JavaScript: The Definitive Guide</i> (7th ed.). O'Reilly Media.
                </li>
                <li>
                    <b>React:</b> Abramov, D., & Clark, A. (2024). <i>React Documentation</i>. <a href="https://react.dev/" target="_blank">https://react.dev/</a>
                </li>
                <li>
                    <b>CSS Frameworks:</b> Bootstrap Team. (2024). <i>Bootstrap Documentation</i>. <a href="https://getbootstrap.com/docs/" target="_blank">https://getbootstrap.com/docs/</a>
                </li>
                <li>
                    <b>Tailwind CSS:</b> Tailwind Labs. (2024). <i>Tailwind CSS Documentation</i>. <a href="https://tailwindcss.com/docs" target="_blank">https://tailwindcss.com/docs</a>
                </li>
                <li>
                    <b>Axios:</b> Axios Project. (2024). <i>Axios Documentation</i>. <a href="https://axios-http.com/docs/intro" target="_blank">https://axios-http.com/docs/intro</a>
                </li>
                <li>
                    <b>Emmet:</b> Emmet Documentation. (2024). <a href="https://docs.emmet.io/" target="_blank">https://docs.emmet.io/</a>
                </li>
                <li>
                    <b>MDN Web Docs:</b> Mozilla. (2024). <a href="https://developer.mozilla.org/" target="_blank">https://developer.mozilla.org/</a>
                </li>
            </ul>
            <style>
                .bibliografia-lista {
                    font-size: 1.08em;
                    padding-left: 18px;
                    margin-top: 12px;
                }
                .bibliografia-lista li {
                    margin-bottom: 10px;
                    line-height: 1.5;
                }
                .bibliografia-lista a {
                    color: #1976d2;
                    text-decoration: underline;
                    transition: color 0.2s;
                }
                .bibliografia-lista a:hover {
                    color: #388e3c;
                }
            </style>
        `
    }
},
// ...existing code...
        };

        this.initializeEventListeners();
        this.generateNavButtons();
    }

    initializeEventListeners() {
        const terminalInput = document.getElementById('terminal-input');
        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleTerminalSubmit();
            }
        });
    }

    generateNavButtons() {
        const navButtonsContainer = document.getElementById('nav-buttons');
        
        Object.entries(this.fileStructure).forEach(([path, data]) => {
            if (data.type === 'file' && path !== '/') {
                const button = document.createElement('button');
                button.className = 'nav-button';
                button.innerHTML = `📄 ${path.split('/').pop()}`;
                button.onclick = () => this.openFile(path);
                navButtonsContainer.appendChild(button);
            }
        });
    }

    handleTerminalSubmit() {
        const input = document.getElementById('terminal-input');
        const command = input.value.trim();
        
        if (!command) return;
        
        const output = this.executeCommand(command);
        this.addToHistory('input', `${this.currentPath}$ ${command}`);
        
        output.forEach(line => {
            this.addToHistory('output', line);
        });
        
        input.value = '';
        this.scrollTerminalToBottom();
    }

    executeCommand(input) {
        const [cmd, ...args] = input.split(' ');
        const arg = args.join(' ');

        switch(cmd) {
            case 'help':
                return [
                    'Comandos disponibles:',
                    '  ls         - Listar archivos y directorios',
                    '  cd <path>  - Cambiar directorio',
                    '  cat <file> - Ver contenido de archivo',
                    '  pwd        - Mostrar directorio actual',
                    '  clear      - Limpiar terminal',
                    '  tree       - Ver estructura de archivos',
                    '  open <file> - Abrir archivo en visor'
                ];
            
            case 'ls':
                return this.listDirectory();
            
            case 'cd':
                return this.changeDirectory(arg);
            
            case 'pwd':
                return [this.currentPath];
            
            case 'cat':
                return this.catFile(arg);
            
            case 'open':
                return this.openFileCommand(arg);
            
            case 'tree':
                return this.showTree();
            
            case 'clear':
                this.clearTerminal();
                return [];
            
            default:
                return cmd ? [`${cmd}: comando no encontrado. Escribe 'help' para ver comandos disponibles.`] : [];
        }
    }

    listDirectory() {
        const current = this.fileStructure[this.currentPath];
        if (current && current.type === 'directory') {
            return current.children.map(child => {
                const childPath = this.currentPath === '/' ? `/${child}` : `${this.currentPath}/${child}`;
                const childData = this.fileStructure[childPath];
                const icon = childData?.type === 'directory' ? '📁' : '📄';
                return `${icon} ${child}`;
            });
        }
        return ['No es un directorio válido'];
    }

    changeDirectory(path) {
        if (!path) return ['Uso: cd <directorio>'];
        
        let newPath;
        if (path === '..') {
            const pathParts = this.currentPath.split('/').filter(p => p);
            pathParts.pop();
            newPath = pathParts.length > 0 ? '/' + pathParts.join('/') : '/';
        } else if (path.startsWith('/')) {
            newPath = path;
        } else if (this.currentPath === '/') {
            newPath = `/${path}`;
        } else {
            newPath = `${this.currentPath}/${path}`;
        }
        
        if (this.fileStructure[newPath] && this.fileStructure[newPath].type === 'directory') {
            this.currentPath = newPath;
            this.updatePrompt();
            return [`Cambiado a: ${newPath}`];
        }
        return [`cd: ${path}: No existe el directorio`];
    }

    catFile(filename) {
        if (!filename) return ['Uso: cat <archivo>'];
        
        const filePath = this.currentPath === '/' ? `/${filename}` : `${this.currentPath}/${filename}`;
        const file = this.fileStructure[filePath];
        
        if (file && file.type === 'file') {
            const content = file.content;
            return [
                `=== ${content.title} ===`,
                content.description || '',
                content.topics ? `Temas: ${content.topics.join(', ')}` : '',
                content.exercise ? `Ejercicio: ${content.exercise}` : '',
                content.reflection ? `Reflexión: ${content.reflection}` : ''
            ].filter(line => line !== '');
        }
        return [`cat: ${filename}: No existe el archivo`];
    }

    openFileCommand(filename) {
        if (!filename) return ['Uso: open <archivo>'];
        
        const filePath = this.currentPath === '/' ? `/${filename}` : `${this.currentPath}/${filename}`;
        const file = this.fileStructure[filePath];
        
        if (file && file.type === 'file') {
            this.openFile(filePath);
            return [`Abriendo ${filename}...`];
        }
        return [`open: ${filename}: No existe el archivo`];
    }

    showTree() {
        const buildTree = (path, prefix = '') => {
            const current = this.fileStructure[path];
            if (!current) return [];
            
            const lines = [];
            if (current.type === 'directory' && current.children) {
                current.children.forEach((child, index) => {
                    const isLast = index === current.children.length - 1;
                    const childPath = path === '/' ? `/${child}` : `${path}/${child}`;
                    const childData = this.fileStructure[childPath];
                    const icon = childData?.type === 'directory' ? '📁' : '📄';
                    
                    lines.push(`${prefix}${isLast ? '└── ' : '├── '}${icon} ${child}`);
                    
                    if (childData?.type === 'directory') {
                        const childLines = buildTree(childPath, prefix + (isLast ? '    ' : '│   '));
                        lines.push(...childLines);
                    }
                });
            }
            return lines;
        };
        
        return ['📁 /', ...buildTree('/')];
    }

    openFile(filePath) {
        const file = this.fileStructure[filePath];
        if (!file || file.type !== 'file') return;
        
        this.renderFileContent(file.content);
        this.switchToFileView();
    }

    renderFileContent(content) {
        const fileContentDiv = document.getElementById('file-content');
        
        let html = `
            <div class="file-header">
                <div class="file-title">${content.title}</div>
                <button class="back-button" onclick="portfolio.switchToTerminalView()">Volver a Terminal</button>
            </div>
        `;
        
        if (content.description) {
            html += `<div class="file-description">${content.description}</div>`;
        }
        
        if (content.topics) {
            html += `
                <div class="section">
                    <div class="section-title">Temas Trabajados:</div>
                    <ul class="topics-list">
                        ${content.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (content.exercise) {
            html += `
                <div class="section">
                    <div class="section-title">Ejercicio Práctico:</div>
                    <div class="exercise-box">${content.exercise}</div>
                </div>
            `;
        }
        
        if (content.code) {
            html += `
                <div class="section">
                    <div class="code-section">
                        <div class="code-header">
                            <div class="section-title">Código de Ejemplo:</div>
                            <button class="copy-button" onclick="portfolio.copyCode('${btoa(content.code)}')">
                                📋 Copiar
                            </button>
                        </div>
                        <div class="code-block">${this.escapeHtml(content.code)}</div>
                    </div>
                </div>
            `;
        }
        
        if (content.reflection) {
            html += `
                <div class="section">
                    <div class="section-title">Reflexión:</div>
                    <div class="reflection-box">${content.reflection}</div>
                </div>
            `;
        }
        
        fileContentDiv.innerHTML = html;
    }

    copyCode(encodedCode) {
        const code = atob(encodedCode);
        navigator.clipboard.writeText(code).then(() => {
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = '✅ Copiado';
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    switchToFileView() {
        document.getElementById('terminal-view').classList.add('hidden');
        document.getElementById('file-view').classList.remove('hidden');
    }

    switchToTerminalView() {
        document.getElementById('file-view').classList.add('hidden');
        document.getElementById('terminal-view').classList.remove('hidden');
        document.getElementById('terminal-input').focus();
    }

    addToHistory(type, content) {
        const historyDiv = document.getElementById('terminal-history');
        const line = document.createElement('div');
        line.className = `terminal-line ${type}-line`;
        line.textContent = content;
        historyDiv.appendChild(line);
    }

    clearTerminal() {
        document.getElementById('terminal-history').innerHTML = '';
    }

    updatePrompt() {
        document.getElementById('current-path').textContent = this.currentPath;
        document.getElementById('terminal-prompt').textContent = `${this.currentPath}$`;
    }

    scrollTerminalToBottom() {
        const terminalBody = document.getElementById('terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Inicializar el portafolio
const portfolio = new Portfolio();