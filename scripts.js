// Construir un arreglo con mínimo 2 objetos
const lenguajesProgramacion = [
	{
		nombre: "Python",
		caracteristicas: {
			paradigmas: ["Imperativo", "Orientado a objetos", "Funcional"],
			popularidad: "Alta",
			anioIntroduccion: 1991,
		},
	},
	{
		nombre: "JavaScript",
		caracteristicas: {
			paradigmas: ["Imperativo", "Funcional"],
			popularidad: "Muy alta",
			anioIntroduccion: 1995,
		},
	},
];

// Usar mínimo 3 métodos de arreglos sobre el array
// 1. Agregar un nuevo lenguaje al arreglo
lenguajesProgramacion.push({
	nombre: "Java",
	caracteristicas: {
		paradigmas: ["Orientado a objetos", "Estructurado"],
		popularidad: "Alta",
		anioIntroduccion: 1995,
	},
});

// 2. Filtrar lenguajes de programación populares
const lenguajesPopulares = lenguajesProgramacion.filter(
	lenguaje => lenguaje.caracteristicas.popularidad === "Muy alta"
);

// 3. Obtener un arreglo con los años de introducción de los lenguajes
const aniosIntroduccion = lenguajesProgramacion.map(
	lenguaje => lenguaje.caracteristicas.anioIntroduccion
);

console.log(lenguajesProgramacion);
console.log(lenguajesPopulares);
console.log(aniosIntroduccion);
