export const useGetItemById = (colName, id, options = {}) => {
    const { getItemById } = useDirectusItems();
    return useAsyncData(`id:${id.value}`, () =>
        getItemById({
            collection: colName,
            id: id.value,
        }),
        options
    )
}
