import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
vetor = [
  1,2,3,4,5
]

heros = [ "Homem-de-Ferro", "Viuva-Negra", "Homem-Formiga", "Pantera-Negra"
  
]
hero: Hero = {
  id:1,
  nome: "Viuva-Negra"
}
}
