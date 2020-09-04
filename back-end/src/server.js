const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
const cor = require('cors')();
const admin = require("firebase-admin");
const serviceAccount = require("../key/key.json");
const cors = require('cors');
const { firestore } = require('firebase-admin');
app.use(cors());
app.use(bodyParser.json());
app.use(cor);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wutv-red.firebaseio.com"
});
app.post("/v1/video",async (req,res)=>{
  const video = req.body;
  console.log(video);
  try{
    let doc = await admin.firestore().collection("videos").doc().set(video);
    // if((await doc.get()).exists){
    //   res.send(video.id+" "+"is already exist")
    // }else{
    //   doc.set(video)
    //   res.send(video.id+" "+"is created");
    // }
  }catch(e){
    res.send("failed to create"+" "+video.id);
  }
})
app.get("/v1/videos", async(req, res) => {
    try {
        let videoDocList = await admin.firestore().collection("videos").listDocuments();
        let videoList = [];
        for (let i = 0; i < videoDocList.length; i++) {
            videoList.push((await videoDocList[i].get()).data())
        }
        res.send({
            videos: videoList
        })
    } catch (e) {
        res.send({
            videos: [],
        })
    }
})
app.get("/v1/video/:id",async(req,res)=>{
    const {id} = req.query;
    if(id==undefined){
        res.send({
            massage:"Please set the video id"
        });
        return;
    }
   let data= (await admin.firestore().collection("videos").doc(id).get()).data();
   res.send({
       data:data,
   })
   
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

    //----------------------------------------------- For User
    app.post("/v1/User/Post", async(req, res) => {
        const User = req.body;
        try {
            let doc = await admin.firestore().collection("User").doc(User.id);
            if ((await doc.get()).exists) {
                res.send(User.id + "is already existed");
            } else {
                await doc.set(User);
                res.send(User.id + " is create");
            }
        } catch (err) {
            res.send("failed" + User.id)
        }
    })
    app.get("/v1/User", async(req, res) => { /// get all items
        var ListOfUser = [];
        var ListOfUserRef = await admin.firestore().collection('User').listDocuments();
        for (const User of ListOfUserRef) {
            var eachUser = (await User.get()).data();
            ListOfUser.push(eachUser);
        }
        res.send(ListOfUser);
    })
    app.put('/v1/User/Put', async(req, res) => {
            const { id } = req.query;
            if (id == undefined) {
                res.send({
                    message: "Please set the vid"
                })
                return;
            } else {
                let doc = await admin.firestore().collection("videos").doc(id).delete();
                res.send({
                    message: id + " " + "deleted"
                })
            }

        })
        //----------------------------------------------- For User
   
    app.delete('/v1/User/Delete', async(req, res) => {
        let { id } = req.query;
        if (id == undefined) {
            res.send({
                "Status": "Please choose another id",

            });
        } else {
            await admin.firestore().collection("User").doc(id).delete();
            res.send({
                "Status": "delete " + id + " succesfull",
            })
        }
    });
    //---------------------------------- For Comment
    app.post("/v1/Comment/Post", async(req, res) => {
        const Comment = req.body;
        let CommentId = Comment.id;
        let CommentText = Comment.CommentText;
        try {
            let doc = await admin.firestore().collection("Comment").doc(CommentId, CommentText);
            if ((await doc.get()).exists) {
                res.send(Comment.id + "is already existed");
            } else {
                await doc.set(Comment);
                res.send(Comment.id + " is create");
            }
        } catch (err) {
            res.send("failed" + Comment.id)
        }
    })
    app.get("/v1/Comment", async(req, res) => { /// get all items
        var ListOfCmt = [];
        var ListOfCmtRef = await admin.firestore().collection('Comment').listDocuments();
        for (const Comment of ListOfCmtRef) {
            var eachCmt = (await Comment.get()).data();
            ListOfCmt.push(eachCmt);
        }
        res.send(ListOfCmt);
    })
    app.delete('/v1/Comment/Delete', async(req, res) => {
        let { id } = req.query;
        if (id == undefined) {
            res.send({
                "Status": "Please choose another id",

            });
        } else {
            await admin.firestore().collection("Comment").doc(id).delete();
            res.send({
                "Status": "delete " + id + " succesfull",
            })
        }
    });
    app.put('/v1/Comment/Put', async(req, res) => {
        const { id } = req.query;
        if (id == undefined) {
            res.send({
                Status: " Set the item id"
            });
            return;
        }
        let doc = admin.firestore().collection('Comment').doc(id);
        if ((await doc.get()).exists) {
            if (id != null) {
                try {
                    await doc.set(req.body);
                    res.send({
                        status: "Update Successfully !!!!!"
                    });
                    return;
                } catch (err) {
                    res.send({
                        status: "Update fail !!!!!"
                    });
                }
            }
            res.send({
                status: "id is not match"
            });
            return;
        }
        res.send({
            status: " id not exist"
        });
    });

    // app.get('/v1/videodemo', async(req, res) => {
    //     let createVideoRef = (await firestore().collection("videos").add({})).id
    //     let createVideo = await firestore().collection("videos").doc(createVideoRef).set({
    //         "videourl":"dasdasdasd",
    //         "videoUUID": createVideoRef
    //     })
    //     res.send("OK")

    // });

    // app.post('/v1/addComment', async(req, res) => {
    //     // UUID VIdeo
    //     // FORM who
    //     const {videoUUID,from,commentContent} = req.body;
    //     let commentVideo = await firestore().collection("Comment").add({
    //         "videoUUID":videoUUID,
    //         "commentContent":commentContent,
    //         "from":from,
    //         "time":Date.now(),
    //     })
    //     res.send("OK")

    // });

    app.post('/v1/commentofVideo', async(req, res) => {
        // UUID VIdeo
        const {videoUUID} = req.body;
        let loadCommentQuery = firestore().collection("Comment").where('videoUUID',"==",videoUUID);
        let commentData = (await loadCommentQuery.get()).docs;
        commentData.sort((a,b)=>{
            
           return a.get('time') - b.get('time')
        })
        res.send(commentData)

    });


app.listen(port,'127.0.0.1', () => {
    console.log("server is running")
});

