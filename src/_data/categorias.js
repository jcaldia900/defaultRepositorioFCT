const fetch = require("node-fetch");
const token =
  "bawRoSqmTPC_0S8b-aBhO9OBboFPmMSfhVlyWcHI50DlV2RTIZPzYoLcqxrHFjlg";

module.exports = async function () {
  let response = await fetch("https://graphql.apirocket.io/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        AllBdTrackJesuses(orderBy: ID_ASC) {
          nombre
        }
      }
  
`,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.AllTests);
      return json.data.AllTests;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
