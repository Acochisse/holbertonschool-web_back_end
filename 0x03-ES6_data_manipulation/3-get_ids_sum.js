export default function getStudentIdsSum(students) {
    if (Object.getPrototypeOf(students) === Array.prototype) {
      const ids = students.map((items) => items.id);
      const reducer = (accumlator, currentValue) => accumlator + currentValue;
      return ids.reduce(reducer);
    }
    return [];
}