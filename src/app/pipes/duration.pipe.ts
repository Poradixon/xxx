import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours: number | string = Math.floor(value / 3600);
    value = value - (hours * 3600);
    let minutes: number | string = Math.floor(value / 60);
    let seconds: number | string = value - (minutes * 60);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }
}
