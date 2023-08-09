import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'introducao';

  nome = 'oaoaaoaoaoaoaoao';
  vetor = ['banana', 'maça', 'pera', 'uva'];

  data: any;
  ngOnInit() {
    fetch('assets/dados.json')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados);

        this.data = dados.nomes;
      });
  }
}
