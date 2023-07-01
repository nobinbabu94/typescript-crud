export interface EmployeeDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmployee: EmployeeDetails[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: 'Nobin',
    lastName: 'Babu',
    email: 'nobin@gmail.com',
  },
];

export enum pageEmum {
  list,add
}
