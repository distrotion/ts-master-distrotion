import express from "express";
import { Router } from "express";
import flow00101TEST from "./flow/001/01TEST";

// import flowloginlogin from "./flow/login/login";
// import flowtestflowtestflow from "./flow/testflow/testflow";

const router: Router = express.Router();
router.use(flow00101TEST);
// router.use(flow003flow003);
// router.use(flow004flow004);
// router.use(flow005flow005);
// router.use(flowloginlogin);
// router.use(flowtestflowtestflow);

export default router;