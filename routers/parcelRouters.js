const express = require("express");
const routers = express.Router();
const { parcelControllers } = require("../controllers");
const { auth } = require("../helper/authToken");

routers.get("/get-parcels-user", parcelControllers.getParcelsUser);
routers.get('/list', parcelControllers.listParcel)
routers.get('/get', parcelControllers.getParcel)
routers.post('/add', auth, parcelControllers.addParcel)
routers.delete("/delete", auth, parcelControllers.deleteParcel)

module.exports = routers;
