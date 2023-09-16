import express from "express";
import { Router } from "express";
// import mssql from "../../function/mssql";
import { mssqlquery } from "../../function/mssql" ;
import {mongodbinsertMany ,mongodbfind,mongodbfindsome ,mongodbupdate} from "../../function/mongodb";

const router: Router = express.Router();

router.post('/TEST', async (req, res) => {
  //-------------------------------------
  console.log("--TEST--");
  console.log(req.body);
  let output: any = {};
  let findDB: any = await mssqlquery(`SELECT  *  FROM [SAR].[dbo].[Master_User]`);
  // console.log(findDB['']);
  try {
    if (findDB['recordsets'].length > 0) {
      console.log(findDB['recordsets']);

      output = {
        "UserName": findDB['recordsets'][0][0]['UserName'],
        "NAME": findDB['recordsets'][0][0]['Name'],
        "Section": findDB['recordsets'][0][0]['Section'],
        "Roleid": findDB['recordsets'][0][0]['Roleid'] || '1',
        "Branch": findDB['recordsets'][0][0]['Branch'],
        "return": 'OK'
      }


    }
  } catch {

  }


  //-------------------------------------
  //-------------------------------------
  res.json(output);
});

router.post('/mongotest', async (req, res) => {

  // var output = await mongodb.insertMany("test","doc01",[{"data":2,"test":"haha"}]);
  // var output = await mongodb.find("test","doc01",{"data":2});
  // var upd = await mongodb.update("test", "doc01", { "data": 2 }, { $set: { b: 777 } });
  var output = await mongodbfind("LIMinstrument", "BALANCEdataSLUDGE", { });
  return res.json(output)
})


export default router;