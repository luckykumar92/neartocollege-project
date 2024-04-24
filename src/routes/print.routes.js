import { Router } from "express";
import {
  createPrintData,
  getShopDataById,
  getShopLocationData,
  printOrder,
  uploadPrintFile,
} from "../controllers/print.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/createdata").post(
  upload.fields([
    {
      name: "shopImage",
      maxCount: 1,
    },
  ]),
  verifyJWT,
  createPrintData
);

router.route("/shopslocation").get(getShopLocationData);
router.route("/shopdata").get(getShopDataById);

router.route("/uploadprintfile").post(
  upload.fields([
    {
      name: "printfile",
      maxCount: 10,
    },
    {
      name: "coverImage",
      maxCount: 10,
    },
  ]),
  verifyJWT,
  uploadPrintFile
);

router.route("/printorder").post(verifyJWT, printOrder);

export default router;
