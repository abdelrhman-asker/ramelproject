setTimeout(function () {
  let animations = document.getElementById("main-div");
  animations.style.display = "none";
  let loader = document.getElementById("loader");
  loader.style.display = "none";
  let MainSection = document.getElementById("Main-Section");
  MainSection.style.display = "block";
}, 4500);

function openingSideBar() {
  document.getElementById("sidenav").style.display = "flex";
  document.getElementById("ClosingAll").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closing() {
  for (let x = 0; x < dropdown.length; x++) {
    document.getElementsByClassName("dropdown-cont")[x].style.display = "none";
  }
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("ClosingAll").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}

var dropdown = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    console.log(i, document.getElementById("ArrowDU" + i));
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      document.getElementById("ArrowDU" + i).classList = "fa fa-angle-down";
    } else {
      dropdownContent.style.display = "block";
      document.getElementById("ArrowDU" + i).classList = "fa fa-angle-up";
    }
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  await fetch("clients.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const tableBody = document.getElementById("MainClients");
      console.log(data.clients);
      data.clients.forEach((item, e) => {
        const row = document.createElement("div");
        row.classList.add("rowDiv");
        row.innerHTML = `
                  <img class="clientsImg" src="${item.img}" alt="clientimg" >
                  <img class="clientsBack" src="pics/clients/Rectangle 24.png" alt="background">

               
              `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

{
  /* <td>${item.age}</td>
<td>${item.email}</td> */
}

// fetch("clients.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const tableBody = document.getElementById(MainCleints);

//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
