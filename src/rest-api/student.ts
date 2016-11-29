import { Student } from '../model/student'
import { StudentSummary } from '../model/studentSummary'
import { studentMockData } from './studentMockData'

class StudentApi {
  studentList : Student[];

  constructor() {
    this.studentList = studentMockData;
  }

  setMockDataSeed(studentList : Student[]) {
    this.studentList = studentList;
  }

  getSummaryStudentList() : Promise<StudentSummary[]> {
    const studentSummaryList : StudentSummary[] = this.studentList.map((student) => {
      const summary = new StudentSummary();
      summary.id = student.id;
      summary.fullname = student.fullname;
      summary.email = student.email;

      return summary;
    });

    return Promise.resolve(studentSummaryList);
  }
}

export const studentApi = new StudentApi();
