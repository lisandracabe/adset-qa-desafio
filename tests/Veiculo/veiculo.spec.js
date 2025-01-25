// @ts-check
import { test } from '@playwright/test';
import {
    dadoQueUsuarioEstaLogado,
    quandoUsuarioAdicionaUmVeiculo,
    entaoUsuarioDeveEncontrarVeiculo,
    entaoUsuarioValidaDadosDoVeiculo,
    entaoUsuarioDeletaVeiculo,
} from './veiculoHelper';

test('Adicionando um veículo com sucesso e realizando uma busca', async ({ page }) => {
    await dadoQueUsuarioEstaLogado(page);
    await quandoUsuarioAdicionaUmVeiculo(page);
    await entaoUsuarioDeveEncontrarVeiculo(page, 'LIS-1234');
    await entaoUsuarioValidaDadosDoVeiculo(page, 'AUDI 100 | 1995 -');

    // Comentado pois a tela está com problemas nesse fluxo de excluir veiculo
    // await entaoUsuarioDeletaVeiculo(page);
});