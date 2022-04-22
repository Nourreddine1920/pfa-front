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
            last_use: board.exams.length
              ? board.exams[0].created_at
              : "NEVERUSED",
            boardqueue: board.boardqueue
              ? {
                  id_queue: board.boardqueue.id_queue,
                  users_request: board.boardqueue.users_request.map((ru) => {
                    return {
                      id_request: ru.id_request,
                      is_from_me: ru.created_by.id === 1,
                      is_handled: ru.is_handled,
                      expiration_date: ru.expiration_date,
                      created_at: ru.created_at,
                    };
                  }),
                }
              : {},
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
      .post(API_URL + "enque_user_request/" + board_id + "/", {
        headers: authHeader(),
      })
      .then((res) => {
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


export async function TeacherUploadFile(data) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(API_URL + "upload_file/" ,data, {
        "Content-Type": "multipart/form-data",
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res) ;
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
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "elabuser/" , {
        headers: authHeader(),
      })
      .then((res) => {
        let data = res.data.results
        data = data.map((use) => {
          return {
            name: use.first_name + " " + use.last_name,
            kind: use.kind,
            files: use.uploaded_file.map((file) => {
              return {
                file_id: file.file_tp.id_file,
                file_url: file.file_tp.file,
                created_at: file.file_tp.created_at,
                created_by:file.user.first_name+" "+file.user.last_name,
                kind : file.user.kind,
                photo: "assets/img/profiles/avatar-03.jpg"
                
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