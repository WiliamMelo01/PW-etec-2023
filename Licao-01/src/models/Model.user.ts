export class Aluno {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
  IMC: number;

  constructor(nome: string, idade: number, peso: number, altura: number) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  getImc() {
    this.IMC = this.peso / (this.altura * this.altura);
  }
}
