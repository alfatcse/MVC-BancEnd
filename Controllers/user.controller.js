let users = [
  {
    id: 0,
    gender: "male",
    name: "alfat",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 1,
    gender: "female",
    name: "jahan",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 2,
    gender: "male",
    name: "rony",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 3,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 4,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 5,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 6,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 7,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 8,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 9,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  },
  {
    id: 10,
    gender: "male",
    name: "korim",
    contact: "0172",
    address: "Bang",
    photoUrl:
      "https://res.cloudinary.com/dmsgdonea/image/upload/v1669070726/fox_family16_fskfno.jpg",
  }
];
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
