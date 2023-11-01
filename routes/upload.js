const express = require("express");
const router = express.Router();
const firebsae = require("firebase/app");
const getAnalytics = require("firebase/analytics");
const multer = require('multer');
const { getStorage, ref, getDownloadURL,uploadBytesResumable } = require("firebase/storage");
const User = require("../models/User");

const firebaseConfig = {
  apiKey: "AIzaSyBB0ifb4kMuQVSrqWN5mrRRwEHpuMrQcfU",
  authDomain: "node-demo-62cac.firebaseapp.com",
  projectId: "node-demo-62cac",
  storageBucket: "node-demo-62cac.appspot.com",
  messagingSenderId: "512313007805",
  appId: "1:512313007805:web:4679d5764841dac6f3e1d4",
  measurementId: "G-KRWLTD6DD7"
};


//Initialize a firebase application
firebsae.initializeApp(firebaseConfig);
// getAnalytics.firebsae()

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//         const parts = file.mimetype.split("/");
//         cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
//     }
// })

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });
// const upload = multer({ storage: storage });

router.post("/", upload.single("filename"), async (req, res) =>{
  console.log(req.body);  
  console.log(req.file); 
//   return res.send("ok");
    try {
        const dateTime = giveCurrentDateTime();
        const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);
        const metadata = {
            contentType: req.file.mimetype,
        };
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);
    
        console.log('File successfully uploaded.');
        // return res.send({
        //     message: 'file uploaded to firebase storage',
        //     name: req.file.originalname,
        //     type: req.file.mimetype,
        //     downloadURL: downloadURL
        // })
        const newUser = User({
            ...req.body,
            img:downloadURL
          })
        await newUser.save();
        return res.status(200).send('user have create')
    } catch (error) {
        console.log("error")
        return res.status(400).send(error.message)
    }
});

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

module.exports = router;
