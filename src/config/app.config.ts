interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View teacheronteacheron_ki',
    'View new_table',
    'View employee',
    'View schedule',
    'Manage own user data',
    'View team',
  ],
  ownerAbilities: [
    'Manage teacheronteacheron_ki',
    'Manage new_table',
    'Manage employee',
    'Manage schedule',
    'Manage user',
    'Manage team',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/aeec7f9d-a48e-4eaf-b0fc-56c610df5346',
};
