let a = [
  {
    user: 1,
    uploaded_file: [
      {
        id_file: 314,
        created_at: "2022-04-21T21:30:10.325259Z",
        updated_at: "2022-04-21T21:30:10.325962Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_KshA5Ua.pdf",
      },
      {
        id_file: 281,
        created_at: "2022-04-21T21:28:50.442879Z",
        updated_at: "2022-04-21T21:28:50.443728Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_7Ql1LUs.pdf",
      },
      {
        id_file: 280,
        created_at: "2022-04-21T21:21:13.143363Z",
        updated_at: "2022-04-21T21:21:13.144022Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_q54grCC.pdf",
      },
      {
        id_file: 279,
        created_at: "2022-04-21T21:21:08.045110Z",
        updated_at: "2022-04-21T21:21:08.045924Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_jDmlRbH.pdf",
      },
      {
        id_file: 278,
        created_at: "2022-04-21T21:21:07.431066Z",
        updated_at: "2022-04-21T21:21:07.431578Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_hmp5IP6.pdf",
      },
      {
        id_file: 277,
        created_at: "2022-04-21T21:21:06.062073Z",
        updated_at: "2022-04-21T21:21:06.062676Z",
        file: "http://127.0.0.1:8000/media/_Robotic_Workshop_by_Slidesgo_zmYN6BC.pdf",
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
let user=a.map((use)=>{
    return {
        name:use.first_name +" "+ use.last_name,
        kind:use.kind,
        files:use.uploaded_file.map((file)=>{
            return{
                file_id:file.id_file,
                file_url:file.file,
                created_at:file.created_at,
            }
        })
    }
})
console.log("user" , user) ; 