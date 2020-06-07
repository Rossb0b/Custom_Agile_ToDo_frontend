export interface Board {
  _id?: string;
  name: string;
  startDate: Date;
  endDate: Date;
  methodologyId: string;
  sprintDuration: Number;
  actualSprint: Number;
  maxSprintNumber: Number;
  member: [{
    userId: string;
    methodologyRoleId: string;
  }];
  card: string[];
}
