// TAO VỪA THÊM 3 CÁI HÀM KIỂU PHIÊN BẢN THỨ 2 Ý, T CHƯA CÓ CHỈNH SỬA GÌ 3 HÀM GỐC HẾT NHA.
function handleCurrentCreditsInput(input) {
  // Xử lý giới hạn giá trị nhập vào là 200
  if (parseFloat(input.value) > 200) {
    input.value = "200";
  }

  // Gọi hàm tính toán số tín chỉ mục tiêu
  calculateTargetCredits();
}
//Ham loai so 0 dau tien
function preventLeadingZero(event) {
  let input = event.target;
  let value = input.value + event.key; // Giá trị mới khi nhập thêm ký tự mới

  // Kiểm tra nếu giá trị là số 0 và độ dài là 1, không chặn
  if (value === "0" && input.value.length === 0) {
    return;
  }

  // Ngăn không cho nhập dấu âm (-) ở bất kỳ vị trí nào
  if (event.key === "-") {
    event.preventDefault();
    return;
  }

  // Kiểm tra nếu giá trị mới bắt đầu bằng nhiều số 0, chặn sự kiện
  if (/^0[0-9]+$/.test(value)) {
    event.preventDefault();
  }
}

//----------
function validateGPAInput(inputElement) {
  inputElement.addEventListener("input", function (e) {
    const value = e.target.value;
    inputElement.addEventListener("keydown", function (e) {
      // Ngăn không cho nhập dấu âm (-)
      if (e.key === "-") {
        e.preventDefault();
      }
    });
    if (value.length > 1 && value.startsWith("0") && !value.startsWith("0.")) {
      e.target.value = value.slice(1);
    }
    if (parseFloat(value) > 4) {
      e.target.value = 4;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const gpaInput = document.getElementById("previous-gpa");
  if (gpaInput) {
    validateGPAInput(gpaInput);
  }
});
//--------
var subjects = [];

function calculateGPA1() {
  var totalCredits = 0;
  var totalPoints = 0;

  for (var i = 0; i < subjects.length; i++) {
    var credit = parseFloat(subjects[i].credit);
    var grade = subjects[i].grade;

    var point;

    switch (grade) {
      case "A":
        point = 4.0;
        break;
      case "B+":
        point = 3.5;
        break;
      case "B":
        point = 3.0;
        break;
      case "C+":
        point = 2.5;
        break;
      case "C":
        point = 2.0;
        break;
      case "D+":
        point = 1.5;
        break;
      case "D":
        point = 1.0;
        break;
      case "F":
        point = 0.0;
        break;
      default:
        point = 0.0;
        break;
    }

    totalCredits += credit;
    totalPoints += credit * point;
  }

  var semesterGPA = totalPoints / totalCredits;

  document.getElementById("semesterGPA").textContent =
    "Tổng chỉ: " + totalCredits + " và GPA: " + semesterGPA.toFixed(2);
}

function calculateGPA2() {
  var totalCredits = 0;
  var totalPoints = 0;

  for (var i = 0; i < subjects.length; i++) {
    var credit = parseFloat(subjects[i].credit);
    var grade = subjects[i].grade;

    var point;

    switch (grade) {
      case "A":
        point = 4.0;
        break;
      case "B+":
        point = 3.5;
        break;
      case "B":
        point = 3.0;
        break;
      case "C+":
        point = 2.5;
        break;
      case "C":
        point = 2.0;
        break;
      case "D+":
        point = 1.5;
        break;
      case "D":
        point = 1.0;
        break;
      case "F":
        point = 0.0;
        break;
      default:
        point = 0.0;
        break;
    }

    totalCredits += credit;
    totalPoints += credit * point;
  }

  var semesterGPA = totalPoints / totalCredits;
  return semesterGPA;
}
function tongtinchi() {
  var totalCredits = 0;
  var totalPoints = 0;

  for (var i = 0; i < subjects.length; i++) {
    var credit = parseFloat(subjects[i].credit);
    var grade = subjects[i].grade;

    var point;

    switch (grade) {
      case "A":
        point = 4.0;
        break;
      case "B+":
        point = 3.5;
        break;
      case "B":
        point = 3.0;
        break;
      case "C+":
        point = 2.5;
        break;
      case "C":
        point = 2.0;
        break;
      case "D+":
        point = 1.5;
        break;
      case "D":
        point = 1.0;
        break;
      case "F":
        point = 0.0;
        break;
      default:
        point = 0.0;
        break;
    }

    totalCredits += credit;
    totalPoints += credit * point;
  }

  return totalCredits;
}

function addSubject() {
  var creditInput = document.getElementById("credit");
  var gradeInput = document.getElementById("grade");

  var credit = parseFloat(creditInput.value);
  var grade = gradeInput.value;

  if (credit && grade) {
    var subject = {
      credit: credit,
      grade: grade,
    };

    subjects.push(subject);

    creditInput.value = "";
    gradeInput.value = "";
    displaySubjects();
  }
}

function displaySubjects() {
  var subjectsContainer = document.getElementById("subjectsContainer");
  subjectsContainer.innerHTML = "";

  // Duyệt qua từng môn học trong mảng subjects
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];

    var subjectDiv = document.createElement("div");
    subjectDiv.classList.add("main_subject");

    var creditSpan = document.createElement("li");
    creditSpan.classList.add("subject_span");
    creditSpan.textContent = "Số chỉ: " + subject.credit;
    subjectDiv.appendChild(creditSpan);

    var gradeSpan = document.createElement("li");
    gradeSpan.classList.add("subject_span");
    gradeSpan.textContent = "Điểm: " + subject.grade;
    subjectDiv.appendChild(gradeSpan);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add("delete_button");
    deleteButton.onclick = (function (index) {
      return function () {
        subjects.splice(index, 1);
        displaySubjects();
      };
    })(i);
    subjectDiv.appendChild(deleteButton);

    subjectsContainer.appendChild(subjectDiv);
  }

  // Tạo nút Xóa Tất Cả
  var deleteAllButton = document.createElement("button");
  deleteAllButton.textContent = "Xóa Tất Cả";
  deleteAllButton.classList.add("delete_all_button");
  deleteAllButton.onclick = function () {
    subjects = []; // Xóa hết các môn học trong danh sách
    displaySubjects(); // Cập nhật giao diện sau khi xóa

    // Kiểm tra để ẩn nút "Xóa Tất Cả" khi không còn môn học
    if (subjects.length === 0) {
      deleteAllButton.style.display = "none";
    }
  };
  subjectsContainer.appendChild(deleteAllButton);

  // Kiểm tra để ẩn nút "Xóa Tất Cả" khi không còn môn học
  if (subjects.length === 0) {
    deleteAllButton.style.display = "none";
  }
}
function generateInputs() {
  var numOfSubjects = parseInt(document.getElementById("numOfSubjects").value);
  var inputsContainer = document.getElementById("inputsContainer");
  inputsContainer.innerHTML = "";

  for (var i = 1; i <= numOfSubjects; i++) {
    var creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.id = "credit_" + i;
    creditInput.placeholder = "Số chỉ môn " + i;
    inputsContainer.appendChild(creditInput);

    var gradeInput = document.createElement("select");
    gradeInput.id = "grade_" + i;
    gradeInput.placeholder = "Điểm môn " + i;
    var gradeOptions = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
    for (var j = 0; j < gradeOptions.length; j++) {
      var option = document.createElement("option");
      option.value = gradeOptions[j];
      option.text = gradeOptions[j];
      gradeInput.appendChild(option);
    }
    inputsContainer.appendChild(gradeInput);

    inputsContainer.appendChild(document.createElement("br"));
  }
}

// Lưu trữ các môn học
var subjects2 = [];

// Hàm thêm môn học
function addSubject2() {
  var creditInput = document.getElementById("credit_1");
  var oldGradeInput = document.getElementById("oldGrade_1");
  var newGradeInput = document.getElementById("newGrade_1");

  var credit = parseFloat(creditInput.value);
  var oldGrade = oldGradeInput.value;
  var newGrade = newGradeInput.value;

  if (credit && oldGrade && newGrade) {
    var subject = {
      credit: credit,
      oldGrade: oldGrade,
      newGrade: newGrade,
    };

    subjects2.push(subject);

    creditInput.value = "";
    oldGradeInput.value = "";
    newGradeInput.value = "";

    displaySubjects2(); // Gọi lại hàm để hiển thị lại danh sách môn học sau khi thêm
  }
}

// Hàm hiển thị danh sách môn học
// Hàm hiển thị các môn học và thêm nút delete
function displaySubjects2() {
  var subjectsContainer = document.getElementById("subjectsContainer2");
  subjectsContainer.innerHTML = "";

  // Duyệt qua từng môn học trong mảng subjects2
  for (var i = 0; i < subjects2.length; i++) {
    var subject = subjects2[i];

    var subjectDiv = document.createElement("div");
    subjectDiv.classList.add("main_subject");

    var creditSpan = document.createElement("li");
    creditSpan.classList.add("subject_span");
    creditSpan.textContent = "Số tín chỉ: " + subject.credit;
    subjectDiv.appendChild(creditSpan);

    var oldGradeSpan = document.createElement("li");
    oldGradeSpan.classList.add("subject_span");
    oldGradeSpan.textContent = "Điểm cũ: " + subject.oldGrade;
    subjectDiv.appendChild(oldGradeSpan);

    var newGradeSpan = document.createElement("li");
    newGradeSpan.classList.add("subject_span");
    newGradeSpan.textContent = "Điểm mới: " + subject.newGrade;
    subjectDiv.appendChild(newGradeSpan);

    // Tạo nút Xóa
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add("delete_button");
    deleteButton.addEventListener(
      "click",
      (function (index) {
        return function () {
          deleteSubject(index);
        };
      })(i)
    );
    subjectDiv.appendChild(deleteButton);

    subjectsContainer.appendChild(subjectDiv);
  }

  // Tạo nút Xóa Tất Cả
  var deleteAllButton = document.createElement("button");
  deleteAllButton.textContent = "Xóa Tất Cả";
  deleteAllButton.classList.add("delete_all_button");
  deleteAllButton.addEventListener("click", function () {
    subjects2 = []; // Xóa hết các môn học trong danh sách subjects2
    displaySubjects2(); // Cập nhật giao diện sau khi xóa

    // Kiểm tra để ẩn nút "Xóa Tất Cả" khi không còn môn học
    if (subjects2.length === 0) {
      deleteAllButton.style.display = "none";
    }
  });
  subjectsContainer.appendChild(deleteAllButton);

  // Kiểm tra để ẩn nút "Xóa Tất Cả" khi không có môn học
  if (subjects2.length === 0) {
    deleteAllButton.style.display = "none";
  }
}

// Hàm xóa môn học
function deleteSubject(index) {
  subjects2.splice(index, 1);
  displaySubjects2();
}

// Hàm tạo các input
function generateInputs() {
  var numOfSubjects = parseInt(document.getElementById("numOfSubjects").value);
  var inputsContainer = document.getElementById("inputsContainer");
  inputsContainer.innerHTML = "";

  for (var i = 1; i <= numOfSubjects; i++) {
    var creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.id = "credit_" + i;
    creditInput.placeholder = "Số tín chỉ môn " + i;
    inputsContainer.appendChild(creditInput);

    var oldGradeInput = document.createElement("select");
    oldGradeInput.id = "oldGrade_" + i;
    oldGradeInput.placeholder = "Điểm cũ môn " + i;
    var gradeOptions = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
    for (var j = 0; j < gradeOptions.length; j++) {
      var option = document.createElement("option");
      option.value = gradeOptions[j];
      option.textContent = gradeOptions[j];
      oldGradeInput.appendChild(option);
    }
    inputsContainer.appendChild(oldGradeInput);

    var newGradeInput = document.createElement("select");
    newGradeInput.id = "newGrade_" + i;
    newGradeInput.placeholder = "Điểm mới môn " + i;
    for (var j = 0; j < gradeOptions.length; j++) {
      var option = document.createElement("option");
      option.value = gradeOptions[j];
      option.textContent = gradeOptions[j];
      newGradeInput.appendChild(option);
    }
    inputsContainer.appendChild(newGradeInput);

    inputsContainer.appendChild(document.createElement("br"));
  }
}

function tinhdiemcaithien() {
  var tongdiemcu = 0;
  var tongdiemmoi = 0;

  for (var i = 0; i < subjects2.length; i++) {
    var credit = parseFloat(subjects2[i].credit);
    var oldGrade = subjects2[i].oldGrade;
    var newGrade = subjects2[i].newGrade;

    var pointcu;
    var pointmoi;

    switch (oldGrade) {
      case "A":
        pointcu = 4.0;
        break;
      case "B+":
        pointcu = 3.5;
        break;
      case "B":
        pointcu = 3.0;
        break;
      case "C+":
        pointcu = 2.5;
        break;
      case "C":
        pointcu = 2.0;
        break;
      case "D+":
        pointcu = 1.5;
        break;
      case "D":
        pointcu = 1.0;
        break;
      case "F":
        pointcu = 0.0;
        break;
      default:
        pointcu = 0.0; // Xử lý trường hợp mặc định
        break;
    }

    switch (newGrade) {
      case "A":
        pointmoi = 4.0;
        break;
      case "B+":
        pointmoi = 3.5;
        break;
      case "B":
        pointmoi = 3.0;
        break;
      case "C+":
        pointmoi = 2.5;
        break;
      case "C":
        pointmoi = 2.0;
        break;
      case "D+":
        pointmoi = 1.5;
        break;
      case "D":
        pointmoi = 1.0;
        break;
      case "F":
        pointmoi = 0.0;
        break;
      default:
        pointmoi = 0.0; // Xử lý trường hợp mặc định
        break;
    }

    // Kiểm tra giá trị trung gian
    // console.log(`Môn học ${i+1}: credit=${credit}, oldGrade=${oldGrade}, newGrade=${newGrade}, pointcu=${pointcu}, pointmoi=${pointmoi}`);

    // Tính tổng điểm cũ và mới
    tongdiemcu += pointcu * credit;
    tongdiemmoi += pointmoi * credit;
  }

  // Tính điểm cải thiện là hiệu của tổng điểm mới và cũ
  var diemcaithien = tongdiemmoi - tongdiemcu;

  // Kiểm tra giá trị kết quả
  //console.log(`Tổng điểm cũ: ${tongdiemcu}, Tổng điểm mới: ${tongdiemmoi}, Điểm cải thiện: ${diemcaithien}`);

  return diemcaithien;
}
