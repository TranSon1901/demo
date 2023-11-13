const sharp = require('sharp');
function resizeImg(inputFile){
  console.log(inputFile.fieldname);
  outputFile = "";
  sharp(inputFile).resize({ height: 400, width: 1600 }).toFile(outputFile)
  .then(function(newFileInfo) {
    console.log(newFileInfo);
    console.log("Success");
  })
  .catch(function(err) {
      console.log("Error occured");
  });
}
module.exports = resizeImg;
