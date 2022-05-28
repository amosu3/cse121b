let templeInfo = {
    name: "Ghana Accra Temple",
    dedication: 2004,
    photo: "Image/accra_ghana_temple_lds.jpeg",
    templeSurrounding: [
        "Area Office",
        "Axillary Building",
        "Christborg Stake Center",
        "Missionary Training Center",
        "Distribution Center"
    ],
    templeLocation: [
        {
            place: "Independent Avenue Accra",
            length: "18 years"
        }
    ]

}

document.querySelector("#name").textContent = templeInfo.name;

document.querySelector("#photo").setAttribute("src", templeInfo.photo);

document.querySelector("#photo").setAttribute("alt", templeInfo.name);

document.querySelector("#dedication").textContent = templeInfo.dedication;

templeInfo.templeSurrounding.forEach((surrounding) => {
    let templeSurroundingElem = document.createElement("li");
    templeSurroundingElem.textContent = surrounding;

    document.querySelector("#temple-surrounding").appendChild(templeSurroundingElem);
})

templeInfo.templeLocation.forEach((templeLocation) => {
    let templeLocationPlace = document.createElement("dt");
    templeLocationPlace.textContent = templeLocation.place;

    let templeLocationLength = document.createElement("dd");
    templeLocationLength.textContent = templeLocation.length;

    Document.querySelector("temple-location").appendChild(templeLocationPlace);
    Document.querySelector("temple-location").appendChild(templeLocationLength);
})

const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    templeList = await response.json();
    output(templeList)
}
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };

const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "templeNameAscending":
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 < templeName2) return -1;
            else if (templeName1 > templeName2) return 1;
            else return 0;
          })
        );
        break;
      case "templeNameDescending":
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
      default:
        // using ternary operators
        output(
          templeList.sort((temple1, temple2) =>
            temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
              ? 1
              : temple2.templeName.toLowerCase() >
                temple1.templeName.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
  };
  document.querySelector("#sortBy").addEventListener("change", sortBy);


