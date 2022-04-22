let a = [
  {
    user: 1,
    uploaded_file: [
      {
        id_tp: 1,
        file_tp: {
          id_file: 349,
          created_at: "2022-04-21T22:27:11Z",
          updated_at: "2022-04-21T22:27:17.894543Z",
          file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_josXfBn.pdf",
        },
        user: {
          id: 1,
          first_name: "Nourreddine",
          last_name: "Awled Brahim",
          username: "Nourreddine",
          email: "admin@admin.com",
          kind: "OTHER",
        },
        created_at: "2022-04-21T22:27:04Z",
        updated_at: "2022-04-21T22:27:28.085806Z",
        title_tp: "tp",
      },
    ],
    created_at: "2022-04-15T21:03:47Z",
    updated_at: "2022-04-15T21:04:08.218587Z",
    first_name: "admin",
    last_name: "admin",
    email: "admin@admin.com",
    kind: "OTHER",
  },
];
let user = a.map((use) => {
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
        
      };
    }),
  };
});
console.log("user", user);
