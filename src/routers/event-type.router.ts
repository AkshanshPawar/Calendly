import { Router } from "express";
import {
  createEventType,
  getEventTypeById,
  listEventTypes,
  removeEventType,
  updateEventType,
} from "../controllers/event-type.controller.js";
import {
  createEventTypeSchema,
  UpdateEventTypeSchema,
} from "../dtos/event-type.dto.js";
import { requireUserId } from "../middlewares/require-user-id.js";
import { validate } from "../middlewares/validate.js";

export const eventTypeRouter: Router = Router();

eventTypeRouter.use(requireUserId);

eventTypeRouter.get("/", listEventTypes);
eventTypeRouter.get("/:id", getEventTypeById);
eventTypeRouter.post("/", validate(createEventTypeSchema), createEventType);
eventTypeRouter.patch("/:id", validate(UpdateEventTypeSchema), updateEventType);
eventTypeRouter.delete("/:id", removeEventType);
