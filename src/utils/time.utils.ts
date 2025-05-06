export const toFormatDate = () => {
  const now = new Date();
  const formattedDate = now
    .toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    .replace(/\//g, '.'); // Заменяем слеши на точки (если нужно)

  return formattedDate;
};

export const toFormatDateForInput = () => {
  const date = new Date(); // или new Date(Date.now())

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 т.к. месяцы 0-11
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  // "2025-03-27"

  return formattedDate;
};

export function formatDateToDMY(isoDate: string) {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}
