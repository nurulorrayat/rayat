fetch("stats.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (stats) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let stat of stats) {
      out += `
            <tr>

                <td>${stat.Rank}</td>
                <td>${stat.Name}</td>
                <td>${stat.Goals}</td>
                <td>${stat.Assists}</td>


            </tr>
        `;
    }

    placeholder.innerHTML = out;
  });
