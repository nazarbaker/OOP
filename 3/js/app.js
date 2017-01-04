jQuery.validator.addMethod("phone", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional(element) || /^\d{10}$/.test(value);
}, 'Please enter a valid phone (example:0123456789)');
$("#form").validate({
  rules: {
    name: {
      required: true,
      minlength: 4,
      maxlength: 30
    },
    email: {
      required: true,
      email: true
    },
    phone: "phone",
    date: {
      required: true,
      date: true
    }
  }
});

function User(name, gender, birth, address, phone, email) {
  this.name = name;
  this.gender = gender;
  this.birth = birth;
  this.address = address;
  this.phone = phone;
  this.email = email;
  var isDataVisible = true;
  this.changeDataVisible = function() {
    vis = !isDataVisible;
    isDataVisible = !isDataVisible;
    return vis;
  }
}
var users = [];
var count = 0;
var gender = "";
$("#subm").on("click", function(e) {
  e.preventDefault();
  if ($("#form").valid()) {
    var row = document.createElement("tr");
    row.setAttribute("data-index", count);
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    if ($("input[name=gender]")[0].checked) {
      cell2.innerText = $("input[name=gender]")[0].value;
      gender = $("input[name=gender]")[0].value;
    } else if ($("input[name=gender]")[1].checked) {
      cell2.innerText = $("input[name=gender]")[1].value;
      gender = $("input[name=gender]")[1].value;
    } else {
      cell2.innerText = $("input[name=gender]")[2].value;
      gender = $("input[name=gender]")[2].value;
    }
    cell1.innerText = document.querySelectorAll("input")[0].value || "-";
    cell3.innerText = document.querySelectorAll("input")[4].value || "-";
    cell4.innerText = document.querySelectorAll("input")[5].value || "-";
    cell5.innerText = document.querySelectorAll("input")[6].value || "-";
    cell6.innerText = document.querySelectorAll("input")[7].value || "-";
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    $("#tb1").append(row);
    var el = new User(document.querySelectorAll("input")[0].value, gender, document.querySelectorAll("input")[4].value, document.querySelectorAll("input")[5].value, document.querySelectorAll("input")[6].value, document.querySelectorAll("input")[7].value)
      //el.push(document.querySelectorAll("input")[0].value || "-", document.querySelectorAll("input")[4].value || "-",document.querySelectorAll("input")[5].value || "-", document.querySelectorAll("input")[6].value || "-", document.querySelectorAll("input")[7].value || "-")
    users.push(el);
    document.querySelectorAll("input")[0].value = "";
    document.querySelectorAll("input")[4].value = "";
    document.querySelectorAll("input")[5].value = "";
    document.querySelectorAll("input")[6].value = "";
    document.querySelectorAll("input")[7].value = "";
    count++;
  } else {
    alert("incorrect values");
  }
})
$("table").delegate("tr[data-index]", "click", function(e) {
  e.stopPropagation();
  var index = +$(this).attr('data-index');
  users[index].changeDataVisible();
  if (users[index].changeDataVisible()) {
    $("tr[data-index=" + index + "] td:not(:first)").addClass("notvisible");
  } else {
    $("tr[data-index=" + index + "] td").removeClass("notvisible");
  }
  alert("isDataVisible = " + users[index].changeDataVisible());
})