import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    mostrar = true;
    
    frases: any = {
        mensaje: 'Un gran poder con lleva una gran responsabilidad',
        autor: 'Peter parker'
    }

    personajes: any = ['cap America', 'iron man', 'Spider man'];
}