export default function createReportObject(employeesList) {
  const getNumberOfDepartments = (allEmployees) => Object.keys(allEmployees).length;

  return {
    allEmployees: {
      ...employeesList
    },
    getNumberOfDepartments: () => getNumberOfDepartments(employeesList)
  };
}

