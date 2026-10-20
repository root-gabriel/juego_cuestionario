- Nombre del juego: Ahora Respondes Tú
- Preguntas:
- 1. ¿Cuál es la capital de Francia?
- 2. ¿En qué año se descubrió América?
- 3. ¿Cuántas comunidades autónomas tiene España?
- 4. ¿Cuál es el río más largo del mundo?
- 5. ¿Qué tipo de animal es la ballena?
- 6. ¿Quién es el autor de Don Quijote de la Mancha?
- 7. ¿Quién pintó La Última Cena?
- 8. ¿Cuál fue el primer metal que empleó el hombre?
- 9. ¿Cuál es el primer número primo?
- 10. ¿Cuál es el planeta con más lunas?
- El sistema de puntuación es el siguiente:
- Asigna una puntuación a cada pregunta y actuliza la puntuación total según se responda.
- El juego finaliza al responder todas las preguntas.
- Cuando todas las preguntas son respondidas aparece un la puntuación obtenida y un botón para reiniciar el cuestionario.
- El juego debe contar con un diseño responsive y compatibilidad de navegación con teclado.
- El juego se separa en tres archivos distintos HTML, CSS Y JavaScript.
- No uses pr alert() en toda la interacción.
- No uses dependencias, imágenes remotas ni datos personales.

1. ¿Se puede saber cuándo el juego está terminado?
Sí. En todas las versiones del prompt se establece cuando se termina el juego dentro de la sección Requisitos funcionales.

2. ¿Se especifica dón de debe vivir cada parte del código?
Sí. Se define tanto a nivel de arquitectura <<Separa el código HTNL, CSS y JavaScript>> como a nivel de salida dónde se especifica que el árbol de archivos debe tener tres ficheros index.html, styles.css y app.js.

3. ¿Qué salida será posible comprobar en el navegador?
En navegador la salida será de una pregunta a la vez con cuatro respuestas.
Indicador de si la respuesta es correcta o incorrecta mediante colores en las primeras versiones del prompt y mediante texto legibel a partir de la versión 3 del prompt.
La puntuación es visible en la esquina superior derecha en la versión 2 del prompt, a partir de la tercera versión se puede visualizar la puntuación actual después de responder la pregunta.
A partir de la tercera versión se incluye un botón de avance a la siguiente pregunta despues de seleccionar una respuesta, en la última versión este botón muta en la última pregunta para confirmar que se quiere ver la puntuación final.
En todas las versiones al terminar el cuestionario se muestra una pantalla final en la que se muestra la puntuación total alcanzada sobre 100 y un botón para reiniciar el juego.

4. ¿Qué requisito impediría que el resultado dependiera de un servicio externo?
La restricción explícita que se encuentra en la sección de Requisitos de accesibiliada y calidad <<No uses dependencias, iámegens remotas ni datos personales>>.


Tres revisiones realizadas al prompt original son:

En la v1 no se establecia de forma estricta un sistema de puntuación. Esto se corrigió en posterioes versiones estableciendo una puntuación máxima de 100 puntos y un valor fijo a cada pregunta.

En la v1 no existía un control de avance ni protección tras responder la pregunta. 
Posteriormente en las versiones finales se deshabilito el resto de respuestas alternativas al elegir una opción y se hizo aparecer un botón para avanzar a la siguiente pregunta.
Además en las versiones 4 y 5 se incluyó un cambio en el foco hacia el botón de "Siguiente pregunta" para evitar que un usuario se pueda quedar atrapado en el resto de opciones tras responder y se incorpora la navegación con teclado.
Por último, en la última versión se refina el final del flujo indicando un cambio en el texto del último botón para indicar que se verá la puntuación final.

En la v1 se indicaba si la respuesta era correcta o incorrecta a través de colores, esto se corrige a partir de la versión 3 indicando si es o no correcta a través de texto legible.

