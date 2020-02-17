/* eslint-disable func-names */
// TODO: write your code here
export default function findBy(prop, value) {
    return function (el) {
        return el[prop] === value;
    };
}
