let a = [
  {
    id_board: 1,
    exams: [
      {
        id_exam: 35,
        state: "FAILED",
        created_by: {
          id: 1,
          first_name: "admin",
          last_name: "admin",
          username: "admin admin",
          email: "admin@admin.com",
          kind: "TEACHER"
        },
        file_uploaded: {
          id_file: 4,
          created_at: "2022-05-08T15:50:16.973293Z",
          updated_at: "2022-05-08T15:50:16.973984Z",
          file: "http://127.0.0.1:8000/media/066DFF545150898367153553_Z588jdC.bin"
        },
        examsubject: "admin admin make exam with binary file 066DFF545150898367153553_Z588jdC.bin,this exam is [FAILED].",
        created_at: "2022-05-08T15:50:16.983396Z",
        updated_at: "2022-05-08T15:50:16.984319Z"
      }
    ],
    boardqueue: {
      id_queue: 7,
      users_request: [
        {
          id_request: 20,
          created_by: {
            id: 1,
            first_name: "admin",
            last_name: "admin",
            username: "admin admin",
            email: "admin@admin.com",
            kind: "TEACHER"
          },
          expiration_date: "2022-05-08T16:49:42.064408Z",
          created_at: "2022-05-08T15:49:42.064471Z",
          updated_at: "2022-05-08T15:49:42.065011Z",
          is_handled: false
        },
        {
          id_request: 21,
          created_by: {
            id: 2,
            first_name: "user",
            last_name: "test",
            username: "test",
            email: "user@example.com",
            kind: "STUDENT"
          },
          expiration_date: "2022-05-08T16:57:33.889385Z",
          created_at: "2022-05-08T15:57:33.889440Z",
          updated_at: "2022-05-08T15:57:33.889904Z",
          is_handled: false
        }
      ],
      created_at: "2022-05-08T15:49:42.028846Z",
      updated_at: "2022-05-08T15:49:42.029278Z"
    },
    created_at: "2022-03-31T12:41:24Z",
    updated_at: "2022-03-31T12:42:58.424000Z",
    name: "32F429IDISCOVERY",
    state: "NOTAVAILABLE",
    family: "F4 discovery",
    in_use: false,
    serial_number: "066DFF545150898367153553",
    flash_memory_size: 2000000,
    datasheet: 1,
    gallery: []
  },
  {
    id_board: 2,
    exams: [],
    created_at: "2022-03-31T20:08:57Z",
    updated_at: "2022-03-31T20:10:07.184000Z",
    name: "NUCLEO-L552ZE-Q",
    state: "NOTAVAILABLE",
    family: "L5",
    in_use: false,
    serial_number: "0668FF353638425043094242",
    flash_memory_size: 512000,
    datasheet: 1,
    gallery: []
  },
  {
    id_board: 3,
    exams: [],
    created_at: "2022-03-31T20:34:19Z",
    updated_at: "2022-03-31T20:35:04.664000Z",
    name: "FAKE BOARD",
    state: "NOTAVAILABLE",
    family: "L5",
    in_use: false,
    serial_number: "0668FF353638425043094245",
    flash_memory_size: 512000,
    datasheet: 1,
    gallery: []
  }
];
// id_board,
// name,
// in_use,
// family,
// serial_number,
// gallery,
// state,
// datasheet,
// exams,
// flash_memory_size
let boardsList = a.map((board) => {
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
            is_from_me: urr.created_by.id === 1,
            is_handled: urr.is_handled,
            expiration_date: urr.expiration_date,
            created_at: urr.created_at,
          }
        })[0]
      }
      : null,
  };
});
console.log(boardsList);
