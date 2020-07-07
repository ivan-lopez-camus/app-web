import { Component, OnInit } from '@angular/core';
import { OrdenadoresService, Ordenador } from '../../servicios/ordenadores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styles: [
  ]
})
export class OrdenadoresComponent implements OnInit {

  ordenadores:Ordenador[]=[];

  constructor(private _ordenadoresService:OrdenadoresService,
    private router:Router
    ) { }

  ngOnInit(){
  
      this.ordenadores=this._ordenadoresService.getOrdenadores();
  }
 
  verOrdenador(idx:number){
     this.router.navigate(['/ordenador',idx]);

  }

}
