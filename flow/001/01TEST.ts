import express from "express";
import { Router } from "express";
// import mssql from "../../function/mssql";
// import mongodb from "../../function/mongodb";
// import httpreq from "../../function/axios";
// import axios from "axios";

const router: Router = express.Router();

router.get('/TEST', async (req, res) => {
  // console.log(mssql.qurey())
  res.json("TEST");
});

router.post('/TEST', async (req, res) => {
  //-------------------------------------
  console.log("--TEST--");
  console.log(req.body);
  let input = req.body;
  //-------------------------------------
  //-------------------------------------
  res.json(input);
});

export default router;