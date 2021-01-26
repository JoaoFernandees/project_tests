import { $, $$, browser, ElementFinder } from 'protractor';

export class CadastroPage {

  get botaoSalvar(): ElementFinder {
    return $('po-button[ng-reflect-label="Salvar"]');
  }

  get inputNomeCondutor(): ElementFinder {
    return $('#nomeCondutor input');
  }

  get inputCpfCondutor(): ElementFinder {
    return $('#cpfCondutor input');
  }

  get inputCnhCondutor(): ElementFinder {
    return $('#cnhCondutor input');
  }

  get inputTelefoneCondutor(): ElementFinder {
    return $('#telefoneCondutor input');
  }

  get multiselectSexoCondutor(): ElementFinder {
    return $('po-multiselect[name="sexoCondutor"] .po-clickable');
  }

  get multiselectSexoCondutorValueMasculino(): ElementFinder {
    return $$('.po-multiselect-items-container .po-multiselect-item').get(0);
  }

  get multiselectSexoCondutorValueFeminino(): ElementFinder {
    return $$('.po-multiselect-items-container .po-multiselect-item').get(1);
  }

  navigateTo() {
    return browser.get(`${browser.baseUrl}cadastro`) as Promise<any>;
  }
}