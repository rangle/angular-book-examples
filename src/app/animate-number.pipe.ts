import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Pipe({
  name: 'animateNumber',
  pure: false,
})
export class AnimateNumberPipe implements PipeTransform {
  private currentNumber: number = null;
  private targetNumber: number = null;

  transform(targetNumber: number): number {
    if (targetNumber !== this.targetNumber) {
      this.currentNumber = this.targetNumber || targetNumber;
      this.targetNumber = targetNumber;

      const difference = this.targetNumber - this.currentNumber;

      interval(100)
        .pipe(take(difference))
        .subscribe(() => {
          this.currentNumber++;
        });
    }
    return this.currentNumber;
  }
}
