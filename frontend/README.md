# Nestora Help Center (React frontend)

A simple React + Vite page that embeds the **Nestora Order Assistant**, built with Zoho Zia Agents.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Configuration

The chat IDs live in `.env` (copy `.env.example` to create it):

```
VITE_ZIA_ORG_ID=...
VITE_ZIA_ENTITY_ID=...
```

They come from the embed script in Zia Agents > Integrate.

## Folder structure

```
frontend/
├── index.html              # Page shell
├── public/favicon.svg
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Page layout
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TopicCards.jsx  # What the assistant can help with
│   │   ├── ChatWidget.jsx  # Mounts <agents-chatkit>, then loads Zoho SDK
│   │   ├── SuggestedQuestions.jsx  # Button + list of questions to ask
│   │   └── Footer.jsx
│   ├── hooks/useScript.js  # Loads an external script once
│   ├── utils/ziaChat.js    # Sends a question into the Zoho chat
│   ├── config/agent.js     # SDK URL and IDs from .env
│   ├── config/questions.js # The suggested questions (edit to add more)
│   └── styles/global.css
├── .env.example
└── vite.config.js
```
