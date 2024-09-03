let m = new Map();
m.set("Jorge", { peso: 72, idade: 53 });
m.set("Anna", { peso: 50, idade: 22 });
m.set("Caio", { peso: 100, idade: 21 });
m.set("Marcos", { peso: 142, idade: 32 });
m.set("Joao", { peso: 72, idade: 53 });
m.set("Carlos", { peso: 72, idade: 53 });
m.set("Rachel", { peso: 72, idade: 53 });
m.set(10101, { peso: 72, idade: 53 });

console.log(m);

// Retorna o objeto contendo as chaves
for (let k of m.keys()) {
  console.log(k);
}

// Retorna um dicionario contendo os valores
for (let v of m.values()) {
  console.log(v);
}

// Retorna uma lista
for (let e of m.entries()) {
  console.log(e);
}
