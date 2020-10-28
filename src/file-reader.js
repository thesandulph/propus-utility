const read = (file, index) => new Promise(
    (resolve, reject) => {
        const {
            name,
            size,
            type,
            lastModified,
            lastModifiedDate,
        } = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onerror = error => reject(error);
        reader.onload = () => resolve({
            name,
            size,
            type,
            lastModified,
            lastModifiedDate,
            index,
            hash: reader.result,
        });
    }
);

export const fileReader = (files) => {
    const array_files = Object.keys(files).map(key => read(files[key], key));
    return Promise.all(array_files);
};
