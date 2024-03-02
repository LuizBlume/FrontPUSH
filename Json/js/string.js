function upperName(name) {
    return name.toUpperCase();
};
function upperNames(name) {
    return name("teste").toUpperCase();
};
const upper = {
    upperName,
    upperNames
};
export default upper;