import {
  describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento de lançamento',
    descricao: 'Evento para lançamento do livro',
    data: '2022-10-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });

  it('Deve retornar um array de eventos', async () => {
    const eventos = await Evento.pegarEventos();

    expect(eventos).toEqual(
      expect.arrayContaining([
        expect.objectContaining(objetoEvento),
      ]),
    );
  });
});
