import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Observable + Subscriber
    // const myObservable$ = of('🤯', '🤪', '😎');
    const myObservable$ = new Observable<string>(subscriber => {

      subscriber.next('🤯');
      subscriber.next('🤩');
      // subscriber.error('ERROR 😡');

      subscriber.next('😡');

      const x = setTimeout(() => { subscriber.next('SPÄTER!'); console.log('ZOMBIE CODE! 🧟‍♂️🧟‍♀️') }, 2000);
      const y = setTimeout(() => subscriber.complete(), 3000);

      return () => {
        console.log('jemand hat unsubscribed');
        clearTimeout(x);
        clearTimeout(y);
      }
    });

    // Observer
    const observer = {
      next: (smilie: string) => this.log(smilie),
      error: (err: any) => this.log(err),
      complete: () => this.log('✅ Complete!')
    }

    // Subscription
    const subscription = myObservable$.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1500);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
