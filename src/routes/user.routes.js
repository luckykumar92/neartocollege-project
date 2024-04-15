import { Router } from "express";
import {
  FPMail,
  changeCurrentPassword,
  contactUs,
  forgotPassword,
  getCurrentUser,
  getUserByEmail,
  getUserById,
  loginUser,
  logoutUser,
  mailVerification,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// router.get("/test", (req, res) => {
//   res.send("hi");
// });

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

router.route("/getuser").get(verifyJWT, getCurrentUser);
router.route("/getuserdetail").get(getUserById);
router.route("/getuserdetailbyemail").get(getUserByEmail);

router.route("/verifyemail").post(mailVerification);
router.route("/fpmail").post(FPMail);
router.route("/forgotpassword").post(forgotPassword);

router.route("/contactus").post(contactUs);

export default router;
