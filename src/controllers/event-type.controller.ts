import { Request, Response } from "express";
import {
  createEventType as createEventTypeService,
  getEventTypeById as getEventTypeByIdService,
  getEventTypeByPublic as getEventTypeByPublicService,
  listEventTypes as listEventTypesService,
  removeEventType as removeEventTypeService,
  updateEventType as updateEventTypeService,
} from "../services/event-type.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function listEventTypes(req: Request, res: Response) {
  const eventTypes = await listEventTypesService(req.userId);
  return sendSuccess(res, eventTypes);
}

export async function getEventTypeById(req: Request, res: Response) {
  const { id } = req.params;
  const eventType = await getEventTypeByIdService(Number(id), req.userId);
  return sendSuccess(res, eventType);
}

export async function createEventType(req: Request, res: Response) {
  const eventType = await createEventTypeService(req.userId, req.body);
  sendSuccess(res, eventType, 201, "Event type created Successfully");
}

export async function updateEventType(req: Request, res: Response) {
    const { id } = req.params;
    const eventType = await updateEventTypeService(req.userId, Number(id), req.body);
    sendSuccess(res, eventType, 200, 'Event type updated successfully');
}

export async function removeEventType(req: Request, res: Response) {
    const { id } = req.params;
    await removeEventTypeService(req.userId, Number(id));
    sendSuccess(res, null, 200, 'Event type deleted successfully');
}

export async function getPublicEventType(req: Request, res: Response) {
    const { userId, slug } = req.params;
    const eventType = await getEventTypeByPublicService(Number(userId), String(slug));
    sendSuccess(res, eventType);
}
