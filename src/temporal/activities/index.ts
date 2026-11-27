import { RegenerateHostSlotsInput, regenerateHostSlots as runSlotGeneration } from "../../services/slot.service.js";
import { sendBookingConfirmationEmail } from "../../mailer/booking.mailer.js";


export async function regenerateHostSlotsActivity(input: RegenerateHostSlotsInput) {
    await runSlotGeneration(input); 
}

export async function sendBookingConfirmationEmailActivity(bookingId: number) {
  await sendBookingConfirmationEmail(bookingId);
}
