Rol: Actúa como desarrollador/a frontend que crea recursos accesibles para alumnado de 2.º DAW.

Tarea: Construye un juego web de preguntas llamado Ahora Respondes Tú.

Contexto: Se ejecutará localmente al abrir index.html. El público es general.
Las preguntas son: 
### 1. ¿Cuál es la capital de Francia?
- [x] París
- [ ] Madrid
- [ ] Roma
- [ ] Lisboa
### 2. ¿En qué año se descubrió América?
- [ ] 1472
- [ ] 1394
- [x] 1492
- [ ] 1482
### 3. ¿Cuántas comunidades autónomas tiene España?
- [ ] 27
- [ ] 19
- [ ] 16
- [x] 17
### 4. ¿Cuál es el río más largo del mundo?
- [ ] Tajo
- [x] Amazonas
- [ ] Nilo
- [ ] Sena
### 5. ¿Qué tipo de animal es la ballena?
- [ ] Pez
- [ ] Reptil
- [ ] Ave
- [x] Mamífero
### 6. ¿Quién es el autor de Don Quijote de la Mancha?
- [ ] Rubén Darío
- [ ] William Shakespeare
- [x] Miguel de Cervantes
- [ ] Lope de Vega
### 7. ¿Quién pintó La Última Cena?
- [ ] Rafael Sanzio
- [ ] Miguel Ángel Buonarroti
- [x] Leonardo da Vinci
- [ ] Sandro Botticelli
### 8. ¿Cuál fue el primer metal que empleó el hombre?
- [ ] Oro
- [ ] Estaño
- [x] Cobre
- [ ] Hierro
### 9. ¿Cuál es el primer número primo?
- [ ] 3
- [ ] 1
- [x] 2
- [ ] 0
### 10. ¿Cuál es el planeta con más lunas?
- [ ] Júpiter
- [x] Saturno
- [ ] Urano
- [ ] Tierra

Requisitos funcionales:
- Muestra una pregunta cada vez con cuatro respuestas.
- Indica si la respuesta es correcta y actualiza la puntuación.
- La puntuación total es sobre 100 cada pregunta vale 10 puntos.
- Muestra la puntuación actual después de responder la pregunta.
- Al terminar, muestra la puntuación y un botón para reiniciar.
- Debe permitir interacción con teclado, para moverse entre las preguntas se usarán las flechas o W(arriba),A(izquierda), S(abajo), D(derecha), y para confirmar la pregunta se usará la tecla Enter o espacio.

Requisitos de accesibilidad y calidad:
- Usa elementos HTML semánticos, etiquetas visibles y foco de teclado.
- No uses dependencias, imágenes remotas ni datos personales.
- Después de seleccionar la respuesta muestra un botón que permite avanzar a la siguiente pregunta y desactiva el uso del resto de opciones.
-  El foco cambia de las opciones de respuesta al botón de siguiente una vez respondida la pregunta.
- Se debe indicar si la respuesta es correcta o incorrecta con texto legible.
- Separa HTML, CSS y JavaScript.

Formato de salida:
1. Muestra primero el árbol de archivos.
2. Devuelve el contenido completo de index.html, styles.css y app.js en bloques separados.
3. Explica cómo probarlo localmente y enumera tres pruebas manuales.

Restricciones:
- No inventes características fuera de esta lista.
- No uses alert() para toda la interacción.