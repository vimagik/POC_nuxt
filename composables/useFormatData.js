export const useFormatData = () => {

    function formatData(dateStr) {
        const date = new Date(dateStr)
        return new Intl.DateTimeFormat("ru-RU").format(date)
    }
    
    return { formatData }
}