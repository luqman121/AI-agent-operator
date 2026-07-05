import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export type BusinessType =
  | "real-estate"
  | "restaurant"
  | "clinic"
  | "clothing"
  | "salon"
  | "general";

interface DemoChatPayload {
  businessType: BusinessType;
  message: string;
  sessionId: string;
  language: string;
  messages?: Array<{
    role: "ai" | "user";
    content: string;
  }>;
}

const fallbackReplies: Record<BusinessType, string> = {
  "real-estate":
    "Great! Are you looking to buy or rent? And what's your approximate budget?",
  restaurant: "Sure! Would you like to book a table or see the menu? How many people?",
  clinic: "Of course. Would you like to book an appointment? What service do you need?",
  clothing:
    "Nice! Are you looking for men's or women's wear? Any particular occasion?",
  salon: "Sure. Would you like to book an appointment? Which service do you need?",
  general: "Of course. Tell me a bit more about what you need and I'll help you step by step.",
};

function getFallbackReply(businessType: BusinessType): string {
  return fallbackReplies[businessType] ?? fallbackReplies.general;
}

function isValidBusinessType(value: unknown): value is BusinessType {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(fallbackReplies, value)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<DemoChatPayload>;

    const { message = "", sessionId = "", language = "en", messages } = body;

    const businessType = isValidBusinessType(body.businessType)
      ? body.businessType
      : "general";

    const webhookUrl = process.env.N8N_DEMO_WEBHOOK_URL?.trim();

    if (!webhookUrl) {
      return NextResponse.json({
        reply: getFallbackReply(businessType),
      });
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          businessType,
          message,
          sessionId,
          language,
          messages,
          timestamp: new Date().toISOString(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseText = await response.text();
      let parsedResponse: unknown = null;
      try {
        parsedResponse = responseText ? JSON.parse(responseText) : null;
      } catch {
        parsedResponse = responseText;
      }

      if (!response.ok) {
        return NextResponse.json({
          reply: getFallbackReply(businessType),
        });
      }

      const webhookResponse =
        parsedResponse &&
        !Array.isArray(parsedResponse) &&
        typeof parsedResponse === "object"
          ? (parsedResponse as { reply?: unknown })
          : null;

      if (
        typeof webhookResponse?.reply === "string" &&
        webhookResponse.reply.trim().length > 0
      ) {
        return NextResponse.json({
          reply: webhookResponse.reply,
        });
      }

      return NextResponse.json({
        reply: getFallbackReply(businessType),
      });
    } catch {
      return NextResponse.json({
        reply: getFallbackReply(businessType),
      });
    }
  } catch {
    return NextResponse.json(
      {
        reply: fallbackReplies.general,
      },
      { status: 200 }
    );
  }
}
