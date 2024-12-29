export const useAddItems = (colName, data, options = {}) => {
    const { createItems } = useDirectusItems();
    const items = [];

    if (data instanceof Array) {
        items = data;
    } else {
        items.push(data);
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
