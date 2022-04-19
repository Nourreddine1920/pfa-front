let a = [
  {
    id_board: 1,
    exams: [],
    created_at: "2022-03-31T12:41:24Z",
    updated_at: "2022-03-31T12:42:58.424000Z",
    name: "32F429IDISCOVERY",
    state: "NOTAVAILABLE",
    family: "F4 discovery",
    in_use: false,
    serial_number: "066DFF545150898367153553",
    flash_memory_size: 2000000,
    datasheet: 1,
    gallery: [],
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
    gallery: [],
  },
  {
    id_board: 2,
    exams: [
      {
        id_exam: 3,
        file_uploaded: {
          id_file: 38,
          created_at: "2022-04-18T00:53:33.729585Z",
          updated_at: "2022-04-18T00:53:33.730091Z",
          file: "http://127.0.0.1:8000/media/0668FF353638425043094242_o3DOnVg.bin",
        },
        created_by: {
          id: 1,
          first_name: "Admin",
          last_name: "Admin",
          username: "Admin Admin",
          email: "admin@admin.com",
          photo: "http://127.0.0.1:8000/media/images/user_map_POgRDrD.png",
          kind: "TEACHER",
        },
        created_at: "2022-04-18T00:53:33.737935Z",
        updated_at: "2022-04-18T00:53:33.739096Z",
        state: "COMPLETED",
        feedback_results: 39,
      },
      {
        id_exam: 2,
        file_uploaded: {
          id_file: 36,
          created_at: "2022-04-18T00:53:04.292209Z",
          updated_at: "2022-04-18T00:53:04.292784Z",
          file: "http://127.0.0.1:8000/media/0668FF353638425043094242_JSX8NSb.bin",
        },
        created_by: {
          id: 1,
          first_name: "Admin",
          last_name: "Admin",
          username: "Admin Admin",
          email: "admin@admin.com",
          photo: "http://127.0.0.1:8000/media/images/user_map_POgRDrD.png",
          kind: "TEACHER",
        },
        created_at: "2022-04-18T00:53:04.304966Z",
        updated_at: "2022-04-18T00:53:04.306131Z",
        state: "COMPLETED",
        feedback_results: 37,
      },
      {
        id_exam: 1,
        file_uploaded: {
          id_file: 34,
          created_at: "2022-04-17T23:19:46.982476Z",
          updated_at: "2022-04-17T23:19:46.983420Z",
          file: "http://127.0.0.1:8000/media/0668FF353638425043094242.bin",
        },
        created_by: {
          id: 1,
          first_name: "Admin",
          last_name: "Admin",
          username: "Admin Admin",
          email: "admin@admin.com",
          photo: "http://127.0.0.1:8000/media/images/user_map_POgRDrD.png",
          kind: "TEACHER",
        },
        created_at: "2022-04-17T23:19:46.995062Z",
        updated_at: "2022-04-17T23:19:46.995723Z",
        state: "COMPLETED",
        feedback_results: 35,
      },
    ],
    boardqueue: {
      id_queue: 1,
      users_request: [
        {
          id_request: 1,
          created_by: {
            id: 1,
            first_name: "Admin",
            last_name: "Admin",
            username: "Admin Admin",
            email: "admin@admin.com",
            photo: "http://127.0.0.1:8000/media/images/user_map_POgRDrD.png",
            kind: "TEACHER",
          },
          created_at: "2022-04-18T00:14:36Z",
          updated_at: "2022-04-18T00:14:47.750218Z",
          is_handled: false,
          expiration_date: "2022-04-20",
        },
      ],
      created_at: "2022-04-18T00:14:30Z",
      updated_at: "2022-04-18T00:14:49.523747Z",
    },
    created_at: "2022-03-31T20:08:57Z",
    updated_at: "2022-03-31T20:10:07.184000Z",
    name: "NUCLEO-L552ZE-Q",
    state: "NOTAVAILABLE",
    family: "L5",
    in_use: false,
    serial_number: "0668FF353638425043094242",
    flash_memory_size: 512000,
    datasheet: 1,
    gallery: [],
  },
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
          users_request: board.boardqueue.users_request.map((ru) => {
            return {
              id_request: ru.id_request,
              is_from_me: ru.created_by.id === 1,
              is_handled: ru.is_handled,
            };
          }),
        }
      : {},
  };
});

console.log(boardsList);
