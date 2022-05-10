import { withRouter } from "react-router-dom";
import { ActivityList } from "./pages/Activity";
import { Board, BoardList } from "./pages/Boards";
import Components from "./pages/Components/Components";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import EditorV1 from "./pages/Editor/Editor";
import Error from "./pages/Error/Error";
import { AddExam, EditExam, Exam } from "./pages/Exam";
import { Compose, Inbox } from "./pages/Inbox";
import { Notifs } from "./pages/Notifications/Notifs";
import { EditProfile } from "./pages/Profile/EditProfile";
import Profile from "./pages/Profile/Profile";
import { ProfileDetails } from "./pages/Profile/ProfileDetails";
import {
  StudentsList
} from "./pages/Students";
import {
  TeachersList
} from "./pages/Teachers";
import { AddTimeTable, EditTimeTable, TimeTable } from "./pages/TimeTable";

const routes = [
  { path: "dashboard", component: Dashboard, exact: true },
  { path: "student-dashboard", component: StudentDashboard, exact: true },
  { path: "teacher-dashboard", component: TeacherDashboard, exact: true },
  { path: "students", component: withRouter(StudentsList), exact: true },
  { path: "teachers", component: withRouter(TeachersList), exact: true },
  { path: "exam", component: Exam, exact: true },
  { path: "editor", component: EditorV1, exact: true },
  { path: "activity", component: ActivityList, exact: true },
  { path: "notifications", component: Notifs, exact: true },
  { path: "board", component: withRouter(Board), exact: true },
  { path: "boardslist", component: withRouter(BoardList), exact: true },
  { path: "add-exam", component: AddExam, exact: true },
  { path: "edit-exam", component: EditExam, exact: true },
  { path: "time-table", component: TimeTable, exact: true },
  { path: "add-time-table", component: AddTimeTable, exact: true },
  { path: "edit-time-table", component: EditTimeTable, exact: true },
  { path: "profile", component: Profile, exact: true },
  { path: "error", component: Error, exact: true },
  { path: "inbox", component: Inbox, exact: true },
  { path: "compose", component: Compose, exact: true },
  { path: "components", component: Components, exact: true },
  { path: "edit-profile", component: withRouter(EditProfile), exact: true },
  { path: "profile-details", component: withRouter(ProfileDetails), exact: true },
  
];
export default routes;
