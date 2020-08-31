const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
const admin = require("firebase-admin");
const serviceAccount = require("../key/key.json");

app.use(bodyParser.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wutv-red.firebaseio.com"
});
app.post("/v1/video",async (req,res)=>{
  const video = req.body;
  console.log(video);
  try{
    let doc=await admin.firestore().collection("videos").doc(video.id);
    if(await (await doc.get()).exists){
      res.send(video.id+" "+"is already exist")
    }else{
      doc.set(video)
      res.send(video.id+" "+"is created");
    }
  }catch(e){
    res.send("failed to create"+" "+video.id);
  }
})
app.get("/v1/videos",async (req,res)=>{
  try{
    let videoDocList = await admin.firestore().collection("videos").listDocuments();
    let videoList = [];
    for(let i=0;i<videoDocList.length;i++){
      videoList.push((await videoDocList[i].get()).data())
    }
    res.send({
      videos: videoList
    })
  }catch(e){
    res.send({
      videos :[],
    })
  }
})
app.put("/v1/video/:id",async (req,res)=>{
  const {id} = req.params;
  if(id == undefined){
      res.send({
          massage:"Please set the vid"
      })
      return;
  }
  let doc = admin.firestore().collection("videos").doc(id);
  if((await doc.get()).exists){
      if(id == req.body.id){
          try{await doc.set(req.body);
              res.send({
                  massage:"Update Successfully"
              })
              return;
          }catch(e){
                  res.send({
                      message:"update unsuccessfully"
                  })
              }return;
      }res.send({
          message:"id is not match"
      });
      return;
  }
  res.send({
      message:"Id does not exist"
  });
})
app.delete("/v1/video/:id",async (req,res)=>{
  const {id}=req.params;
  if(id==undefined){
      res.send({
          message:"Please set the vid"
      })
      return;
  }else{ 
      let doc = await admin.firestore().collection("videos").doc(id).delete();
      res.send({
          message:id+" "+"deleted"
      })
  }
 
})
app.listen(port, () => {
  console.log("server is running")
})