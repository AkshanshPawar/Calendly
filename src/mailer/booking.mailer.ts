import { sendEmail } from "../config/nodemailer.js";
import { findBookingById } from "../repositories/booking.repository.js";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]!);
}

export async function sendBookingConfirmationEmail(bookingId: number) {
  const booking = await findBookingById(bookingId);
  if (!booking || booking.status !== "CONFIRMED") return;
  const when = booking.slot.startAt.toUTCString();
  await sendEmail(
    booking.inviteeEmail,
    `Booking Confirmation: ${bookingId}`,
    `<p>Hello ${escapeHtml(booking.inviteeName)},</p>
     <p>Your booking for ${escapeHtml(booking.eventType.title)} on ${escapeHtml(when)} has been confirmed.</p>
     <p>Thank you for booking with us.</p>`,
  );
}
