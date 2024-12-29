export const useGetItems = (colName, options) => {
const { getItems } = useDirectusItems();
return useAsyncData(colName, () =>
        getItems({
            collection: colName,
        }),
        options
    )
}   
