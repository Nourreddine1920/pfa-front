import axios from "axios";
import API_URL from "../env";

// return authorization header with jwt token
export function authHeader() {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

// *******************************for boards**************************
export async function GetBoards() {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "boards/", {
        headers: authHeader(),
      })
      .then((res) => {
        let boardsList = [];
        let data = res.data.results;
        boardsList = data.map((board) => {
          return {
            id_board: board.id_board,
            name: board.name,
            in_use: board.in_use,
            family: board.family,
            serial_number: board.serial_number,
            state: board.state,
            flash_memory_size: board.flash_memory_size,
            exams: board.exams.length,
            succeded_exams: board.exams.filter((exam) => {
              return exam.state === "COMPLETED";
            }).length,
            gallery: board.gallery, // TODO access to image url
            last_use: board.exams.length ? board.exams[0].created_at : "NEVERUSED",
            boardqueue: board.boardqueue
              ? {
                id_queue: board.boardqueue.id_queue,
                last_user_request: board.boardqueue.users_request.filter((ur) => {
                  return ur.is_handled === false
                }).map((urr) => {
                  return {
                    id_request: urr.id_request,
                    is_from_me: urr.created_by.id === id,
                    is_handled: urr.is_handled,
                    expiration_date: urr.expiration_date,
                    created_at: urr.created_at,
                  }
                })[0]
              }
              : null,
          };
        });

        resolve(boardsList);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}

// *******************************for boards*************************
// *******************************for files*************************
export async function GetLogFile(id_log_file) {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "files/" + id_log_file + "/", {
        headers: authHeader(),
      })
      .then((res) => {
        console.log("log_file", res);
        resolve(res.data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
// *************************** Make user request(enque)  ******************************
export async function EnqueUserRequest(board_id) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(
        API_URL + "enque_user_request/" + board_id + "/",
        {},
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          console.log("errr", e.response.data);
          reject(e.response.data);
        }
      });
  });
}

export async function TeacherUploadFile(data) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(API_URL + "upload_file/", data, {
        "Content-Type": "multipart/form-data",
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function GetElabUser() {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "elabuser/", {
        headers: authHeader(),
        params: { user: id },
      })
      .then((res) => {
        let data = res.data.results;
        data = data.map((user) => {
          return {
            name: user.first_name ? user.first_name : user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            kind: user.kind,
            email: user.email,
            photo: user.photo ? user.photo : "assets/img/user.png",
            files: user.uploaded_file.map((file) => {
              return {
                id_tp: file.id_tp,
                file_id: file.file_tp.id_file,
                file_url: file.file_tp.file,
                created_at: file.file_tp.created_at,
                created_by: file.user.first_name ? file.user.first_name : file.user.username,
                is_from_me: file.user.id === id,
                title_tp: file.title_tp,
              };
            }),
          };
        });
        resolve(data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function UpdateElabUser(data) {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .patch(API_URL + "elabuser/" + id + "/", data, {
        "Content-Type": "multipart/form-data",
        headers: authHeader(),
        params: { user: id },

      })
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function RegisterApi(data) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(API_URL + "auth/registration/", data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function DeleteTP(id_tp) {
  return new Promise(async (resolve, reject) => {
    await axios
      .delete(API_URL + "elabusertp/" + id_tp + "/", {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function GetTeacherStudent(kind) {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "elabuser/", {
        headers: authHeader(),
        params: { kind: kind },
      })
      .then((res) => {
        let data = res.data.results;
        data = data.map((user) => {
          return {
            id: user.user,
            name: user.first_name ? user.first_name : user.username,
            email: user.email,
            img_url: user.photo ? user.photo : "assets/img/user.png",
          };
        });
        console.log(data);
        resolve(data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}

export async function EXTRACT_USER_REQUEST(data) {
  // data ={"id_board":id}
  return new Promise(async (resolve, reject) => {
    await axios
      .post(API_URL + "extract_user_request/", data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data[0]);
        resolve(res.data[0]);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}
export async function MAKE_USER_REQUEST_HANDLED(id_request) {
  // data ={"id_request":id}
  return new Promise(async (resolve, reject) => {
    await axios
      .patch(API_URL + "userrequests/" + id_request + "/", { "is_handled": true }, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res.data[0]);
        resolve(res.data[0]);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}



export async function GetUserActivity() {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "activity/", {
        headers: authHeader(),
        params: { created_by: id },
      })
      .then((res) => {
        let data = res.data.results;
        data = data.map((activity) => {
          switch (activity.type_activity) {
            case 1:
              return {
                name: activity.created_by.username,
                user_id: activity.created_by.id,
                state: activity.exams_activity[0].state,
                file: activity.exams_activity[0].file_uploaded.file,
                type_activity: activity.type_activity,
                created_at: activity.created_at,
                kind: activity.created_by.kind
              }
              break;
            case 0:
              return {
                name: activity.created_by.username,
                user_id: activity.created_by.id,
                tp_activity: activity.tp_activity.file_tp.file,
                type_activity: activity.type_activity,
                created_at: activity.created_at,
                kind: activity.created_by.kind
              }
              break;
            default:
              break;
          }
        })

        console.log(data);
        resolve(data);
      })
      .catch((e) => {
        console.log('error', e);
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}


export async function GetUserExam() {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "exams/", {
        headers: authHeader(),
        params: { created_by: id },
      })
      .then((res) => {
        let data = res.data.results;
        data = data.map((exam) => {
          return {
            name: exam.created_by.username,
            kind: exam.created_by.kind,
            state: exam.state,
            file: exam.file_uploaded.file,
            created_at: exam.file_uploaded.created_at,
            examsubject: exam.examsubject

          };
        })

        resolve(data);
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          reject(e.message);
        } else {
          reject(e.response.data[Object.keys(e.response.data)[0]][0]);
        }
      });
  });
}