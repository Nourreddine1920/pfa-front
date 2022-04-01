let a = [
  {
    id_board: 2,
    exams: [],
    created_at: "2022-04-01T14:35:30Z",
    updated_at: "2022-04-01T14:36:08.003354Z",
    name: "L5XXXX",
    state: "OTHER",
    family: "L5",
    in_use: true,
    serial_number: "XXXXXXXXXXXXXXXXXXXXX",
    flash_memory_size: 510000,
    datasheet: 1,
    gallery: [],
  },
  {
    id_board: 1,
    exams: [
      {
        id_exam: 1,
        file_uploaded: {
          id_file: 2,
          created_at: "2022-03-31T12:43:59Z",
          updated_at: "2022-03-31T12:44:04.687050Z",
          file: "http://127.0.0.1:8000/media/user_map.png",
        },
        created_by: {
          id: 1,
          email: "admin@admin.com",
          kind: "OTHER",
        },
        created_at: "2022-03-31T12:43:50Z",
        updated_at: "2022-03-31T12:44:06.120738Z",
        state: "COMPLETED",
      },
    ],
    created_at: "2022-03-31T12:41:24Z",
    updated_at: "2022-03-31T12:42:58.424503Z",
    name: "STM32F4",
    state: "AVAILABLE",
    family: "F4 discovery",
    in_use: true,
    serial_number: "XXXXXXXXXXXXXXXXXXXXX",
    flash_memory_size: 2000000,
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
    gallery: board.gallery,
    last_use: board.exams.length ? board.exams[0].created_at : "Never Used",
  };
});
