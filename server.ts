import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const LEADS_FILE = path.join(process.cwd(), "leads.json");

app.use(express.json());

// Helper to read and write leads
function getLeads() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading leads file:", error);
  }
  return [];
}

function saveLeads(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing leads file:", error);
  }
}

// 1. Leads Record Endpoint
app.post("/api/leads", (req, res) => {
  const { name, email, phone, address, service, preferredContact, projectDetails } = req.body;
  if (!name || !phone || !service) {
    return res.status(400).json({ error: "Name, phone number, and service are required." });
  }

  const newLead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    name,
    email: email || "N/A",
    phone,
    address: address || "N/A",
    service,
    preferredContact: preferredContact || "Phone Call",
    projectDetails: projectDetails || "N/A",
    date: new Date().toISOString(),
    status: "New"
  };

  const leads = getLeads();
  leads.push(newLead);
  saveLeads(leads);

  console.log(`[Demo Notification Email Triggered] To: SSpowerwashing.clean@gmail.com | Subject: New Lead from ${name}!`);

  res.status(201).json({ success: true, lead: newLead });
});

// Admin Leads Fetch Endpoint
app.get("/api/leads", (req, res) => {
  res.json(getLeads());
});

// 2. Chatbot AI Assistant Endpoint
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      console.warn("WARNING: GEMINI_API_KEY is not defined or is placeholder. Chatbot will run in fallback mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are Spotless Solutions AI Assistant, an elite customer service chatbot for Spotless Solutions, a premium professional home exterior cleaning company based in and operating out of Mukwonago, Wisconsin, serving all of Waukesha County.

Team details:
- Spotless Solutions is ran by a dedicated, local 2-person team of licensed pressure washing experts (Will and Avery) based directly out of Mukwonago, WI.
- We use industry-specific, professional commercial-grade surface cleaners and soft-washing systems.

Our Core Services:
- Pressure Washing (high-pressure concrete washing)
- Driveway Cleaning (algae removal, oil stain treatments, pristine rinse)
- Fence Cleaning (restores dirty wood/vinyl fences to pristine color)
- Patio & Porch Cleaning (stain clearing, pavers, brick, wood surfaces)
- Pool Area Cleaning (slip-free pool deck scrubbing, mold sanitizing)
- House Exterior Washing (safe soft-washing technique to remove mildew without damaging siding, vinyl, stucco, brick)
- Gutter Cleaning (debris removal, unclogging downspouts, flushing, brightening)

Our Service Coverage Areas (based in Mukwonago, WI, serving all of Waukesha County):
Mukwonago, Waukesha, Pewaukee, Brookfield, New Berlin, Muskego, Hartland, Delafield, Oconomowoc, Sussex, and Menomonee Falls.

Our 5 Unique Selling Propositions (USPs):
1. 100% Satisfaction Guarantee (We do not leave until you are absolutely satisfied)
2. Highly Competitive Pricing (Premium results without the premium markup)
3. Premium Local Service (Always operated by owners Will and Avery, never sub-contracted)
4. Commercial Grade Equipment (High volume, controlled PSI, heated water capabilities)
5. Fast Response Times (We answer texts/calls instantly and send proposals within hours)

CRITICAL RULES:
1. SPECIFIC PRICING: If the user asks about prices, estimates, quotes, or how much services cost, you MUST NOT give specific ranges or numeric estimates because surfaces vary. You MUST say: "For accurate pricing, please submit our estimate request form and our team will contact you."
2. TONE: Be helpful, highly professional, warm, locally-minded, and encourage booking a free quote on our website or calling directly at (262) 422-6764. Keep your responses complete but concise (maximum 2-3 short paragraphs).`;

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const ai = getAiClient();
  if (!ai) {
    // Fallback response if Gemini API key is missing
    const textMsg = message.toLowerCase();
    let reply = "Hello! I am the Spotless Solutions bot. To assist you best, please let me know if you are looking for Pressure Washing, Siding, or Gutter Cleaning in Waukesha County. Operating out of Mukwonago, WI, we can respond and estimate quickly!";
    if (textMsg.includes("price") || textMsg.includes("cost") || textMsg.includes("estimate") || textMsg.includes("quote")) {
      reply = "For accurate pricing, please submit our estimate request form and Will and Avery will contact you with a customized, free of charge proposal.";
    } else if (textMsg.includes("area") || textMsg.includes("where") || textMsg.includes("location") || textMsg.includes("city")) {
      reply = "We are based out of Mukwonago, WI and proud to serve Waukesha County homeowners across Mukwonago, Waukesha, Pewaukee, Brookfield, New Berlin, Muskego, Hartland, Sussex, and Menomonee Falls. Simply schedule our service online!";
    } else if (textMsg.includes("service") || textMsg.includes("do you clean")) {
      reply = "We offer professional Pressure Washing, Driveway Cleaning, Fence Cleaning, Patio & Porch Cleaning, Pool Deck Cleaning, House Exterior Washing, and Gutter Cleaning. Let us know which one we can estimate for you!";
    }
    return res.json({ response: reply });
  }

  try {
    // Reconstruct conversation history format for chats API
    const formattedHistory: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        formattedHistory.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }

    const chatSession = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: formattedHistory
    });

    const result = await chatSession.sendMessage({ message });
    res.json({ response: result.text });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Failed to process chat response from Spotless Solutions Assistant." });
  }
});

// Vite or Static files handling
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Spotless Solutions Server] Running on http://0.0.0.0:${PORT}`);
  });
}

start();
