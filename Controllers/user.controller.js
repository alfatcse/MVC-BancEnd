const users = require("../users.json");
const fs = require("fs");
const { use } = require("../routes/v1/user.route");
const { getDb } = require("../utils/dbConnect");
const { ObjectId } = require("mongodb");
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    console.log(page, limit);
    const db = getDb();
    const user = await db
      .collection("users")
      .find()
      .skip(+page * +limit)
      .limit(+limit)
      .toArray();
    console.log(user);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
module.exports.getUserDetail = async (req, res, next) => {
  try {
    const db=getDb();
    const {id}=req.query;
    console.log(id);
    const userDetail=await db.collection('users').findOne({_id:ObjectId(id)});
    return res.status(200).json({ success: true, data: userDetail });
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
    console.log("req", req.body);
    // if (
    //   req.body.id &&
    //   req.body.gender &&
    //   req.body.name &&
    //   req.body.contact &&
    //   req.body.address &&
    //   req.body.photoUrl
    // ) {
    //   users.push(req.body);
    //   fs.writeFile("users.json", JSON.stringify(users), function (err) {
    //     if (err) throw err;
    //   });
    //   return res.status(200).json({ success: true, data: "done" });
    // } else {
    //   return res
    //     .status(201)
    //     .json({ success: false, data: "Not update due to lack of data" });
    // }
    const db = getDb();
    const result = await db.collection("users").insertOne(req.body);
    console.log(result);
    res.send("done insert");
  } catch (error) {
    next(error);
  }
};
module.exports.updateUserData = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.body.gender);
    users.map((u) => {
      if (u.id === parseInt(id)) {
        console.log(u.name);
        if (req.body.name !== undefined) {
          u.name = req.body.name;
        }
        if (req.body.gender !== undefined) {
          u.gender = req.body.gender;
        }
        if (req.body.contact !== undefined) {
          u.contact = req.body.contact;
        }
        if (req.body.address !== undefined) {
          u.address = req.body.address;
        }
        if (req.body.photoUrl !== undefined) {
          u.photoUrl = req.body.photoUrl;
        }
        fs.writeFile("users.json", JSON.stringify(users), function (err) {
          if (err) throw err;
        });
        return res
          .status(200)
          .json({ success: true, data: "Updated Successfully" });
      } else {
        return res
          .status(200)
          .json({ success: true, data: "Updated Successfully" });
      }
    });
    return res.status(203).json({ success: false, data: "Can not update" });
  } catch (error) {
    next(error);
  }
};
module.exports.updateBulk = async (req, res, next) => {
  try {
    req.body.map((u) => {
      users.map((user) => {
        if (user.id === u.id) {
          if (u.name !== undefined) {
            user.name = u.name;
            console.log("uuuu", user.name);
          }
          if (u.gender !== undefined) {
            user.gender = u.gender;
            console.log("uuuu", user.gender);
          }
          if (u.contact !== undefined) {
            user.contact = u.contact;
            console.log("uuuu", user.contact);
          }
          if (u.address !== undefined) {
            user.address = u.address;
            console.log("uuuu", user.address);
          }
          if (u.photoUrl !== undefined) {
            user.photoUrl = u.photoUrl;
            console.log("uuuu", user.photoUrl);
          }
        }
      });
      console.log(users);
    });
    fs.writeFile("users.json", JSON.stringify(users), function (err) {
      if (err) throw err;
    });
    return res.status(200).json({ success: true, data: "bulk update" });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    console.log(req.params);
    return res.status(203).json({ success: false, data: "Can not update" });
  } catch (error) {
    next(error);
  }
};
