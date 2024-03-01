import io from "socket.io-client";
import { Payments } from "../../domain/Payments";
import { INotificationService } from "../../application/services/INotificationService";

export class NotificationService implements INotificationService {
  sendMessage(payload: Payments): string {
    const socket = io("https://ws-server-357t.onrender.com"); 

    socket.on("connect", () => {
      console.log(payload);
      
      console.log("Connected to server");
      socket.emit("message", payload);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    return "Mensaje enviado";
  }
}