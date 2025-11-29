const PersonagemBase =
{
  Saiyajin: { Vida: 30, Dano: 25, imagem: "" },
  Cerealjin: { Vida: 20, Dano: 50, imagem: "" },
  SuperSaiyajin: { Vida: 35, Dano: 35, imagem: "" },
}

class Personagem {
  constructor(nome, vida, dano, imagem) {
    this.nome = nome;
    this.tipo = tipo;
    this.vida = vida;
    this.dano = dano;
    this.imagem = imagem;
  }
  evoluir(atributos, pontos) {
    this[atributos] += pontos;
  }
}