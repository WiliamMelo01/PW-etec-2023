export class Aluno {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
  IMC: number;
  categoria: string;

  constructor(nome: string, idade: number, peso: number, altura: number) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  getImc() {
    this.IMC = this.peso / (this.altura * this.altura);
  }

  getCategoria() {
    if (this.IMC < 18.5) {
      this.categoria = "Baixo peso";
    } else if (this.IMC >= 15.5 && this.IMC <= 24.99) {
      this.categoria = "Peso normal";
    } else if (this.IMC >= 25 && this.IMC <= 29.99) {
      this.categoria = "Sobrepeso";
    } else if (this.IMC >= 30 && this.IMC <= 34.99) {
      this.categoria = "Obesidade Classe I";
    } else if (this.IMC >= 35 && this.IMC <= 39.99) {
      this.categoria = "Obesidade Classe II";
    } else if (this.IMC > 40) {
      this.categoria = "Obesidade Classe III";
    }
  }
}
