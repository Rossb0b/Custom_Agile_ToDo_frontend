export interface Card {
  _id?: string;
  name: string;
  description: string;
  deadline: Date;
  value: Number;
  comment: [{
    content: string;
    userId: string;
  }];
  worker: string[];
  label: string[];
}
