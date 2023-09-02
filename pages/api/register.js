import connectToDatabase from '@/utils/db';
import user from "../../models/user";

connectToDatabase();

//register function
export default async function handler(req, res) { // is the request is POST, create a new user
    const { method } = req; // This is the method of the request
  
    switch (method) {  
      case "POST": // If the method is POST
        try { // Try to create a new user
          const newUser = await user.create(req.body); // Create a new user with the data from the request body
          // res.status(201).json({ success: true, data: newUser }); // Send a response with the user data
          res.redirect("/Login");
        } catch (error) { // If there is an error
          res.status(400).json({ success: false }); // Send a response with an error
        }
        break; // Break out of the switch statement
      default: // If the method is not POST
        res.status(400).json({ success: false }); // Send a response with an error
        break; // Break out of the switch statement
    }
  }