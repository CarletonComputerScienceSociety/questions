import axios from "axios";

export enum DiscordMessageType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INFO = "INFO",
}

interface DiscordMessage {
  type: DiscordMessageType;
  data: any;
}

const TYPE_TO_EMOJI = {
  [DiscordMessageType.SUCCESS]: "✅",
  [DiscordMessageType.ERROR]: "🚨",
  [DiscordMessageType.INFO]: "ℹ️",
};

export const sendAlert = async (message: DiscordMessage) => {
  const alertWebhook =
    "https://discord.com/api/webhooks/1282054916797501520/nP9e25-C92uG5O58aLOdZHMNAJBU8kVb2GQJFRf4NUHqLmoEkLJJjNEn1NhbHHiiOwbV";
  const emoji = TYPE_TO_EMOJI[message.type];
  try {
    const jsonFormatted = JSON.stringify(message, null, 2);
    const discordFormatted = "```json\n" + jsonFormatted + "\n```";
    await axios.post(alertWebhook, {
      content: `${emoji} **Questions Repository Alert: ${message.type === DiscordMessageType.ERROR ? "<@147881865548791808>" : ""}** ${discordFormatted}`,
    });
  } catch (error) {
    console.error("Failed to send Discord message", error);
  }
};
