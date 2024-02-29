import { NotificationPaymentUseCase } from "../application/NotificationPaymentsUseCase";
import { PaymentsRepository } from "../domain/PaymentsRepository";
import { ResponseRepository } from "./ResponseRepository";
import { NotificationController } from "./controller/NotificationPaymentsController";
import { Server } from "socket.io";
import { NotificationService } from "./NotificationService/NotificationService";

const responseQueue = new ResponseRepository(); 
const notificationService = new NotificationService();

const noticationPaymentsUseCase = new NotificationPaymentUseCase(responseQueue, notificationService);

export const notificationQueueController = new NotificationController(noticationPaymentsUseCase);  