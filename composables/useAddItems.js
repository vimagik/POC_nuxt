export const useAddItems = (colName, data, options = {}) => {
    const { createItems } = useDirectusItems();
    const items = [];

    if (data.value instanceof Array) {
        items = data.value;
    } else {
        items.push(data.value);
    }

    return useAsyncData(
        colName,
        () =>
            createItems({
                collection: colName,
                items,
            }),
        options
    );
};
