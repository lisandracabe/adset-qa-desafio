// @ts-check
import { test } from '@playwright/test';
import {
  dadoQueEstouNaPaginaDeLogin,
  quandoEuInsiroOEmail,
  quandoEuInsiroASenha,
  quandoEuClicoNoBotao,
  entaoDevoVerOLink,
  entaoDevoVerAMensagem,
} from './loginHelper';

test.describe('Testes de Login', () => {

  test('Dado que estou na página de login, Quando insiro email e senha válidos, Então devo ver o link Sair', async ({ page }) => {
    await dadoQueEstouNaPaginaDeLogin(page);
    await quandoEuInsiroOEmail(page, 'qa@adset.com.br');
    await quandoEuInsiroASenha(page, '9PK6#E8m');
    await quandoEuClicoNoBotao(page, ' Entrar');
    await entaoDevoVerOLink(page, ' Sair');
  });

  test('Dado que estou na página de login, Quando insiro apenas o email, Então devo ver a mensagem para preencher a senha', async ({ page }) => {
    await dadoQueEstouNaPaginaDeLogin(page);
    await quandoEuInsiroOEmail(page, 'qa@adset.com.br');
    await quandoEuClicoNoBotao(page, ' Entrar');
    await entaoDevoVerAMensagem(page, 'Por favor, digite a sua senha.');
  });

  test('Dado que estou na página de login, Quando insiro apenas a senha, Então devo ver a mensagem para preencher o email', async ({ page }) => {
    await dadoQueEstouNaPaginaDeLogin(page);
    await quandoEuInsiroASenha(page, '9PK6#E8m');
    await quandoEuClicoNoBotao(page, ' Entrar');
    await entaoDevoVerAMensagem(page, 'Por favor, digite o seu e-mail.');
  });

  test('Dado que estou na página de login, Quando não insiro email e senha, Então devo ver mensagens para preencher ambos', async ({ page }) => {
    await dadoQueEstouNaPaginaDeLogin(page);
    await quandoEuClicoNoBotao(page, ' Entrar');
    await entaoDevoVerAMensagem(page, 'Por favor, digite o seu e-mail.');
    await entaoDevoVerAMensagem(page, 'Por favor, digite a sua senha.');
  });

});