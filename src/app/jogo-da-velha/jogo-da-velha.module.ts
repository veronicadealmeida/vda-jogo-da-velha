import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';

@NgModule({
  providers: [JogoDaVelhaService],
  declarations: [JogoDaVelhaComponent],
  imports: [CommonModule],
  exports: [JogoDaVelhaComponent],
})
export class JogoDaVelhaModule {}
