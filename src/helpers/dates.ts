import moment from 'moment';
import ru from 'moment/dist/locale/ru';
moment.updateLocale('ru', ru);

export function formateDate(date: string) {
  return moment(date).format('LL');
} 