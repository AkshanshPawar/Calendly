import { prisma } from "../config/database.js";
import {
  CreateEventTypeDto,
  UpdateEventTypeDto,
} from "../dtos/event-type.dto.js";

export async function findByHostId(hostId: number) {
  const allEvent = await prisma.eventType.findMany({
    where: {
      hostId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allEvent;
}

export async function getById(id: number) {
  const event = await prisma.eventType.findUnique({
    where: {
      id,
    },
  });
  return event;
}

export async function create(
  hostId: number,
  data: CreateEventTypeDto & { slug: string },
) {
  const event = await prisma.eventType.create({
    data: {
      hostId,
      ...data,
    },
  });
  return event;
}

export async function update(id: number, data: UpdateEventTypeDto) {
  const event = await prisma.eventType.update({
    where: {
      id,
    },
    data: data,
  });
  return event;
}

export async function remove(id: number) {
  await prisma.eventType.delete({
    where: { id },
  });
}

export async function findByHostAndSlug(hostId: number, slug: string) {
  const event = await prisma.eventType.findFirst({
    where: {
      hostId,
      slug,
    },
  });
  return event;
}

export async function slugExistsForHost(hostId: number, slug: string) {
  const existing = await prisma.eventType.findFirst({
    where: {
      hostId,
      slug,
    },
  });
  return existing !== null;
}

export async function findActiveByHostIdAndEventSlug(
  hostId: number,
  slug: string,
) {
  const event = await prisma.eventType.findFirst({
    where: {
      isActive: true,
      hostId,
      slug,
    },
  });
  return event;
}
