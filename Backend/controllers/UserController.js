const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const nodemailer=require('nodemailer');
const jsonWebToken = require("jsonwebtoken");

const signup =async  (req, resp) => {
  
    UserSchema.findOne({ email: req.body.email })
      .then((result) => {
        if (result == null) {
          const saltRounds = 10;
  
          bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            if (err) {
              return resp.status(500).json({ message: "something went wrong" });
            }
            const user = new UserSchema({
              
              fullname: req.body.fullname,
              username: req.body.username,
              email:req.body.email,
              password: hash,
              role: req.body.role || 'user',
            });
  
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "jalithakheminda@gmail.com",
                pass: "ormb vhrl rmrv wuxl",
              },
            });
          
            const mailOption = {
              from: "jalithakheminda@gmail.com",
              to: req.body.email,
              subject: "New Account Creation in SLTMobitel site.",
              text: "You have created Your Account! , Find A vacancy which is suitable most for you..",
            };
          
            transporter.sendMail(mailOption, function (error, info) {
              if (error) {
                return resp.status(500).json({ error: error });
              } else {
                return resp.status(200).json({ information: info.response });
              }
            });
            user
              .save()
              .then((saveData) => {
                resp.status(201).json({ message: "user was saved" });
              })
              .catch((error) => {
                resp.status(500).json(error);
              });
          });
        } else {
          resp.status(409).json({ message: "email is already exists" });
          
        }
      })
      .catch((error) => {
        resp.status(500).json(error);
      });
   
    
  };

  const login = async (req, resp) => {
    try {
      const selectedUser = await UserSchema.findOne({ email: req.body.email });
  
      if (!selectedUser) {
        return resp.status(404).json({ message: 'Email not found. Please check your email address.' });
      }
  
      // Load hash from your password DB.
      bcrypt.compare(req.body.password, selectedUser.password, function (err, result) {
        if (err) {
          return resp.status(500).json(err);
        }
  
        if (result) {
          const expiresIn = 3600;
          const token = jsonWebToken.sign(
            { username: selectedUser.username, role: selectedUser.role },
            process.env.SECRET_KEY,
            { expiresIn }
          );

          resp.setHeader('Authorization',`Bearer ${token}`);
  
          // Send back the user's role in the response
          resp.status(200).json({ message: 'Login successful', role: selectedUser.role, token });
        } else {
          resp.status(401).json({ message: 'Password is incorrect' });
        }
      });
    } catch (error) {
      resp.status(500).json(error);
    }
  };
 

  module.exports = {
    signup,login
 
  };
  