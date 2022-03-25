import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ActivityItem, ActivityList } from "./pages/Activity";
import BlankPage from "./pages/BlankPage/BlankPage";
import { Board, BoardList } from "./pages/Boards";
import Components from "./pages/Components/Components";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import Demo from "./pages/Demo/Demo";
import EditorV1 from "./pages/Editor/Editor";
import EditorV2 from "./pages/Editor/Editor1";
import Error from "./pages/Error/Error";
import { AddExam, EditExam, Exam } from "./pages/Exam";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import {
  FormBasicInput,
  FormHorizontal,
  FormInputGroups,
  FormMask,
  FormValidation,
  FormVertical,
} from "./pages/Forms";
import { Compose, Inbox } from "./pages/Inbox";
import Login from "./pages/Login/Login";
import { Notifs } from "./pages/Notifications/Notifs";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
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
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Sidebar from "./_components/sidebar/Sidebar";

// CSS Files

class RouterComponent extends React.Component {
  render() {
    return (
      <Router basename={"/"}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/error" component={Error} />
        </Switch>

        <div className="main-wrapper">
          <Route render={(props) => <Sidebar {...props} />} />
          <div>
            <Route render={(props) => <Header {...props} />} />
            <div className="page-wrapper">
              <div className="content container-fluid">
                <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route
                    path="/student-dashboard"
                    component={StudentDashboard}
                  />
                  <Route
                    path="/teacher-dashboard"
                    component={TeacherDashboard}
                  />
                  <Route path="/students" component={StudentsList} />
                  <Route path="/add-student" component={AddStudent} />
                  <Route path="/edit-student" component={EditStudent} />
                  <Route path="/student-details" component={StudentDetails} />
                  <Route path="/teachers" component={TeachersList} />
                  <Route path="/add-teacher" component={AddTeacher} />
                  <Route path="/edit-teacher" component={EditTeacher} />
                  <Route path="/teacher-details" component={TeacherDetails} />
                  <Route path="/exam" component={Exam} />
                  <Route path="/editor" component={EditorV1} />
                  {/* <Route path="/editor" component={EditorV2} /> */}
                  <Route path="/activity" component={ActivityList} />
                  <Route path="/activityitem" component={ActivityItem} />
                  <Route path="/boardslist" component={BoardList} />
                  <Route path="/notifications" component={Notifs} />
                  <Route path="/board" component={Board} />
                  <Route path="/add-exam" component={AddExam} />
                  <Route path="/edit-exam" component={EditExam} />
                  <Route path="/time-table" component={TimeTable} />
                  <Route path="/add-time-table" component={AddTimeTable} />
                  <Route path="/edit-time-table" component={EditTimeTable} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/inbox" component={Inbox} />
                  <Route path="/compose" component={Compose} />
                  <Route path="/components" component={Components} />
                  <Route path="/blank-page" component={BlankPage} />
                  <Route path="/form-basic-inputs" component={FormBasicInput} />
                  <Route path="/form-horizontal" component={FormHorizontal} />
                  <Route
                    path="/form-input-groups"
                    component={FormInputGroups}
                  />
                  <Route path="/form-mask" component={FormMask} />
                  <Route path="/form-validation" component={FormValidation} />
                  <Route path="/form-vertical" component={FormVertical} />
                  <Route path="/tables-basic" component={TablesBasic} />
                  <Route path="/data-tables" component={DataTables} />
                  <Route path="/demo" component={Demo} />
                </Switch>
              </div>
              <Route render={(props) => <Footer {...props} />} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export { RouterComponent };
