import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import {
  createProxyMiddleware,
  responseInterceptor,
} from "http-proxy-middleware";

const port = process.env.PORT || 4008;
const App = express();
const BASE_URL: string = "https://g1api.finlogix.com/v1";

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.get("/post/analysis", async (req: Request, res: Response) => {
  let url = "https://g1api.finlogix.com/v1/post/analysis?per_page=12&page=1";
  let { data } = await axios.get(url);
  res.json(data);
});

App.post("/auth/login/email", async (req: Request, res: Response) => {
  let url = (email: string, password: string) =>
    `https://g1api.finlogix.com/v1/auth/login/email?email=${email}&password=${password}`;
  let { body } = req;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.post(url(body.email, body.password), config);
  res.json(data);
});
App.get("/me/user/info", async (req: Request, res: Response) => {
  let url = (token: any) =>
    `https://g1api.finlogix.com/v1/me/user/info?token=${token}`;
  let {
    query: { token },
  } = req;
  const { data } = await axios.get(url(token));
  res.json(data);
});
App.post("/me/user/logout", async (req: Request, res: Response) => {
  let url = (token: any) =>
    `https://g1api.finlogix.com/v1/me/user/logout?token=${token}`;
  let {
    query: { token },
  } = req;
  await axios.post(url(token));
  res.status(200).json({});
});

App.get("");
App.listen(port, () => {
  console.log(`server is on ${port}`);
});
