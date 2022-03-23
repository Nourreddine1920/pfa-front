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
  - for student 
    - upload TP (his work/)
    - view TP (download/compleet-TP/InProgress...)
    - make test in board (upload(.hex/bin) file / ...)
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
  - datasheet (pdf file)
  - galery [list off board image]
  - history of use (shart (pie))
    - failed tests(activitys)
    - sucessded tests(activitys)
