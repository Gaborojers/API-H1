import express from "express";

import { notificationQueueController } from "./PaymentsDependencies";

export const paymentRouter = express.Router();

paymentRouter.post(
  "/",
  notificationQueueController.run.bind(notificationQueueController)
);