import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'manual',
    standalone: true
})

export class ManualPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value + 'Printed on Pipe'
    }
}