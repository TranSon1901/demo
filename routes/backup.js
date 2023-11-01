

const express = require("express");
const router = express.Router();
const multer = require("multer");
const firebsae = require("firebase/app");
const { getStorage, ref, uploadBytes } = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyBB0ifb4kMuQVSrqWN5mrRRwEHpuMrQcfU",
    authDomain: "node-demo-62cac.firebaseapp.com",
    projectId: "node-demo-62cac",
    storageBucket: "node-demo-62cac.appspot.com",
    messagingSenderId: "512313007805",
    appId: "1:512313007805:web:4679d5764841dac6f3e1d4",
    measurementId: "G-KRWLTD6DD7"
};

firebsae.initializeApp(firebaseConfig);
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });


router.post("/", upload.single("filename"), (req, res) => {
  const storageRef = ref(storage, `files/${req.file.originalname}`);
  uploadBytes(storageRef, req.file.buffer).then((snapshot) => {
      console.log("file uplaoded");
  });
  console.log(req.file);
});
module.exports = router;