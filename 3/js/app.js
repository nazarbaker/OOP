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
    date: "date",
    phone:"required"
  }
});

var users= [];
$("#subm").on("click", function(e){
  /*if (document.querySelectorAll("input")[0].value !== ""){
  document.querySelectorAll("input")[8].setAttribute("disabled", "disabled");
}*/
e.preventDefault();
var row = document.createElement("tr");
var cell1=document.createElement("td");
var cell2=document.createElement("td");
var cell3=document.createElement("td");
var cell4=document.createElement("td");
var cell5=document.createElement("td");
var cell6=document.createElement("td");
cell1.innerText=document.querySelectorAll("input")[0].value || "-";
cell2.innerText= "cell2";
cell3.innerText= document.querySelectorAll("input")[4].value || "-";
cell4.innerText= document.querySelectorAll("input")[5].value || "-";
cell5.innerText= document.querySelectorAll("input")[6].value || "-";
cell6.innerText= document.querySelectorAll("input")[7].value || "-";
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
row.appendChild(cell4);
row.appendChild(cell5);
row.appendChild(cell6);
$("#tb1").append(row);
var el= [];
el.push(document.querySelectorAll("input")[0].value || "-", document.querySelectorAll("input")[4].value || "-",document.querySelectorAll("input")[5].value || "-", document.querySelectorAll("input")[6].value || "-", document.querySelectorAll("input")[7].value || "-")
users.push(el);
console.log(window.location.href.split("?")[1] );
document.querySelectorAll("input")[0].value = "";
document.querySelectorAll("input")[4].value = "";
document.querySelectorAll("input")[5].value = "";
document.querySelectorAll("input")[6].value = "";
document.querySelectorAll("input")[7].value = "";
})