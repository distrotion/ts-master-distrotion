import express from "express";
import { Router } from "express";
// import mssql from "../../function/mssql";
import { query } from "../../function/mssql";
const router: Router = express.Router();

router.post('/TEST', async (req, res) => {
  //-------------------------------------
  console.log("--TEST--");
  console.log(req.body);
  let findDB = await query(`SELECT  *  FROM [SAR].[dbo].[Master_User]`);
  console.log(findDB);
 
  let input = findDB;
  //-------------------------------------
  //-------------------------------------
  res.json(input);
});


export default router;