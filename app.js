/* 
|| Clase 34

1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/



// 1
const ejercicio1 = new Vue({
    el: '#ejercicio1',
    data: {
        resultado: "",
        cadenaDeTexto: ""
    },
    computed: {
        largoDeCadena () {
            this.resultado = this.cadenaDeTexto.length;
            return this.resultado;
        }
    }
});


//2
const ejercicio2 = new Vue ({
    el: '#ejercicio2',
    data: {
        inputEjercicio2: "",
        valorACortar: 0,
        resultado: ""
    },
    computed: {
        cortarCadena () {
            this.resultado = this.inputEjercicio2.substring(0,this.valorACortar)
            return this.resultado;
        },
        frenarBotonAbajo (){
            if (this.valorACortar <= 0){
                return true;
            }else{
                return false;
            }
        },
        frenarBotonArriba (){
            if (this.valorACortar >= this.inputEjercicio2.length) {
                return true;
            }else {
                return false;
            }
        }
    }
})


//3
const ejercicio3 = new Vue ({
    el: '#ejercicio3',
    data:{
        inputEjercicio3: "",
        separadorEjercicio3: "",
        resultado: ""
    },
    methods:{
        separarCadena (){
            if (this.separadorEjercicio3.length > 1)
            return console.warn("Solo un caracter como separador.");

            this.resultado = this.inputEjercicio3.split(this.separadorEjercicio3);
            return resultado;
        }
    }
})


//4
const ejercicio4 = new Vue ({
    el: '#ejercicio4',
    data: {
        inputEjercicio4: "",
        valorACortar: 0,
        resultado: []
    },
    methods: {
        repetirTexto(){
            if (!this.inputEjercicio4) return console.warn("Ingresa un texto.");
            while(this.resultado.length < this.valorACortar){
                this.resultado.push(this.inputEjercicio4);
            }
            while(this.resultado.length > this.valorACortar){
                this.resultado.pop();
            }
        }
    },
    computed:{
        frenarBotonAbajo (){
            if (this.valorACortar <= 0){
                return true;
            }else{
                return false;
            }
        }
    }
})


/*
|| Clase 35

5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//5

const ejercicio5 = new Vue ({
    el: '#ejercicio5',
    data: {
        mensaje: ""
    },
    methods:{
        invertirPalabra(){
            if (!this.mensaje) return console.warn("No ingresaste el texto");

            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    }
})


//6

const ejercicio6 = new Vue({
    el: '#ejercicio6',
    data: {
        inputEjercicio6: "",
        valorDelInput: "",
        contador: 0
    },
    methods:{
        buscarPalabra(){
            if(!this.inputEjercicio6) return console.warn("No ingresaste el texto");
            if(this.inputEjercicio6 == this.valorDelInput) return console.warn("La palabra ya fue buscada");
            if(this.inputEjercicio6 !== this.valorDelInput) this.contador = 0;

            this.$refs.texto.textContent.split(' ').forEach(element => {
                if (element == this.inputEjercicio6) this.contador++
            });
            this.valorDelInput = this.inputEjercicio6;

            return this.contador;
        },
    },
})


//7
const ejercicio7 = new Vue ({
    el: '#ejercicio7',
    data: {
        inputEjercicio7: "",
        resultado: ""
    },
    methods:{
        evaluarPalindrono(){
            if(!this.inputEjercicio7) return console.warn("Ingrese una palabra");

            return (this.inputEjercicio7.split('').reverse().join('') !== this.inputEjercicio7)
            ? this.resultado = "La palabra no es palindrona"
            : this.resultado = "la palabra es palindrona"
        }
    }
})


//8
const ejercicio8 = new Vue({
    el: '#ejercicio8',
    data: {
        inputEjercicio8: "",
        patron: "",
        resultado: ""
    },
    methods: {
        eliminarPatron(){
            if(!this.inputEjercicio8) return console.warn("Completa el texto");
            if(!this.patron) return console.warn("Completa el patron");

            this.resultado = this.inputEjercicio8.replace(new RegExp(this.patron,"ig"),"");
        }
    }
})


/*
|| Clase 36

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no
    (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un
    entero positivo n, se define como el producto de todos los números enteros
    positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//9
const ejercicio9 = new Vue({
    el: '#ejercicio9',
    data: {
        resultado: "",
    },
    methods: {
        numeroRandom(){
            this.resultado = Math.floor((Math.random() * (600 - 501 + 1)) + 501);
        }
    }
})


// 10
const ejercicio10 = new Vue({
    el: '#ejercicio10',
    data: {
        inputEjercicio10: undefined,
        resultado: ""
    },
    methods:{
        evaluarCapicua(){
            if (!this.inputEjercicio10) return console.warn("Completa todos los campos"); 

            if(this.inputEjercicio10.toString() !== this.inputEjercicio10.toString().split('').reverse().join('')){
                this.resultado = "Este numero NO es capicua";
                inputEjercicio10 = "";
            }else{
                this.resultado = "Este numero es capicua";
                inputEjercicio10 = "";
            }
        }
    }
})


// 11
const ejercicio11= new Vue({
    el: '#ejercicio11',
    data: {
        inputEjercicio11: undefined,
        resultado: 0
    },
    methods: {
        calcularFactorial(){
            if(!this.inputEjercicio11) return console.warn("Completa todos los campos");
            if(this.inputEjercicio11 <= 0) return console.warn("El numero debe ser positivo");

            this.resultado = 1;
            for (let i = 1; i <= this.inputEjercicio11; i++) {
                this.resultado *= i;
            }
        }
    }
})


/*
|| Clase 37

12) Programa una función que determine si un número es primo (aquel que solo es
    divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar,
    pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
    pe. miFuncion(0,"C") devolverá 32°F.
*/


// 12
const ejercicio12 = new Vue({
    el: '#ejercicio12',
    data: {
        inputEjercicio12: undefined,
        esPrimo: false,
        resultado: "",
    },
    methods:{
        calcularPrimo(){
            if(!this.inputEjercicio12) return console.warn("Ingrese un numero.");
            if (this.inputEjercicio12 < 2) return console.warn("introduce un numero mayor o igual a 2");

            for (let i = 2; i < this.inputEjercicio12; i++) {
                if (this.inputEjercicio12 % i === 0){
                    this.esPrimo = true;
                    break;
                }else{
                    this.esPrimo = false;
                    break;
                }
            }
            
            (this.esPrimo === true)
            ? this.resultado = "EL numero es primo"
            : this.resultado = "EL numero NO es primo"
        }
    }
})


// 13
const ejercicio13 = new Vue({
    el: '#ejercicio13',
    data: {
        inputEjercicio14: undefined,
        resultado: ""
    },
    methods: {
        calcularPar() {
            (this.inputEjercicio14 % 2 == 0)
            ? this.resultado = `${this.inputEjercicio14} es un numero par`
            : this.resultado = `${this.inputEjercicio14} es un numero inpar`
        }
    }
})


// 14
const ejercicio14 = new Vue({
    el: '#ejercicio14',
    data: {
        inputEjercicio14: undefined,
        grado: undefined,
        resultado: ""
    },
    methods: {
        convertirAGrados(){
            if (!this.inputEjercicio14|| !this.grado) return console.warn("Completar todos los campos");
            if (this.grado != "C" && this.grado != "F") return console.warn("Opcion incorrecta. Solo se aceptan Celcius (C) o fahrenheit (F)");


            if(this.grado == "C"){
                this.inputEjercicio14 = (this.inputEjercicio14 * 9/5) + 32;
                this.resultado = `El valor es de ${this.inputEjercicio14}° ${this.grado}`;
            }else if(this.grado == "F"){
                this.inputEjercicio14 = (this.inputEjercicio14 - 32) * 5/9;
                this.resultado = `El valor es de ${this.inputEjercicio14}° ${this.grado}`;
            }
            
        }
    }
})


/*
|| Clase 38

15) Programa una función para convertir números de base binaria a decimal y
    viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un
    descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años
    han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
    devolverá 35 años (en 2020).
*/


// 15
const ejercicio15 = new Vue({
    el: '#ejercicio15',
    data: {
        inputEjercicio15: undefined,
        base: undefined,
        resultado: ""
    },
    methods: {
        convertirBinarioDecimal(){
            if (!this.inputEjercicio15 || !this.base) return console.warn("Completa todos los campos");
            if (this.base !== "B" && this.base !== "D") return console.warn("Opcion incorrecta. Solo se aceptan binario (B) o decimal (C)");
        
            
            if (this.base === "B") {
                this.resultado = `El numero ${this.inputEjercicio15} es ${this.inputEjercicio15.toString(2)} en binario.`
            }else if(this.base === "D"){
                this.resultado = `El numero ${this.inputEjercicio15} es ${parseInt(this.inputEjercicio15, 2)} en decimal.`
            }else{
                this.resultado = "El valor ingresado no es valido"
            }
        
        }
    }
})


// 16
const ejercicio16 = new Vue({
    el: '#ejercicio16',
    data: {
        inputEjercicio16: undefined,
        porcentaje: undefined,
        resultado: ""
    },
    methods: {
        calcularPorcentaje(){
            if (!this.inputEjercicio16 || !this.porcentaje) return console.warn("Completa todos los campos");
            if (this.porcentaje < 0) return console.warn("El descuento no puede ser menor a 0%");
            if (this.porcentaje > 100) return console.warn("El descuento no puede ser mayor al 100%");

            let descuento = this.inputEjercicio16 - (this.inputEjercicio16 * this.porcentaje /100);
            this.resultado = `Con el descuento de ${this.porcentaje}% el total es de ${descuento}`
        }
    }
})


// 17
const ejercicio17 = new Vue ({
    el: '#ejercicio17',
    data: {
        inputEjercicio17: undefined,
        fechaIngresada: undefined,
        fechaActual: Date.now(),
        resultado: 0
    },
    methods: {
        calcularAnios(){
            this.fechaIngresada = new Date(this.inputEjercicio17).getFullYear();
            this.resultado = (new Date(this.fechaActual).getFullYear()) - this.fechaIngresada;
        }
    }
})


/*
|| Clase 39

18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/


// 18
const ejercicio18 = new Vue({
    el: '#ejercicio18',
    data:{
        inputEjercicio18: undefined,
        vocales: 0,
        consonantes: 0,
        resultado: undefined
    },
    methods:{
        contarLetras() {
            if (!this.inputEjercicio18) return console.warn("Ingrese un texto.");

            this.inputEjercicio18 = this.inputEjercicio18.toLowerCase();

            for (let letra of this.inputEjercicio18) {
                if(/[aeiouáéíóúäëïöü]/.test(letra)){
                    this.vocales++;
                }

                if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
                    this.consonantes++;
                }
            }

            this.resultado = `El texto tiene ${this.vocales} vocales y ${this.consonantes} consonantes.`
            this.vocales = 0;
            this.consonantes = 0;
            this.inputEjercicio18= "";
        }
    }
})

// 19
const ejercicio19 = new Vue({
    el: '#ejercicio19',
    data:{
        inputEjercicio19: undefined,
        resultado: undefined
    },
    methods: {
        validarNombre(){
            if (!inputEjercicio19) return console.warn("Completa todos los campos");
            

        }
    }
})