export const addCount = (count: number) => {
    return {
        type: "ADD_COUNT",
        payload: {
            value: count
        }
    }
}