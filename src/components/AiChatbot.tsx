import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, User, Bot, Sparkles, Phone, FileText } from "lucide-react";
import { ChatMessage } from "../types";

export function AiChatbot({ onOpenEstimate }: { onOpenEstimate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi there! I am your Spotless Solutions Assistant. Will & Avery are out on a project in Waukesha County right now, but I can answer questions about our pressure washing services, process, or local cities we cover. How can I brighten your day?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue("");

    // Append user message
    const userMessageObj: ChatMessage = {
      role: "user",
      text: userMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMessageObj]);
    setIsTyping(true);

    try {
      // Reconstruct conversation history for Gemini context
      const chatHistory = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: chatHistory })
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.response || "I apologize, but I encountered an error. Please submit our quote form instead!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error(err);
      // Smart offline / client-side rule responder for static environments like GitHub Pages!
      const textMsg = userMsg.toLowerCase();
      let offlineResponse = "We'd love to help restore your property! Will and Avery are owner-operators of Spotless Solutions, based in and operating out of Mukwonago, WI. For fast booking, you can use our Free Estimate request form or call Will directly at (262) 422-6764.";
      
      if (textMsg.includes("price") || textMsg.includes("cost") || textMsg.includes("estimate") || textMsg.includes("quote") || textMsg.includes("how much")) {
        offlineResponse = "For accurate pricing, please submit our Free Estimate form, or feel free to call Will directly at (262) 422-6764. Since surfaces, mildew thickness, and square footage differ, we provide exact customized proposals free of charge!";
      } else if (textMsg.includes("area") || textMsg.includes("where") || textMsg.includes("location") || textMsg.includes("city") || textMsg.includes("zip")) {
        offlineResponse = "We proudly serve all of Waukesha County, WI, operating directly from our shop in Mukwonago, WI! This includes Mukwonago, Waukesha, Pewaukee, Brookfield, New Berlin, Muskego, Hartland, Delafield, Oconomowoc, Sussex, and Menomonee Falls.";
      } else if (textMsg.includes("siding") || textMsg.includes("damage") || textMsg.includes("pressure") || textMsg.includes("softwash") || textMsg.includes("soft wash")) {
        offlineResponse = "Great question! We use a professional 'soft-washing' technique for delicate siding (like vinyl, wood, stucco). This combines low-pressure water with eco-safe soaps to safely dissolve grime without stripping paint or cracking wood. It is 100% safe!";
      } else if (textMsg.includes("gutter") || textMsg.includes("leaf") || textMsg.includes("downspout")) {
        offlineResponse = "Our Gutter Cleaning service is comprehensive: we remove leaves and debris by hand, bag all solid waste, check downspouts for blockages, and flush channels with high-volume water to ensure perfect flow.";
      } else if (textMsg.includes("home") || textMsg.includes("be there") || textMsg.includes("present") || textMsg.includes("access")) {
        offlineResponse = "No, you don't need to be home for the wash! As long as we have access to exterior water hookups and gates are unlocked, Will and Avery can do the complete service and text before/after pictures.";
      } else if (textMsg.includes("insured") || textMsg.includes("license") || textMsg.includes("guarantee")) {
        offlineResponse = "Spotless Solutions is fully licensed and operated by owners Will and Avery. We offer our 100% satisfaction guarantee: you don't pay a single dime until you inspect and approve our work!";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: offlineResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-200">
          {/* Header */}
          <div className="bg-navy p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-tight">Spotless Solutions Bot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-slate-300 font-mono">Will & Avery's Assistant</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors p-1"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="bg-indigo-50/60 px-4 py-2 border-b border-indigo-100 flex items-center justify-between text-xs text-indigo-900 font-medium">
            <span>Guaranteed Local Owner Operated</span>
            <span className="bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full text-[10px] font-mono">2-Man Spec</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 self-end shadow-xs ${
                    msg.role === "user" ? "bg-slate-300" : "bg-navy"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User size={13} className="text-slate-700" />
                  ) : (
                    <Bot size={13} className="text-white" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-blue text-white rounded-br-none"
                        : "bg-white text-slate-800 shadow-xs border border-slate-100 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span
                    className={`text-[9px] text-slate-400 mt-0.5 font-mono ${
                      msg.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 max-w-[80%] mr-auto">
                <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center shrink-0 self-end shadow-xs">
                  <Bot size={13} className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-none text-xs text-slate-800 shadow-xs border border-slate-100">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Quick Suggestions */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto shrink-0 select-none no-scrollbar">
            <button
              onClick={() => setInputValue("What areas do you clean?")}
              className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors whitespace-nowrap border border-slate-100"
            >
              🗺️ Service Areas
            </button>
            <button
              onClick={() => setInputValue("Can pressure washing damage siding?")}
              className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors whitespace-nowrap border border-slate-100"
            >
              🛡️ Safe Softwash
            </button>
            <button
              onClick={() => setInputValue("Do we need to be home?")}
              className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors whitespace-nowrap border border-slate-100"
            >
              🏡 Home Access
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Wisconsin exterior care..."
              className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-blue"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-40 text-white rounded-xl p-2 transition-all flex items-center justify-center shrink-0 shadow-xs"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Call-to-action bottom lock */}
          <div className="bg-slate-900 p-2.5 flex items-center justify-around">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEstimate();
              }}
              className="flex items-center gap-1.5 text-white text-[11px] font-semibold hover:text-brand-blue transition-colors"
            >
              <FileText size={12} className="text-brand-blue" />
              Free Estimate
            </button>
            <div className="h-4 w-px bg-slate-700"></div>
            <a
              href="tel:2624226764"
              className="flex items-center gap-1.5 text-white text-[11px] font-semibold hover:text-brand-blue transition-colors"
            >
              <Phone size={12} className="text-emerald-400" />
              Call founder (Will)
            </a>
          </div>
        </div>
      )}

      {/* Launcher Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand-blue text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 animate-bounce cursor-pointer relative"
        aria-label="Open Chat with Spotless Solutions Assistant"
        id="chatbot-launcher-button"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
        )}
      </button>
    </div>
  );
}
