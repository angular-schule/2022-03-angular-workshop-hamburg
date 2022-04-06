import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, take, map, tap } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent  {

  interval$ = timer(0, 1000).pipe(
    map(x => x * 10),
    tap(console.log)
  );

}
