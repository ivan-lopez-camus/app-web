import { Component, OnInit } from '@angular/core';
import { OrdenadoresService, Ordenador } from '../../servicios/ordenadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  ordenadores:Ordenador[]=[];
  constructor(
    private _ordenadoresService:OrdenadoresService,
  ) { }

  ngOnInit(): void {
    this.ordenadores=this._ordenadoresService.getOrdenadores();
  }

}
