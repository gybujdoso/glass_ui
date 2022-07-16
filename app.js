var tBody = document.querySelector("#tBody");
var addBtn = document.querySelector("#addBtn");
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var homeTown = document.querySelector("#homeTown");

addBtn.addEventListener('click', () => {

    if (firstName.value.trim() == "" || lastName.value.trim() == "" || homeTown.value.trim() == "") {
        window.alert("Please fill out the form completely");
    } else {
        var new_element_row_container = document.createElement("tr");

        var new_cell_for_firstName = document.createElement("td");
        var new_cell_for_lastName = document.createElement("td");
        var new_cell_for_homeTown = document.createElement("td");

        new_cell_for_firstName.innerHTML = firstName.value;
        new_cell_for_lastName.innerHTML = lastName.value;
        new_cell_for_homeTown.innerHTML = homeTown.value;

        new_element_row_container.appendChild(new_cell_for_firstName);
        new_element_row_container.appendChild(new_cell_for_lastName);
        new_element_row_container.appendChild(new_cell_for_homeTown);

        tBody.appendChild(new_element_row_container);

        firstName.value = "";
        lastName.value = "";
        homeTown.value = "";

    }
    
});
