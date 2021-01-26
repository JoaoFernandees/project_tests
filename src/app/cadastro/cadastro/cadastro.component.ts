import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoMultiselectOption, PoPageAction } from '@po-ui/ng-components';
import { CondutorForm } from '../condutor-form/condutor.form';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: CondutorForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = new CondutorForm(this.formBuilder);
  }

  get acoesPagina(): Array<PoPageAction> {
    return [
      {
        label: 'Salvar',
        action: this.salvar.bind(this)
      }
    ];
  }

  optionsMultiselect: Array<PoMultiselectOption> = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' }
  ];

  ngOnInit(): void {
  }

  salvar() {
    alert('Salvo!');
  }
}
