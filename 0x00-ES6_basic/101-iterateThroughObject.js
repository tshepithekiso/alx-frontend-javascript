export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employees = [];

  // Iterate through the iterator object
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the array into a string separated by '|'
  return employees.join(' | ');
}

