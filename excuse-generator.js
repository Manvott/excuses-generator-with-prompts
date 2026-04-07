const who = [
  "Mi gato",
  "El WiFi",
  "Mi vecino",
  "El compilador",
  "Mi despertador",
];
const action = [
  "destruyó",
  "bloqueó",
  "interrumpió",
  "confundió",
  "borró",
];
const what = [
  "mi tarea",
  "mi concentración",
  "el archivo importante",
  "mi plan del día",
  "la presentación",
];
const when = [
  "esta mañana",
  "ayer por la noche",
  "justo antes de entregarlo",
  "hace cinco minutos",
  "hoy temprano",
];
const randomWho    = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat   = what[Math.floor(Math.random() * what.length)];
const randomWhen   = when[Math.floor(Math.random() * when.length)];
const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";
console.log(excuse);