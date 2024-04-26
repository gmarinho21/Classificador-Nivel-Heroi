const nome = "Code Conqueror";
const experiencia = 21540;
let nivel = "";

if (experiencia >= 10001) {
  nivel = "Radiante";
} else if (experiencia >= 9001) {
  nivel = "Imortal";
} else if (experiencia >= 8001) {
  nivel = "Ascendente";
} else if (experiencia >= 7001) {
  nivel = "Platina";
} else if (experiencia >= 5001) {
  nivel = "Ouro";
} else if (experiencia >= 2001) {
  nivel = "Prata";
} else if (experiencia >= 1001) {
  nivel = "Bronze";
} else if (experiencia <= 1000) {
  nivel = "Ferro";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
