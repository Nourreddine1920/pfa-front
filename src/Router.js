import { withRouter } from "react-router-dom";
import { ActivityItem, ActivityList } from "./pages/Activity";
import BlankPage from "./pages/BlankPage/BlankPage";
import { Board, BoardList } from "./pages/Boards";
import Components from "./pages/Components/Components";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import EditorV1 from "./pages/Editor/Editor";
import { AddExam, EditExam, Exam } from "./pages/Exam";
import {
  FormBasicInput,
  FormHorizontal,
  FormInputGroups,
  FormMask,
  FormValidation,
  FormVertical,
} from "./pages/Forms";
import { Compose, Inbox } from "./pages/Inbox";
import { Notifs } from "./pages/Notifications/Notifs";
import Profile from "./pages/Profile/Profile";
import {
  AddStudent,
  EditStudent,
  StudentDetails,
  StudentsList,
} from "./pages/Students";
import { DataTables, TablesBasic } from "./pages/Tables";
import {
  AddTeacher,
  EditTeacher,
  TeacherDetails,
  TeachersList,
} from "./pages/Teachers";
import { AddTimeTable, EditTimeTable, TimeTable } from "./pages/TimeTable";
import { Terminal } from "./_components/_terminal/Terminal";

const routes = [
  { path: "dashboard", component: Dashboard, exact: true },
  { path: "student-dashboard", component: StudentDashboard, exact: true },
  { path: "teacher-dashboard", component: TeacherDashboard, exact: true },
  { path: "students", component: withRouter(StudentsList), exact: true },
  // { path: "add-student", component: AddStudent, exact: true },
  { path: "edit-student", component: withRouter(EditStudent), exact: true },
  {
    path: "student-details",
    component: withRouter(StudentDetails),
    exact: true,
  },
  { path: "teachers", component: withRouter(TeachersList), exact: true },
  // { path: "add-teacher", component: AddTeacher, exact: true },
  { path: "edit-teacher", component: EditTeacher, exact: true },
  { path: "teacher-details", component:withRouter(TeacherDetails) , exact: true },
  { path: "exam", component: Exam, exact: true },
  { path: "editor", component: EditorV1, exact: true },
  { path: "activity", component: ActivityList, exact: true },
  { path: "activityitem", component: ActivityItem, exact: true },
  { path: "notifications", component: Notifs, exact: true },
  { path: "board", component: withRouter(Board), exact: true },
  { path: "boardslist", component: withRouter(BoardList), exact: true },
  { path: "add-exam", component: AddExam, exact: true },
  { path: "edit-exam", component: EditExam, exact: true },
  { path: "time-table", component: TimeTable, exact: true },
  { path: "add-time-table", component: AddTimeTable, exact: true },
  { path: "edit-time-table", component: EditTimeTable, exact: true },
  { path: "profile", component: Profile, exact: true },
  { path: "inbox", component: Inbox, exact: true },
  { path: "compose", component: Compose, exact: true },
  { path: "components", component: Components, exact: true },
  { path: "blank-page", component: BlankPage, exact: true },
  { path: "form-basic-inputs", component: FormBasicInput, exact: true },
  { path: "form-horizontal", component: FormHorizontal, exact: true },
  { path: "form-input-groups", component: FormInputGroups, exact: true },
  { path: "form-mask", component: FormMask, exact: true },
  { path: "form-validation", component: FormValidation, exact: true },
  { path: "form-vertical", component: FormVertical, exact: true },
  { path: "tables-basic", component: TablesBasic, exact: true },
  { path: "data-tables", component: DataTables, exact: true },
  { path: "ter", component: Terminal, exact: true },
];
export default routes;
