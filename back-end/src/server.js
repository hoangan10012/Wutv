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
            Status: " Set the item id"
        });
        return;
    }
    let doc = admin.firestore().collection('User').doc(id);
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
})
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

app.listen(8080, () => {
    console.log("server is running")
})