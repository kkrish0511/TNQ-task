let form = document.querySelector("form");
let input = document.getElementById("inputField");
let output = document.getElementById("outputField");

form.addEventListener("submit", e => {
  e.preventDefault();
  let data = input.value;
  let fData = eval(data);
  var valueArr = fData.map(function (item) {
    return item.id;
  })
  valueArr.some(function (name, idx) {
    console.log(name);
    let test = valueArr.indexOf(name) != idx;
    console.log(test);
    if (test === true) {
        alert(`in json  is Duplicated Value `);
        output.value = "";
    } else {
        fData.map(e => {
          output.value += `<div class="root" data-id=${e.id}>
    <span class="username">${e.username}</span>
    <span class="video_name">${e.video_name}</span>
    <span class="additional_details">
        <span class="type">${e.action}</span>
    </span>
</div>`;
      })
    }
  });
});

//   var valueArr = fData.map(function (item) {
//     return item.id;
//   });
//   valueArr.some(function (item, idx) {
//     return valueArr.indexOf(item) != idx;
//     if (isDuplicate === true) {
//       alert(`in json  is Duplicated Value `);
//     } else {
//       output.value += `${item.id}`;
//     }
//   });
