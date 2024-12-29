export const useFormatData = (dateStr) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat("ru-RU").format(date)
}