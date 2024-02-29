import { Payments } from "../../domain/Payments";
export interface INotificationService {
    sendMessage(payload: Payments):string;
}