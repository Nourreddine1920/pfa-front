import axios from "axios";
import API_URL from "../env";
import { MEDIA_URL } from "../env";

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
// set a board in use by user ...
export async function MakeBoardInUse(id_board) {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(API_URL + "make_baord_in_use/", {
        headers: authHeader(),
      })
      .then((res) => {
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
// make an exam with board ...
export async function MakeExamWithBoard(id_board, data) {
  let storage = localStorage.getItem("login");
  let user = JSON.parse(storage || JSON.stringify({}));
  let id = user.user.user;
  return new Promise(async (resolve, reject) => {
    await axios
      .post(API_URL + "make_exam_with_baord/"+id_board+"/",data, {
        headers: authHeader(),
      })
      .then((res) => {
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

// *******************************for boards*************************
