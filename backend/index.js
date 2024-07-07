const express = require("express");
const cors = require("cors");
const {default : axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: "Raf2001", first_name: "Rafshan", last_name: "Rakeeb" },
      {
        headers: { "Private-Key": "a18b698d-9c5e-4466-b7a8-aecb1fd19a26" }
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // console.error("Error during authentication:", e);
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;

//     try {
//     const r = await axios.put(
//       "https://api.chatengine.io/users/",
//       { username: username, secret: "Raf2001", first_name: "Rafshan"},
//       {
//         headers: { "private-key": "a18b698d-9c5e-4466-b7a8-aecb1fd19a26" }
//       }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     // console.error("Error during authentication:", e);
//     return res.status(e.response.status).json(e.response.data);
//   }

// });

// app.listen(3001);
