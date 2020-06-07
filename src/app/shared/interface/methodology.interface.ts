export interface Methodology {
  _id?: string;
  name: string;
  category: [{
    name: string;
    categoryRuleId: string;
  }];
  role: [{
    name: string;
    boardPrerogativeId: string[];
  }];
  labelId: string[];
}
