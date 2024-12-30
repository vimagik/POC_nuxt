export const useGetUsersById = (userId, options = {}) => {
const { getUserById } = useDirectusUsers();
return useAsyncData(`userId:${userId.value}`, () =>
        getUserById({
            id: userId.value,
        }),
        options
    )
}

