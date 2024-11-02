# Barcelona Experience

## Descripción



Eres un oficinista que tiene que llegar al trabajo en metro pero ¡CUIDADO!
El metro en Barcelona esconde muchos peligros.
¿Serás capaz de sortear los peligros y llegar a tu trabajo a tiempo?

## Planificación

### 1. Funcionalidad del juego

Tendrás que esquivar a los guiris/turistas sino quieres que te paren para preguntar dónde comer paela.
Al mismo tiempo puedes conseguir puntos matando las cucarachas del metro. ¡OJO! Estos puntos te ayudarán a pelear contra el final boss:
El carterista o pickpocket del metro.

¡Si consigues evitar al carterista llegarás sano/a al trabajo!

Funcionalidades principales:

- El jugador debe esquivar a los turistas (guiris).
- El jugador puede matar cucarachas para ganar puntos.
- Enfrentamiento final con el boss (carterista).
- Objetivo final: llegar al trabajo esquivando los peligros.

### 2. Diseño del juego (low-fi)

Elementos

<img src="./images/Elementos.png" alt="Elementos" width="900" >

Primer escenario: Andén del metro (esquivar turistas)

- El jugador esquiva turistas y pisa cucarachas.
- Objetivo: llegar a la "puerta del metro", al otro extremo de la pantalla.

<img src="./images/Primera%20pantalla.png" alt="Primera pantalla" width="700" >

- Objetivo no conseguido: pierdes y aparece la siguiente pantalla.

Segundo escenario: Interior del metro (batalla con el carterista)

- Objetivo: Vencer al carterista, cruzando el vagón.
- Según los puntos conseguidos anteriormente te encontrarás en un lugar diferente del vagón.

<img src="./images/Segunda%20pantalla.png" alt="Segunda pantalla" width="700" >

- Objetivo no conseguido: pierdes y aparece la siguiente pantalla.

- Objetivo conseguido: pantalla de ganar.

### 3. Lista de tareas

#### Lista de Tareas

- [x] **Configuración Inicial**

  - [x] Crear un nuevo repositorio en GitHub.
  - [x] Configurar la estructura básica del proyecto.
  - [x] Crear el archivo `index.html` y enlazar CSS y JavaScript.

- [ ] **Desarrollo del Juego**

  - [X] **Escenario 1: Andén del metro**

    - [x] Implementar el movimiento del jugador.
    - [X] Lógica para esquivar turistas.
    - [x] Lógica para pisar cucarachas y ganar puntos.
    - [X] Crear la pantalla de derrota.
    - [X] Transición a la pantalla del interior del metro.

  - [X] **Escenario 2: Interior del metro**
    - [X] Lógica para el enfrentamiento con el carterista.
    - [X] Lógica para determinar el éxito o fracaso.
    - [X] Pantalla de derrota.
    - [X] Pantalla de victoria.

- [X] **Estilo y Diseño (CSS)**

  - [x] Crear un archivo CSS para el estilo del juego.
  - [X] Establecer el diseño de los elementos.
  - [X] Establecer el diseño del andén del metro.
  - [X] Establecer el diseño del interior del metro.
  - [X] Estilizar la pantalla de victoria y derrota.

- [ ] **Refactorización**

  - [ ] Revisar el código para mejorar la legibilidad y eficiencia.
  - [ ] Eliminar código redundante.
  - [X] Documentar funciones y métodos.

- [X] **Pruebas y Ajustes**

  - [X] Probar la jugabilidad.
  - [X] Ajustar la dificultad.
  - [X] Ajustar la detección de colisiones.

- [X] **Documentación**
  - [X] Actualizar el `README.md`.
  - [X] Documentar el código.

#### Planificación en Días

| Día    | Tarea                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------- |
| **1**  | **Configuración Inicial**: Crea el repositorio, estructura básica y el `index.html`.                      |
| **2**  | **Escenario 1**: Implementar el movimiento del jugador y la lógica para esquivar turistas.                |
| **3**  | **Escenario 1**: Implementar la lógica para pisar cucarachas y ganar puntos.                              |
| **4**  | **Escenario 1**: Crear la pantalla de derrota y la transición al interior del metro.                      |
| **5**  | **Escenario 2**: Implementar la lógica para el enfrentamiento con el carterista.                          |
| **6**  | **Escenario 2**: Crear la lógica para determinar el éxito o fracaso en la pelea y la pantalla de derrota. |
| **7**  | **Escenario 2**: Implementar la pantalla de victoria.                                                     |
| **8**  | **Estilo y Diseño**: Crear el CSS para el estilo del juego y diseñar los escenarios.                      |
| **9**  | **Refactorización**: Revisar y mejorar el código, eliminando redundancias y documentando.                 |
| **10** | **Pruebas y Ajustes**: Probar la jugabilidad, ajustar dificultades y detección de colisiones.             |
| **11** | **Documentación**: Actualizar el `README.md` y documentar el código.                                      |

## 4. Organización de OOP

A continuación, se detalla una posible organización de las clases, métodos y atributos para el juego "Barcelona Experience":

### 1. Clases

#### 1. **Juego (Game)**

- **Descripción**: Controla el flujo del juego y la lógica general.
- **Atributos**:
  - `estado`: Estado actual del juego (iniciado, terminado).
  - `puntuación`: Puntuación acumulada del jugador.
  - `vidas`: Vida actual (escenario).
- **Métodos**:
  - `updateLives()`: Actualizar vidas
  - `updateScore()`: Actualiza puntuación
  - `changeScreen()`: Cambia la pantalla
  - `changeScreenFinal()`: Cambia a la pantalla final

#### 2. **Lógica (Logic)**

- **Descripción**: Maneja la lógica del juego, incluidas las colisiones y el avance del juego.
- Maneja el gameLoop() del juego

#### 3. **Jugador (Jugador)**

- **Descripción**: Representa al jugador y su estado.
- **Atributos**:
 - `element`: Elemento HTML div que representa el jugador en el DOM.
- `width`: Ancho del elemento element, obtenido mediante getBoundingClientRect().
- `height`: Alto del elemento element, obtenido mediante getBoundingClientRect().
 - `positionBottom`: Posición del jugador desde la parte inferior del juego, inicialmente calculada a partir de la altura de myGame.
- `positionLeft`: Posición del jugador desde la parte izquierda del juego, inicializada a 0.
- `velocity`: Velocidad de movimiento del jugador, inicializada en 4.5.
- `direction`: Dirección de movimiento actual del jugador, inicializada en null.
- `crunchSound`: Sonido de "Crunch" al atacar una cucaracha.
- `excuseMeSound`: Sonido de "Excuse me" al recibir daño de un turista.
- `sagradaFamilia`: Sonido de "Sagrada Familia" al recibir daño.
- `sangria`: Sonido de "Sangría" al recibir daño.
- `counter`: Contador de sonido para alternar entre los sonidos al recibir daño, inicializado en 0.
- **Métodos**:
  - `move(direction)`: Mueve al jugador en la dirección especificada (izquierda, derecha, adelante).
  - `attack()`: Matar las cucarachas y aumenta la puntuación
  - `receiveDamage()`: Detecta las colisiones con los turistas y resta vida.
  - `block(direction)`: Evita que el jugador atraviese ciertos obstáculos en el juego.
  - `appearScoreAdElement(left, bottom)`: Crea un elemento visual temporal que muestra la puntuación obtenida al pisar una cucaracha.

#### 4. **Enemigos (Enemies)**

##### **4.1. Turistas (Tourist)**

- **Descripción**: Representa a los turistas que el jugador debe esquivar.
- **Atributos**: 
 - `element`: Elemento HTML div que representa a cada uno de los turistas del array en el DOM.
- `width`: Ancho del elemento element, obtenido mediante getBoundingClientRect().
- `height`: Alto del elemento element, obtenido mediante getBoundingClientRect().
 - `positionBottom`: Posición del turista desde la parte inferior del juego, inicialmente calculada a partir de la altura de myGame.
- `positionLeft`: Posición del turista desde la parte izquierda del juego, inicializada a 0.
- `velocity`: Velocidad de movimiento del jugador, inicializada en 1.8.
- **Métodos**:
 - `move(direction)`: Mueve al turista de derecha a izquierda.
##### **4.2. Carterista (Pickpocket)**

- **Descripción**: Representa al carterista, el jefe final.
- **Métodos**:
  - `atacar(jugador)`: Realiza un ataque al jugador.

#### 5. **Cucarachas (Cockroach)**

- **Descripción**: Representa a las cucarachas que el jugador puede matar.
- **Atributos**:
  - `posX`, `posY`: Posición de la cucaracha en la pantalla.
  - `puntos`: Puntos que otorga al ser eliminada.
- **Métodos**:
  - `mover()`: Mueve la cucaracha en un patrón específico.
  - `eliminar()`: Elimina la cucaracha y otorga puntos al jugador.

### 2. Interacciones

- **Colisiones**: Se debe implementar una lógica de colisión que verifique si el jugador interactúa con turistas, cucarachas o el carterista. Esto puede ser parte de la clase `Logic` o un método global.
- **Estado del juego**: La clase `Juego` debe manejar la transición entre diferentes estados (por ejemplo, de `escenario 1` a `escenario 2`), así como el final del juego.

5. Empezar a codear

## Recomendaciones

- Usar ChatGPT para planificar y explicar código.
- Usar Trello para organizar las tareas.
- Crear una rama para cada tarea.

### ¡Hay que hacer al menos 2 commits por día!

6. Backlog

- Refactorizas el cógido: creo que tengo código repetido y debería optimizarlo.
- Intentar que las voces de los turistas y la imagen se vincule para que tengan el mismo género.
- En el segundo escenario, incluir obstáculos como personas moviéndose o la barra central de aggaradera para complicar el juego. Lo intenté pero era muy complicado por el momento.
- Solucionar el tema del audio de la pantalla principal o incluir un aviso para que se pulse espacio y suene.
- Actualizar low-fi.
