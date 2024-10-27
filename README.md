# Práctica Versión web de Splitwise


## 💶 Enunciado

En esta práctica, desarrollarás una aplicación web inspirada en **Splitwise**, una plataforma utilizada para repartir gastos entre grupos de personas. El objetivo de esta aplicación es permitir a los usuarios registrar gastos y calcular los saldos individuales, facilitando así la compensación de deudas entre los miembros del grupo.

Durante el desarrollo de la aplicación, trabajarás con **HTML**, **CSS**, **JavaScript** y **manipulación del DOM**.



## 🎯 Objetivos

### 1. Estructura del Proyecto
   - Diseñar una página web funcional y **responsiva** usando **HTML**, **CSS** y **JavaScript**.
   - Aplicar **Bootstrap** o cualquier otro framework CSS para mejorar la presentación.

### 2. Funcionalidades Principales

   
   - **Registro de Gastos:**
     - El sistema debe permitir el registro de gastos, solicitando:
       - Usuario.
       - Título.
       - Importe.
       - La fecha.
   
   - **Cálculo y Visualización de Deudas:**
     - La aplicación debe calcular automáticamente las deudas basándose en los gastos registrados.
     - Los usuarios deben poder visualizar de manera clara cuánto debe cada persona, mostrando el saldo que deben o le deben.

   
### 3. Interacción y Usabilidad
   - Crear una interfaz de usuario **intuitiva** y fácil de usar.
   - Utilizar **JavaScript** para gestionar la lógica de reparto de gastos y mostrar resultados actualizados en tiempo real.
 

## 📄 Requisitos

1. **Formulario a desarrollar:**
- El campo de selección de usuarios será un desplegable que permitirá elegir entre tres usuarios previamente cargados. La opción por defecto de este campo será “---”.
- El campo título
    - Será de tipo texto.
    - Solamente permitirá que se introduzcan letras mayúsculas, letras minúsculas y números. 
    - Su longitud será entre 1 y 20.

- El campo importe 
    - Será de tipo texto. 
    - Solamente admitirá número comprendidos entre 0.00 y 1000.00.
    - Será necesario introducir siempre la parte decimal entera, es decir los dos números.
    - El separador de la parte entera y la parte decimal será un "."

- El campo fecha 
    - Será de tipo texto.
    - Solamente permitirá introducir fechas con el formato dd/mm/yyyy. 
    - No permitirá introducir fechas que no sean válidas.

- En el caso de no introducir ningún valor y pulsar el botón de enviar, se informará al usuario que debe rellenar los campos mediante un alert.

- La validación de los campos del formulario se realizará al pulsar el botón enviar y no en otro momento.

    -  Los campos que no sean correctos se le tiene que aplicar una **clase** que pinte su borde de rojo.

    - Los campos que sean correctos se le tiene que aplicar una **clase** que pinte su borde de verde. 

   - Si el formulario es correcto se creará una nueva entrada en la pestaña resumen y se recalculará la pestaña cuenta. 
   
   - Los campos del formulario deben de quedar limpios de valores y bordes de colores.

2. **Pestaña resumen**
- Cada vez que se registre de forma exitosa un nuevo gasto esto quedará reflejado en la pestaña resumen. Para ello se deberá crear desde JS un nuevo DIV que contendrá los siguientes elementos: 
    - Imagen del usuario en la parte izquierda.
    - Nombre del usuario.
    - Información del gasto con el siguiente formato: Pagó XX.XX€ el dd/mm/yyyy.

- Debe existir un div con las especificaciones del punto anterior por cada nuevo movimiento que se introduzca.

- En el repositorio que se me da como plantilla de partida, en el html, hay un ejemplo que se puede usar para crear el div solicitado.

3. **Pestaña cuentas**
- Esta pestaña tiene que contener un div por cada usuario registrado en la aplicación.
- En el div se mostrará:
    - Imagen del usuario en la parte izquierda.
    - Nombre del usuario.
    - Información del balance del usuario. Para ello se indicará el dinero total que ha pagado y cuanto se le debe o él debe al resto de usuarios.
- Cada vez que se registre de forma exitosa un nuevo gasto se actualizará esta pestaña de manera automática.


## ✅ Puntos a Evaluar:

1. **Formulario (5 puntos):**
   - Validaciones.
   - Aplicación de estilos.
   - Reset del formulario.


   - Claridad, organización y reutilización de código.

2. **Pestaña resumen (1 punto):**
   - Creación desde el DOM.
   - Actualización dinámica y automática.
   - Mostrar correctamente la información solicitada.
   - Diseño responsivo.

3. **Pestaña cuentas (2 puntos):**
   - Correcta implementación de la gestión de las deudas.
   - Creación/actualización desde el DOM.
   - Mostrar correctamente la información solicitada.
   - Diseño responsivo.

4. **Calidad del código (1 punto):**
   - Claridad, organización y reutilización de código.
   - Comentarios.
   - Para optar a este punto es necesario obtener más de un 4 en los puntos 1,2 y 3.

5. **Entrega en tiempo y forma (1 Punto)**
   - Para optar a este punto es necesario obtener más de un 4 en los puntos 1,2 y 3.

