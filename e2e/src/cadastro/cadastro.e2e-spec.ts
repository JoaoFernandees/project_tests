import { browser } from 'protractor';
import { CadastroPage } from "./cadastro.po"

describe('cadastro.e2e-spec | Cadastro', () => {

  let page: CadastroPage;

  beforeEach(async () => {
    page = new CadastroPage();
    await page.navigateTo();
  });

  fit('Deve cadastrar um novo condutor', async () => {

    // => Verifica se a URL contida é realmente a URL de cadastro
    expect(await browser.getCurrentUrl()).toContain('cadastro');

    // => Verifica a existência do botão salvar em tela
    expect(await page.botaoSalvar.isPresent()).toBeTruthy();

    // => Seta valor no input de nome do condutor
    await page.inputNomeCondutor.sendKeys('João Fernandes');

    // => Seta valor no input de CPF do condutor
    await page.inputCpfCondutor.sendKeys('11111111111');
    
    // => Seta valor no input de CNH do condutor
    await page.inputCnhCondutor.sendKeys('11111111111');

    // => Seta valor no input de telefone do condutor
    await page.inputTelefoneCondutor.sendKeys('1234567890123');
  })
})