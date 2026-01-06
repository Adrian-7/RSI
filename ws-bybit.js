import WebSocket from "ws";
import { RSI } from "technicalindicators";
import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });

function sendAlert(text) {
  bot.sendMessage(CHAT_ID, text).catch(console.error);
}

let closes = [];
let prevRsi = null;
let wasBelow30 = false;
let lastCheck = 0;   // ultima verificare RSI
let lastAlertTime = 0;   // cand am trimis ultima alertă

// 1️⃣ — FUNCTIA DE ISTORIC
async function loadHistory() {
const url =
  "https://api.bybit.com/spot/v3/public/quote/kline?symbol=SOLUSDT&interval=30&limit=1000";

  const res = await fetch(url);
  const data = await res.json();

  const list = data.result.list.reverse(); // cele mai vechi primele

  for (const c of list) {
    closes.push(Number(c[4])); // close
  }

  console.log("Istoric încărcat:", closes.length, "lumânări");
}

// 2️⃣ — FUNCTIA PRINCIPALA
async function start() {
  await loadHistory();

  const rsiAtStart = RSI.calculate({
    values: closes,
    period: 14
  }).pop();

  console.log("RSI initial:", rsiAtStart);

  connectWS();
}

function connectWS() {
  const ws = new WebSocket("wss://stream.bybit.com/v5/public/spot");

  ws.on("open", () => {
    console.log("Conectat la WebSocket");

  ws.send(JSON.stringify({
    op: "subscribe",
    args: ["kline.30.SOLUSDT"]
  }));
  });

  ws.on("error", (err) => {
    console.log("⚠️ WebSocket error:", err.message);
  });

  ws.on("close", () => {
    console.log("🔌 Conexiune inchisa — reconectez in 3 secunde...");
    setTimeout(connectWS, 3000); // 🔁 DOAR WS, fara loadHistory()
  });

  ws.on("message", (data) => {
    const msg = JSON.parse(data);
    if (!msg.topic || !msg.data) return;

    const kline = msg.data[0];
    const { close } = kline;   // folosim close live
   // if (!confirm) return; 

    closes.push(Number(close));
    if (closes.length > 1000) closes.shift();

    const rsiValues = RSI.calculate({
      values: closes,
      period: 14
    });

    const rsi = rsiValues[rsiValues.length - 1];

    // 1️⃣ marcăm dacă RSI a fost sub 30 (în orice moment)
if (rsi < 30) {
  wasBelow30 = true;
}

// 2️⃣ verificăm DOAR o dată la 5 minute
const now = Date.now();
if (now - lastCheck < 5 * 60 * 1000) {
  return;
}
lastCheck = now;

// 3️⃣ dacă a fost sub 30 și acum e peste 31
if (wasBelow30 && rsi >= 31) {

  // 4️⃣ NU trimitem mai des de o dată la 3 ore
  if (now - lastAlertTime < 3 * 60 * 60 * 1000) {
    return;
  }

  lastAlertTime = now;

  const message = `
⚠️ SEMNAL — RSI a revenit din zona oversold
RSI curent: ${rsi.toFixed(2)}
`;

  sendAlert(message);
  console.log(message);

  // resetăm ciclul — așteptăm un nou scenariu
  wasBelow30 = false;
}

  prevRsi = rsi;
    });
}

// 3️⃣ — PORNIM BOTUL
start();
