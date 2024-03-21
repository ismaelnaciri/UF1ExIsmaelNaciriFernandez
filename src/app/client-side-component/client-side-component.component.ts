import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-client-side-component',
  templateUrl: './client-side-component.component.html',
  styleUrls: ['./client-side-component.component.css']
})
export class ClientSideComponentComponent {

  constructor(private  http: HttpClient) {
    this.ex1_get();
  }

  ex1_get() {
    this.http.get<any>("http://localhost:3030/llegirImatgesNaciriFernandez").subscribe();
  }

  ex2_get() {
    this.http.get<any>("http://localhost:3030/mostraNomsNaciriFernandez", {
      params: {
        path : "C:\\IdeaProjects\\2nDAM\\AAD Recuperacio\\UF1\\UF1ExIsmaelNaciriFernandez\\src\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez"
      }
    }).subscribe();
  }

  ex3_put() {
    this.http.put<any>("http://localhost:3030/writeBuffersNaciriFernandez", {}).subscribe();
  }

  ex4_post() {
    this.http.post<any>("http://localhost:3030/copiaFitxerNaciriFernandez", {}).subscribe();
  }
}
