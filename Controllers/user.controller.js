const users=require('../JSON/users.json');
console.log(users); 

module.exports.getAllUsers = async (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};
module.exports.getRandomUser = async (req, res, next) => {
  const random = Math.floor(Math.random() * 10);
  try {
    users.map((u) => {
      if (u.id === random) {
        return res.status(200).json({ success: true, data: u });
      }
    });
  } catch (error) {
    next(error);
  }
};
module.exports.saveUserData = async (req, res, next) => {
  try {
    
     console.log('req',req.body);
     return res.status(200).json({ success: true, data: 'done' });
  } catch (error) {
    next(error);
  }
};
