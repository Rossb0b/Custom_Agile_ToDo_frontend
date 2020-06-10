export interface Organization {
  _id?: string;
  name: string;
  member: [{
    userId: string;
    organisationRoleId: string;
  }];
  methodology: [{
    methodologyId: string;
  }];
  board: [{
    boardId: string;
  }];
}
