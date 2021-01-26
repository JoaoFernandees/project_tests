import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { cpfValidator } from 'src/app/utils/validators/cpf.validator';

export class CondutorForm {

  get nomeInput(){
    return this.form.get('nome');
  }

  get cpfInput() {
    return this.form.get('cpf');
  }

  get cnhValidade() {
    return this.form.get('validadeCnh');
  }

  get condutorCpfInput() {
    return this.form.get('cpf');
  }

  get telefoneInput() {
    return this.form.get('telefone');
  }

  get cnhInput() {
    return this.form.get('cnh');
  }

  get sexoMultiselect() {
    return this._form.get('sexoCondutor')
  }

  get form(): FormGroup {
    return this._form;
  }
  private _form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this._form = this.formBuilder.group({
      cpf: [''],
      nome: [''],
      cnh: [''],
      validadeCnh: [''],
      telefone: ['', [Validators.maxLength(14)]],
      sexoCondutor: ['']
    });
  }
}
