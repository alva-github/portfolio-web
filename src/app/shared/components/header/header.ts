
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  // Indica si el menú móvil está abierto
  menuOpen = signal(false);

  // Abre o cierra el menú
  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  // Cierra el menú al seleccionar una página
  closeMenu(): void {
    this.menuOpen.set(false);
  }

}
