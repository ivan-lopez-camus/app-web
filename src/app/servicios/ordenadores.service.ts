import {Injectable} from '@angular/core';

@Injectable()
export class OrdenadoresService{

    private ordenadores:Ordenador[] = [
        {
          nombre: "Laptop Lenovo ThinkPad 11E",
          info: "Memoria RAM:  4 GB  / Disco sólido SSD 128GB ",
          img: "assets/img/l1.png",
          pantalla: "Pantalla LED 11.6 HD ( 1366x768 )",
          datos:"WiFI, Bluetooth, Windows 8.1 Pro ó Windows 10 Pro",
          precio: "S/. 1,099.00"
        },
        {
            nombre: "Microsoft Surface 3, Intel Atom® X7-Z8700 1.6GHz",
            info: "4 GB RAM / Almacenamiento SSD 128 GB ",
            img: "assets/img/l2.png",
            pantalla: "Pantalla 10.8 Full HD Plus (1920x1080) relacion 3:2 Táctil",
            datos:"Dos cámaras HD (Frontal 8 MP, Detras 3.5 MP )",
            precio: "S/. 1,599.00"

          },
          {
            nombre: "Convertible HP ProBook x360 11 G3 EE, Intel Celeron DC N4000 1.1GHz",
            info: "RAM : 4 GB DDR3L  /  Disco Sólido SSD 64GB ",
            img: "assets/img/l3.png",
            pantalla: "Pantalla 11.6  LCD HD (1366x768) Táctil ",
            datos:"Wi-FI, Bluetooth 4.2, HDMI, USB Tipo C",
            precio: "S/. 1,699.00"
          },
          {
            nombre: "Convertible Toshiba Satellite W35DT-ASP4302L, AMD Dual Core A4-1200 1.0GHz",
            info: "4GB RAM / Disco Duro 500GB ",
            img: "assets/img/l4.png",
            pantalla: "Pantalla LED 13.3 HD Touchscreen desmontable",
            datos:"Bluetooth 4.0, Wi-FI",
            precio: "S/. 1,899.00"
          },
          {
            nombre: "Laptop HP ProBook 645 G3, AMD PRO A10-8730B 2.4GHz",
            info: "RAM : 8 GB DDR4 / Disco Duro 500GB 7200 rpm ",
            img: "assets/img/l5.png",
            pantalla: "Pantalla LED 14 HD anti-reflejo (1366x768)",
            datos:"DVD, Teclado iluminado, Wi-FI, Bluetooth, Display Port, USB Tipo C",
            precio: "S/. 2,599.00"
          },
          {
            nombre: "Convertible desmontable Dell Latitude 7275, Intel Core M7-6Y75 1.2GHz ",
            info: "Memoria RAM 8 GB  / Disco: Sólido SSD 128GB",
            img: "assets/img/l6.png",
            pantalla: "Pantalla LED 12.5'' Full HD (1920x1080) Táctil, Corning® Gorilla® Glass NBT ",
            datos:"Wi-FI, Bluetooth, Equipado con MaxxAudio® Pro by Waves, USB type-C / Thunderbolt 3",
            precio: "S/. 2,599.00"
          },
          {
            nombre: "Convertible desmontable Dell Latitude 7275, Intel Core M7-6Y75 1.2GHz",
            info: "Memoria RAM 8 GB  / Disco: Sólido SSD 256GB ",
            img: "assets/img/l7.png",
            pantalla: "Pantalla LED 12.5 Full HD (1920x1080) Táctil, Corning® Gorilla® Glass NBT ",
            datos:"Wi-FI, Bluetooth, Equipado con MaxxAudio® Pro by Waves, USB type-C / Thunderbolt 3",
            precio: "S/. 2,799.00"
          },
          {
            nombre: "Laptop Dell Inspiron 15 5584 Core i5-8265U 1.6GHz",
            info: "RAM : 8 GB DDR4 / Disco Duro 2 TB  ",
            img: "assets/img/l8.png",
            pantalla: "Pantalla LED 15,6 Full HD (1920x1080)",
            datos:"Teclado iluminado, Bluetooth, WI-FI, USB Tipo C",
            precio: "S/. 2,799.00"
          },
       
      ];
    
    constructor(){}

    getOrdenadores(){
        return this.ordenadores;
    }
    getOrdenador(idx:string){
        return this.ordenadores[idx];
    }
}

export interface Ordenador{
    nombre: string;
    info: string;
    img: string;
    pantalla: string;
    datos: string;
    precio: string;
}