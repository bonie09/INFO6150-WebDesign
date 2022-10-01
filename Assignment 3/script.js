const table = document.getElementById("myTable");

let countRows = 0;

const checkedRows = table.getElementsByTagName("input");
landingPage();

function landingPage() {
  var count = 0;
  let submitButton = document.getElementById("button");
  console.log(checkedRows.length);
  for (var i = 0; i < checkedRows.length; i++) {
    var selectedRow = checkedRows[i].parentNode.parentNode;
    console.log(selectedRow);
    if (!checkedRows[i].checked) {
      count++;
      selectedRow.querySelectorAll("td")[8].classList.add("columnHide");
      selectedRow.querySelectorAll("td")[9].classList.add("columnHide");
    }
    if (checkedRows.length === count) {
      submitButton.style.backgroundColor = "gray";
      submitButton.disabled = true;
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[8]
        .classList.add("columnHide");
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[9]
        .classList.add("columnHide");
    }
  }
}

let selectedRow = "closed";

function rowSelected(row) {
  console.log(row.parentNode.parentNode);
  const checkedRow = row.parentNode.parentNode;
  console.log(checkedRow.nextElementSibling);
  const siblingRow = checkedRow.nextElementSibling;
  if (selectedRow == "closed") {
    siblingRow.style.display = "table-row";
    selectedRow = "expand";
  } else {
    siblingRow.style.display = "none";
    selectedRow = "closed";
  }
}
