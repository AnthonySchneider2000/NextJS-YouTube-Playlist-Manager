import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    // remove the data associated with the session
    req.session.destroy();

    // return a response
    res.statusCode = 200;
    // res.json({ message: "Logged out" });
    res.redirect("/");
  },
  {
    // your session options here
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "music-db-session",
  }
);
