import { faPencilAlt, faTrash } from "@fortawesome/fontawesome-free-solid";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { DeleteTP } from "../../_services/app-services";

const FileComp = (props) => {
  const {
    created_at,
    id_tp,
    created_by,
    photo,
    is_from_me,
    file_url,
    kind,
    title_tp,
  } = props;
  let date = new Date(created_at);
  return (
    <>
      <tr scope="row">
        <td>
          <a href="#">{created_by}</a>
        </td>
        <td>
          {title_tp}
          <small class="d-block">
            <a href={file_url}>joined file</a>
          </small>
        </td>

        <td>{date.toDateString()}</td>
        <td>
          <div
            style={{
              display: "flex",
            }}
          >
            {is_from_me ? (
              <>
                <a
                  href="/edit-exam"
                  className="btn btn-sm bg-success-light me-2"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </a>
                <a
                  type="button"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        DeleteTP(id_tp)
                          .then((res) => {
                            console.log("res", res);
                            if (res.status === 204) {
                              Swal.fire(
                                "Deleted!",
                                "Your TP has been deleted.",
                                "success"
                              ).then((res) => {
                                if (res.isConfirmed) {
                                  window.location.reload();
                                }
                              });
                            }
                          })
                          .catch((err) => {
                            console.log("err", err);
                            Swal.fire(
                              "TP not Deleted!",
                              "Your TP has not been deleted.",
                              "error"
                            );
                          });
                      }
                    });
                  }}
                  className="btn btn-sm bg-danger-light"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </a>
              </>
            ) : (
              <a href="#">details</a>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};
export default withRouter(FileComp);
