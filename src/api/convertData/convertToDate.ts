export const convertToDate = (value: number) => {
    return new Date(value).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
}