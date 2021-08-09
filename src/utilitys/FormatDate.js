export function FormatDatePreview(date = '0001-01-01') {
    const newDate = new Date(Date.parse(date));
    const weekday = newDate.toLocaleString('ru', {weekday: 'short'});
    const day = newDate.toLocaleString('ru', {day: 'numeric'});
    const month = newDate.toLocaleString('ru', {month: 'short'}).slice(0, -1);

    return `${weekday} ${day} ${month}`
}

export function FormatDateModal(date = '0001-01-01') {
    const newDate = new Date(Date.parse(date));
    const dayMount = newDate.toLocaleString('ru', {day: 'numeric', month: 'long'});
    const year = newDate.toLocaleString('ru', {year: 'numeric'}) + ' года';

    return `${dayMount} ${year}`
}
