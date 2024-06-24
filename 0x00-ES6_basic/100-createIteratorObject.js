export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  const employeesByDepartment = departments.map(department => report.allEmployees[department]).flat();

  let index = 0;

  // Return an iterable object
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          if (index < employeesByDepartment.length) {
            return { value: employeesByDepartment[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

