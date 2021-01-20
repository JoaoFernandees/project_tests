import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
    declarations: [CadastroComponent],
    imports: [
        CommonModule,
        PoModule,
        ReactiveFormsModule,
        CadastroRoutingModule
    ]
})
export class CadastroModule { }