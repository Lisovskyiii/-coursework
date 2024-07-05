import { Student } from './StudentType';

export type Report = {
  id: number;
  group: string;
  subject: string;
  classes: string;
  place: string;
  time: string;
  date: string;
  thumbnail: string;
  students: Student[];
};

export type ReportCard = Omit<Report, 'id' | 'students'>;
