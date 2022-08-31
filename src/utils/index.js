export const cpfMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
};

export const formatDate = (value) => {
    const day = value.slice(0, 2);
    const month = value.slice(3, 5);
    const year = value.slice(6, 10);
    return year + "-" + month + "-" + day;
};
