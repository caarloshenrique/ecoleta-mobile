import express from "express";
import { celebrate, Joi } from "celebrate";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import UsersController from "./controllers/UsersController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
const usersController = new UsersController();

routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.get("/users/:email/:password", usersController.login);
routes.post(
  "/users",
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  usersController.create
);
routes.put(
  "/users",
  celebrate(
    {
      body: Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  usersController.update
);
routes.delete("/users/:id", usersController.delete);
routes.get("/users/:id", usersController.show);
export default routes;
