import { Component } from '@angular/core';
import { MapaUbicacionComponent } from './mapa-ubicacion/mapa-ubicacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapaUbicacionComponent], // ✅ Asegurar que se importa correctamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kera_naidi_ui';
}
