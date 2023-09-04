import connectToDatabase from '@/utils/db';
import user from "../../models/user";
import { withSession } from "@/utils/session"

// connectToDatabase();

const handler = withSession(async (req, res) => {
  const { username, password } = req.body;
  // const newUser = await user.findOne({ username, password });
  const newUser = {
    username: "tony",
    password: "1234",
  };
  
  if (!newUser) {
    res.status(401).json({ success: false, message: "Invalid username or password" });
  } else {
    // Set the user data to the session
    console.log(newUser);
    req.session.set("user", { name: newUser.username, email: newUser.email });
    await req.session.save();
    
    res.redirect("/");
    // res.status(200).json({ success: true, message: "User logged in", newUser });
  }
});

export default handler;
