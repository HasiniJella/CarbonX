import os
import random


class SmsDeliveryError(Exception):
    """Raised when Twilio SMS cannot be delivered."""


def generate_otp() -> str:
    return str(random.randint(100000, 999999))


def _twilio_configured() -> bool:
    return all(
        os.getenv(k, "").strip()
        for k in ("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER")
    )


def send_phone_otp(phone: str, otp: str) -> None:
    """Send OTP via Twilio SMS. Raises SmsDeliveryError if Twilio is missing or fails."""
    account_sid = os.getenv("TWILIO_ACCOUNT_SID", "").strip()
    auth_token = os.getenv("TWILIO_AUTH_TOKEN", "").strip()
    from_number = os.getenv("TWILIO_PHONE_NUMBER", "").strip()

    if not _twilio_configured():
        raise SmsDeliveryError(
            "SMS service is not configured. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER in backend/.env."
        )

    try:
        from twilio.rest import Client

        client = Client(account_sid, auth_token)
        message = client.messages.create(
            body=f"Your CarbonX OTP is: {otp}. Valid for 10 minutes. Do not share this code.",
            from_=from_number,
            to=f"+91{phone}",
        )
        print(f"[TWILIO] SMS sent to +91{phone}, SID: {message.sid}")
    except Exception as e:
        raise SmsDeliveryError(f"Failed to send SMS: {e}") from e
