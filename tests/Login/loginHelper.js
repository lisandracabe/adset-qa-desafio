// loginHelper.js
import { test, expect } from '@playwright/test';

export async function dadoQueEstouNaPaginaDeLogin(page) {
    await page.goto('https://www.adset.com.br/integrador');
}

export async function quandoEuInsiroOEmail(page, email) {
    await page.getByRole('textbox', { name: 'E-mail: ' }).fill(email);
}

export async function quandoEuInsiroASenha(page, senha) {
    await page.locator('#Senha').fill(senha);
}

export async function quandoEuClicoNoBotao(page, botao) {
    await page.getByRole('button', { name: botao }).click();
}

export async function entaoDevoVerOLink(page, link) {
    await expect(page.getByRole('link', { name: link })).toBeVisible();
}

export async function entaoDevoVerAMensagem(page, mensagem) {
    await expect(page.getByText(mensagem)).toBeVisible();
}