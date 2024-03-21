const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors(), express.json());
port = 3030;

app.listen(port, () => {
  console.log("Server listening to port ::" + port)
})

//Ex1
const imagesDirPath = __dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Imatges";
app.get("/llegirImatgesNaciriFernandez", (req, res) => {

  const files = fs.readdirSync(imagesDirPath);
  for (const file of files) {
    if (path.extname(file) === '.jpg') {
      const readableStream = fs.createReadStream(path.join(imagesDirPath, file), {highWaterMark: 4096}); //highWaterMark = amount of chunks per wave
      console.log("Image: " + file);

      readableStream.on('data', (chunk) => {
        const buffer = Buffer.from(chunk);
        console.log(buffer);
      });

      readableStream.on("end", () => {
        console.log("\n" + file + " Ended");
      });
    }
  }
});

//Ex2
app.get("/mostraNomsNaciriFernandez", (req, res) => {

  function readDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const path = dir + `\\` + file;
      const stats = fs.statSync(path);
      if (stats.isDirectory()) {
        console.log("Directory: " + path);
        readDirectory(path);
      } else if (stats.isFile()) {
        console.log("File: " + path);
      }
    })
  }


  const absoluteRoute = "C:\\IdeaProjects\\2nDAM\\AAD Recuperacio\\UF1\\UF1ExIsmaelNaciriFernandez\\src\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez";
  console.log("TEST WITH " + absoluteRoute + "\n")
  readDirectory(absoluteRoute);

  const relativeRoute = __dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez";
  console.log("\n\nTEST WITH " + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez" + "\n");
  readDirectory(relativeRoute);
});


//Ex3
app.put("/writeBuffersNaciriFernandez", (req, res) => {
  if (fs.existsSync(__dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Documents\\Buffers") === false) {
    console.log("Heello")
    fs.mkdirSync("..\\src\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Documents\\Buffers", {recursive: true});
  }
  const writeStream = fs.createWriteStream(__dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Documents\\Buffers\\ex4IsmaelNaciriFernandez.txt", {
    flags: "a+",
    encoding: "utf8"
  });

  const nameBuffer = Buffer.from("Ismael\n");
  writeStream.write(nameBuffer);
  const surnameBuffer = Buffer.from("Naciri\n");
  writeStream.write(surnameBuffer);
  const secondSurnameBuffer = Buffer.from("Fernandez\n");
  writeStream.write(secondSurnameBuffer);

  writeStream.write("Dijous 21/03/2024");

  console.log("Writing done!!");
});

//Ex4
app.post("/copiaFitxerNaciriFernandez", (req, res) => {
  const readPath = __dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Documents\\FitxerOrigen.txt"
  const writePath = __dirname + "\\assets\\UF1_ExamenAaDIsmaelNaciriFernandez\\Documents\\Docs1\\FitxerDesti.txt";
  fs.readFile(readPath, 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading the file  |  " + err);
    }

    if (writePath) {
      fs.writeFile(writePath, data, (err) => {
        if (err) {
          console.log("Error writing to file  ||  " + err);
        } else {
          console.log(`El contingut del fitxer ${path.basename(readPath)} s'ha COPIAT correctament en el fitxer ${path.basename(writePath)}`);
        }
      })
    } else {
      //Here you can use either writeFileSync and flag 'a+', or with fs.appendFile
      //Both append the tedxt given to the file provided, if the file does not exists, it creates it
      fs.appendFile(writePath, data, (err) => {
        if (err) {
          console.log("Error appending or creating the file  ||  " + err);
        } else {
          console.log(`El contingut del fitxer ${path.basename(readPath)} s'ha CONCATENAT correctament en el fitxer ${path.basename(writePath)}`)
        }
      })
    }
  })
});
