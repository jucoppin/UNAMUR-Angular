import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTemperature'
})
export class ToTemperaturePipe implements PipeTransform {

  transform(value: string|number, unit: 'c'|'f'): string {
		if (typeof value === 'number') {
			if (unit === 'c') {
				return `${(value - 32) / 1.8} °C`;
			}else {
				return `${value * 1.8 + 32} °F`;
			}
		}else {
			if (unit === 'c') {
				return `${(+value - 32) / 1.8} °C`;
			}else {
				return `${+value * 1.8 + 32} °F`;
			}
		}
  }
}
