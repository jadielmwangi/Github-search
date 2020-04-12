// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateCount'
// })
// export class DateCountPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'onDate',
    pure: true
})
export class  DateCountPipe  implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 59)
                return 'Just now';
            const timeinterval = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let count;
            for (const j in timeinterval) {
                count = Math.floor(seconds / timeinterval[j]);
                if (count > 0)
                    if (count === 1) {
                        return count + ' ' + j + ' ago';
                    } else {
                        return count + ' ' + j + 's ago';
                    }
            }
        }
        return value;
    }

}
