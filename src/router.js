import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Error from "./pages/Error/Error";
// import { Sidebar, Header, Footer } from "../_components";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Sidebar from "./_components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import StudentsList from "./pages/Students/StudentsList";
import AddStudent from "./pages/Students/AddStudent";
import EditStudent from "./pages/Students/EditStudent";
import StudentDetails from "./pages/Students/StudentDetails";
import TeachersList from "./pages/Teachers/TeachersList";
import AddTeacher from "./pages/Teachers/AddTeacher";
import EditTeacher from "./pages/Teachers/EditTeacher";
import TeacherDetails from "./pages/Teachers/TeacherDetails";
import AddDepartment from "./pages/Departments/AddDepartment";
import EditDepartment from "./pages/Departments/EditDepartment";
import DepartmentsList from "./pages/Departments/DepartmentsList";
import BlankPage from "./pages/BlankPage/BlankPage";
import AddSubject from "./pages/Subjects/AddSubject";
import EditSubject from "./pages/Subjects/EditSubject";
import SubjectsList from "./pages/Subjects/SubjectsList";
import FeesCollections from "./pages/Accounts/FeesCollections";
import Expenses from "./pages/Accounts/Expenses";
import Salary from "./pages/Accounts/Salary";
import AddFeesCollections from "./pages/Accounts/AddFeesCollections";
import AddExpenses from "./pages/Accounts/AddExpenses";
import AddSalary from "./pages/Accounts/AddSalary";
import Holiday from "./pages/Holiday/Holiday";
import AddHoliday from "./pages/Holiday/AddHoliday";
import { EditFees, AddFees, Fees } from "./pages/Fees";
import { EditExam, AddExam, Exam } from "./pages/Exam";
import { TimeTable, EditTimeTable, AddTimeTable } from "./pages/TimeTable";
import { Library, AddBook, EditBook } from "./pages/Library";
import { SportsList, AddSport, EditSport } from "./pages/Sports";
import { AddRoom, EditRoom, HostelList } from "./pages/Hostel";
import { AddTransport, EditTransport, TransportsList } from "./pages/Transport";
import Components from "./pages/Components/Components";
import {
  FormBasicInput,
  FormHorizontal,
  FormInputGroups,
  FormMask,
  FormValidation,
  FormVertical,
} from "./pages/Forms";
import { DataTables, TablesBasic } from "./pages/Tables";
import AddEvent from "./pages/Events/AddEvent";
import Profile from "./pages/Profile/Profile";
import { Compose, Inbox } from "./pages/Inbox";

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

                  <Route path="/add-department" component={AddDepartment} />
                  <Route path="/edit-department" component={EditDepartment} />
                  <Route path="/departments" component={DepartmentsList} />

                  <Route path="/blank-page" component={BlankPage} />
                  <Route path="/add-subject" component={AddSubject} />
                  <Route path="/edit-subject" component={EditSubject} />
                  <Route path="/subjects" component={SubjectsList} />

                  <Route path="/fees-collections" component={FeesCollections} />
                  <Route path="/expenses" component={Expenses} />
                  <Route path="/salary" component={Salary} />
                  <Route
                    path="/add-fees-collections"
                    component={AddFeesCollections}
                  />
                  <Route path="/add-expenses" component={AddExpenses} />
                  <Route path="/add-salary" component={AddSalary} />

                  <Route path="/holiday" component={Holiday} />
                  <Route path="/add-holiday" component={AddHoliday} />

                  <Route path="/fees" component={Fees} />
                  <Route path="/add-fees" component={AddFees} />
                  <Route path="/edit-fees" component={EditFees} />

                  <Route path="/exam" component={Exam} />
                  <Route path="/add-exam" component={AddExam} />
                  <Route path="/edit-exam" component={EditExam} />

                  <Route path="/time-table" component={TimeTable} />
                  <Route path="/add-time-table" component={AddTimeTable} />
                  <Route path="/edit-time-table" component={EditTimeTable} />

                  <Route path="/library" component={Library} />
                  <Route path="/add-book" component={AddBook} />
                  <Route path="/edit-book" component={EditBook} />

                  <Route path="/sports" component={SportsList} />
                  <Route path="/add-sport" component={AddSport} />
                  <Route path="/edit-sport" component={EditSport} />

                  <Route path="/hostel" component={HostelList} />
                  <Route path="/add-room" component={AddRoom} />
                  <Route path="/edit-room" component={EditRoom} />

                  <Route path="/transport" component={TransportsList} />
                  <Route path="/add-transport" component={AddTransport} />
                  <Route path="/edit-transport" component={EditTransport} />

                  <Route path="/components" component={Components} />

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

                  <Route path="/event" component={Event} />
                  <Route path="/add-event" component={AddEvent} />

                  <Route path="/profile" component={Profile} />

                  <Route path="/inbox" component={Inbox} />
                  <Route path="/compose" component={Compose} />
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
