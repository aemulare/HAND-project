// const db = require('../models');


// // GET show
// exports.show = (req, res) => {
//   const { userId } = req.params;

//   db.users.findById(userId)
//     .then((user) => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ code: 404, message: 'user not found' });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ code: 500, message: 'Internal server error' });
//     });
// };
