import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

    transform(value: number, ...args: any[]): string {
        if (!value) {
            return '';
        }

        const number = `0${value}`;
        const numberParts = new Array<string>();
        numberParts.push(number.substring(0, 3));
        numberParts.push(number.substring(3));
        return numberParts.join('-');
    }
}
