import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string): any {
    const today = new Date();
    const date = new Date(value);

    const diffYears = today.getFullYear() - date.getFullYear();
    const diffMonths = today.getMonth() - date.getMonth();
    const diffDays = today.getDay() - date.getDay();
    const diffHours = today.getHours() - date.getHours();
    const diffMinutes = today.getMinutes() - date.getMinutes();

    if (diffYears > 0) {
      return `${diffYears} month${diffYears > 1 ? 's' : ''} ago`;
    }

    if (diffMonths > 0) {
      return `${diffMonths} year${diffMonths > 1 ? 's' : ''} ago`;
    }

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }

    if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }

    if (diffMinutes > 0) {
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    }

    return 'just now';
  }
}
