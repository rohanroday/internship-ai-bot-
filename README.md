# Nestora Order Assistant

A customer support chatbot for orders, delivery, returns, offers, gift cards and rewards, built with **Zoho Zia Agent Studio**. It answers only from two knowledge bases, and customers use it through a React web page.

> Nestora Home is a fictional store. All prices, timelines and contact details are sample values for testing.

## What's in this repo

| Path | What it is |
| --- | --- |
| `Orders_Delivery_Returns_Knowledge_Base_v1.1.docx` | Knowledge base 1: orders, delivery, tracking, damaged items, returns, refund timing and worked refund examples (18 pages) |
| `Offers_GiftCards_Rewards_Knowledge_Base_v1.1.docx` | Knowledge base 2: coupons, sales, gift cards, Nestora Wallet, reward points, referrals (15 pages) |
| `frontend/` | React + Vite help-centre page that embeds the Zia chat, with a Suggested questions button |

## How it works

1. A customer asks a question on the web page.
2. The Zia agent searches the knowledge base.
3. It replies only with what the knowledge base says, or politely refuses if the question is off-topic.

The agent's rules are set in Zia Agent Studio: an Agent Role, instructions, and custom guardrails (Do's and Don'ts). It has no tools, so it can only answer questions, never change orders.

## Run the frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173. See [frontend/README.md](frontend/README.md) for the folder structure.
