/* eslint-disable camelcase */

class Evento {
  constructor({
    id, nome, descricao, data, autor_id, created_at, updated_at,
  }) {
    this.id = null || id;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return [{
      id: 1,
      nome: 'Evento de lançamento',
      descricao: 'Evento para lançamento do livro',
      data: '2022-10-01',
      autor_id: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }];
  }
}

export default Evento;
