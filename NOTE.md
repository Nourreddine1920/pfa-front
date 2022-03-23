# 🚩🚩 ... for routing ... 🚩🚩
- delete `holiday` && `add-holiday` 
- delete `fees` && `add-fees` && `edit-fees` && `add-fees-collection` 
- delete `add-subject` && `edit-subject` &&`subjects` 
- delete `fees-collections` && `expenses` && `salary` && `add-expenses` &&`add-salary` 
- delete `exam` && `add-exam` && `edit-exam`
- delete `library` && `add-book` && `edit-book` && `sports` && `add-sport` && `edit-sport` 
- delete `hostel` && `add-room` && `edit-room` && `transport` && `add-transport` && `edit-transport` 
- delete `event` && `add-event` 
- delete `add-department` && `edit-department` && `departments`

- hide `components` && `form-basic-inputs` && `form-horizontal` && `form-input-groups` && `form-mask`
- hide `form-validation` && `form-vertical`  && `tables-basic` && `data-tables` && `blank-page` 
- add `notification` 

# 🚩🚩 ... from class based to functional component ... 🚩🚩
# add .DELETED_COMPONENTS to gitignore #
# add `activity` route 
- `activitylist` 
  - for teacher 
    - upload TP (homework/)
    - student view TP (download/compleet-TP/InProgress...)
    - make test in board (upload(.hex/bin) file / ...)
    - Give direct, real-time feedback.
    - Use the class stream to post announcements and engage students .
  - for student 
    - upload TP (his work/)
    - view TP (download/compleet-TP/InProgress...)
    - make test in board (upload(.hex/bin) file / ...)
    - Track classwork and submit assignments. (commes from teacher)
    - Check originality, feedback, and grades. (from teacher)
    - Share resources and interact in the class stream or by email. (example (files .bin/hex))
  - for administrators 
    - Add or remove students and teachers (backend admin).
    - Get 24/7 support. (example teacher/student) went a specific wiring(cablage) board
- `activityitem` 
  - ...
# add `board` route
- `boardlist` (list of board)
  - 
- `board`
  - Name (STM32F4x/STM32L5x)  (string)
  - Serial number (string)
  - last-use (Date)
  - state (available/not-available/in-use/...) (choices['...'])
    - `in-use` by (teacher/student)
    - `available` (No UART|... communication ) 
    - `not-available` (UART|... communication exist ) some one upload code . or board is in work)
    - `other` (no one from above)
  - datasheet (pdf file)
  - galery [list off board image]
  - history of use (shart (pie))
    - failed tests(activitys)
    - sucessded tests(activitys)
