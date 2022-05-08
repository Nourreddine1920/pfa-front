import {
  faDownload,
  faPencilAlt,
  faPlus,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Import Components
import { Card, Col, Row } from "react-bootstrap";
import Load from "../../_components/progressbar/Load";

//Import Data Table
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { GetUserExam } from "../../_services/app-services";


export const Exam = (props) => {
  const [loading, setloading] = useState(false);
  const [examitems, setexamitmes] = useState([]);
  useEffect(() => {
    setloading(true);

    GetUserExam().then((res) => {
      console.log("res", res);
      setexamitmes(res);
      setloading(false);
    }).catch((err) => {
      console.log("err", err);
      setloading(false);
    })

  }, []);
  // console.log("props...", props);





  return (
    <div className="main-wrapper login-body">
      <div className="page-header">
        <h5 className="card-title"> Student or Teacher Exams </h5>
        <Row>
          <div>
            {loading ? (
              <Load title={"loading ..."} />
            ) : (
              <>
                {examitems.length > 0 ? (
                  <div class="content">
                    <div class="table-responsive custom-table-responsive">
                      <table class="table custom-table">
                        <thead>
                          <tr scope="row">
                            <th scope="col">Created By</th>

                            <th scope="col">Content</th>

                            <th scope="col">Created At</th>
                            <th scope="col">File</th>
                          </tr>
                        </thead>
                        {examitems.map((exam, index) => {
                          let date_exam = new Date(exam.created_at)
                          return <>
                            <tbody>
                              <td>
                                <a href="/profile">{exam.name}</a>
                              </td>
                              <td>
                                <a> make exam </a>
                              </td>
                              <td>
                                <a>{date_exam.toDateString()}</a>

                              </td>

                              <td>
                                <a href={exam.file}>File</a>
                              </td>



                            </tbody></>
                        })}

                      </table>
                    </div>
                  </div>
                ) : (
                  <p>no files</p>
                )}
              </>
            )}
          </div>
        </Row>
















      </div></div>

  );
};

withRouter(Exam);
