export class Curriculo {
  // Construtor com declaração direta de propriedades
  constructor(
    public nome: string,
    public contato: string,
    public email: string,
    public complemento: string,
    public renda: number
  ) {}

  // Converte o objeto para um formato genérico (por exemplo, para APIs)
  toObject(): { [chave: string]: any } {
    return {
      nome: this.nome,
      contato: this.contato,
      email: this.email,
      complemento: this.complemento,
      renda: this.renda,
    };
  }

  // Cria uma instância da classe a partir de um objeto genérico
  static criarDeObjeto(dados: any): Curriculo {
    return new Curriculo(
      dados.nome,
      dados.contato,
      dados.email,
      dados.complemento,
      dados.renda
    );
  }
}
