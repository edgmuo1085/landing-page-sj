import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ValidatorDirective } from './directivas/validator.directive';

@NgModule({
  declarations: [FiltroPipe, ValidatorDirective],
  imports: [CommonModule],
  exports: [FiltroPipe, ValidatorDirective],
})
export class SharedModulesModule {}
