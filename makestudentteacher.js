const b = [
  {
    user: 4,
    uploaded_file: [
      {
        id_tp: 4,
        file_tp: {
          id_file: 4,
          created_at: "2022-04-22T22:15:59.643176Z",
          updated_at: "2022-04-22T22:15:59.644066Z",
          file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_jVBDF4q.pdf",
        },
        user: {
          id: 4,
          first_name: "test",
          last_name: "test",
          username: "nouri",
          email: "tarek@gmail.com",
          kind: "STUDENT",
        },
        created_at: "2022-04-22T22:15:59.672965Z",
        updated_at: "2022-04-22T22:15:59.673770Z",
        title_tp: "TP",
      },
      {
        id_tp: 2,
        file_tp: {
          id_file: 2,
          created_at: "2022-04-22T21:40:39.729048Z",
          updated_at: "2022-04-22T21:40:39.729894Z",
          file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_xQtXJM0.pdf",
        },
        user: {
          id: 1,
          email: "admin@admin.com",
          kind: "OTHER",
        },
        created_at: "2022-04-22T21:43:16Z",
        updated_at: "2022-04-22T21:43:26.276158Z",
        title_tp:
          "tpzlkjhgfregjsllkejdlkjsvk jmlfjbsbgdghmsbgldsjgbdbntpzlkjhgfregjsllkejdlkjsvk jmlfjbsbgdghmsbgldsjgbdbniopjsoijkdtsltpzlkjhgfregjsllkejdlkjsvk jmlfjbsbgdghmsbgldsjgbdbniopjsoijkdtsltpzlkjhgfregjsllkejdlkjsvk jmlfjbsbgdghmsbgldsjgbdbniopjsoijiopjsoijkdtsl",
      },
    ],
    created_at: "2022-04-22T21:39:12Z",
    updated_at: "2022-04-22T21:39:12.102821Z",
    first_name: "test",
    last_name: "test",
    email: "tarek@gmail.com",
    kind: "STUDENT",
    photo: "http://127.0.0.1:8000/media/images/user_map_9XomSq0.png",
  },
];
let u = b.map((user) => {
  return {
    id: user.user,
    name: user.first_name + " " + user.last_name,
    email: user.email,
    img_url: user.photo,
  };
});
console.log("u" , u) ; 
