import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth = 0;

  constructor() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    // 🤯
    fromEvent(window, 'resize').pipe(
      // nicht "pure", schwer testbar
      // map(() => window.innerWidth)
      debounceTime(2000),
      map(event => (event.target as Window).innerWidth),
      startWith(window.innerWidth),
      map(x => x * -1),
    ).subscribe(width => this.currentWidth = width)

    /******************************/
  }

}
