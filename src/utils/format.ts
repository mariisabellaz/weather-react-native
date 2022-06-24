import moment from 'moment';

export const formatDate = () => {
    const dayOfWeekName = new Date().toLocaleString('default', {
        weekday: 'short',
    });
    const hourDigit = new Date().getHours();
    const minutesDigit = new Date().getMinutes();

    const formattDate = `${dayOfWeekName
        .split('.')
        .join('')}, ${hourDigit}:${minutesDigit}`;
    return formattDate;
};

export const formatDayOfWeek = (day: number) => {
    return moment(day * 1000).format('ddd');
};

export const getDayOrNight = () => {
    const hours = new Date().getHours();
    if (hours > 6 && hours < 20) return 'day';
    return 'night';
};

export const accentRemover = (text: string) => {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
};

export function fix2Digits(num: number) {
    const formatNum = String(num).slice(0, 2);

    return Number(formatNum);
}
