import express from "express";
import { finishGithubLogin, getChangePassword, getEdit, logout, postChangePassword, postEdit, remove, startGithubLogin, see} from "../controllers/userController";
import { avatarUploadMiddleware, privatePageMiddleware, publicPageMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.route("/edit").all(privatePageMiddleware).get(getEdit)
    .post(avatarUploadMiddleware.single("avatar"),postEdit);
userRouter.route("/change-password").all(privatePageMiddleware)
    .get(getChangePassword).post(postChangePassword);
userRouter.get("/logout", privatePageMiddleware, logout);
userRouter.get("/:id", see);
userRouter.get("/github/start", publicPageMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicPageMiddleware, finishGithubLogin);

export default userRouter;