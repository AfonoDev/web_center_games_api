var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");

const BUCKET = "web-games-center.appspot.com";

admin.initializeApp({
     credential: admin.credential.cert( 
            process.env.FIREBASE_PRIVATE_KEY 
              ? { 
                  type: "service_account", 
                  project_id: "web-games-center", 
                  private_key_id: "317f5b2502b9371cd143e488226624d1ffed48d3", 
                  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), 
                  client_email: process.env.FIREBASE_CLIENT_EMAIL, 
                  client_id: "104126728326795526067", 
                  auth_uri: "https://accounts.google.com/o/oauth2/auth", 
                  token_uri: "https://oauth2.googleapis.com/token", 
                  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs", 
                  client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r0g79%40web-games-center.iam.gserviceaccount.com", 
                }: serviceAccount 
          ), 
    storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImagem = (request, response, next) => {
    if (!request.file) return next();


    const imagem_video = request.file;
    const nomeArquivo = Date.now() + "." + imagem_video.originalname.split(".").pop();

    const file = bucket.file(nomeArquivo);

    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem_video.mimetype,
        }
    });

    stream.on("error", (e)=>{
        console.error(e);
    });

    stream.on("finish", async () =>{
        // tornar o arquivo publico
        await  file.makePublic();
        //obter a url publica
        request.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

        next();
    });

    stream.end(imagem_video.buffer);

}

module.exports = uploadImagem;
