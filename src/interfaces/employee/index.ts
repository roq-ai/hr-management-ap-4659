import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  employee_status?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_status?: string;
}
