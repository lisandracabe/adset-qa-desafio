// helpers.js

import { test, expect } from '@playwright/test';

export async function dadoQueUsuarioEstaLogado(page) {
    await page.goto('https://www.adset.com.br/integrador');
    await page.getByRole('textbox', { name: 'E-mail: ' }).fill('qa@adset.com.br');
    await page.locator('#Senha').fill('9PK6#E8m');
    await page.getByRole('button', { name: ' Entrar' }).click();
}

export async function quandoUsuarioAdicionaUmVeiculo(page) {
    // Navegar para a página de veículos
    await page.click('a[href="/Integrador/Veiculo"]');
    await page.getByRole('link', { name: ' Incluir' }).click();

    // Preencher dados do veículo
    await page.locator('.select2-choice').first().click();
    await page.locator('div').filter({ hasText: /^AUDI$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.locator('div:nth-child(2) > .row-fluid > .select2-container > .select2-choice').first().click();
    await page.locator('div').filter({ hasText: /^100$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.locator('div:nth-child(3) > .row-fluid > .select2-container > .select2-choice').first().click();
    await page.locator('div').filter({ hasText: /^1995$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Selecione' }).first().click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^2\.2 S-4 AVANT TURBO GASOLINA 4P MANUAL$/ }).first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Selecione' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Amarelo$/ }).first().click();

    await page.getByRole('textbox', { name: 'Placa *' }).fill('LIS-1234');
    await page.getByRole('textbox', { name: '0,00' }).fill('1234');
    await page.getByRole('button', { name: ' Confirmar' }).click();
    await page.waitForTimeout(1000);
}

export async function entaoUsuarioDeveEncontrarVeiculo(page, placa) {
    await page.locator('#Filtro_PlacaChassi').fill(placa);
    await page.locator('#buscar').click();
}

export async function entaoUsuarioValidaDadosDoVeiculo(page, textoEsperado) {
    await expect(page.getByText(textoEsperado).first()).toBeVisible();
}

export async function entaoUsuarioDeletaVeiculo(page) {
    await page.locator('input[name="ExcluirVeiculo"]').click();
}