
      const userInfoDiv = document.getElementById("user-info");
      const additionalInfoDiv = document.getElementById("additional-info");
      const buttons = document.querySelectorAll("button");
      let currentUser;

      // fetch a random user when the page loads
      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
          currentUser = data.results[0];
          // display the user's name and image
          userInfoDiv.innerHTML = `
            <h2>${currentUser.name.first} ${currentUser.name.last}</h2>
            <img src="${currentUser.picture.large}" alt="Profile picture">
          `;
        });

      // handle clicks on the buttons
      buttons.forEach(button => {
        button.addEventListener("click", event => {
          const attr = event.target.getAttribute("data-attr");
          let info;
          if (attr === "age") {
            info = currentUser.dob.age;
          } else if (attr === "email") {
            info = currentUser.email;
          } else if (attr === "phone") {
            info = currentUser.phone;
          }
          additionalInfoDiv.innerHTML = `<p>${attr}: ${info}</p>`;
        });
      });

      // handle clicks on the "Get New User" button
      const getUserButton = document.getElementById("getUser");
      getUserButton.addEventListener("click", () => {
        fetch("https://randomuser.me/api/")
          .then(response => response.json())
          .then(data => {
            currentUser = data.results[0];
            // display the user's name and image
            userInfoDiv.innerHTML = `
              <h2>${currentUser.name.first} ${currentUser.name.last}</h2>
              <img src="${currentUser.picture.large}" alt="Profile picture">
            `;
            // clear the additional info
            additionalInfoDiv.innerHTML = "";
          });
      });
    