import { db } from "../../db";
db.sequelize.sync();
const { User } = db.User;

export default async (info) => {
  const existEmail = await User.findOne({
    where: {
      email: info.email,
    },
  });
  console.log(existEmail);
  if (!existEmail) {
    const newUser = await User.create(info);
    return newUser;
  } else throw new Error("This email is alredy in use");
};