// Zia Agents settings. Values come from .env (see .env.example).
export const ZIA_SDK_URL =
  "https://agents.zoho.com/resources/addon-chat/assets/js/agents-chat-sdk.js";

export const ZIA_ORG_ID = import.meta.env.VITE_ZIA_ORG_ID;
export const ZIA_ENTITY_ID = import.meta.env.VITE_ZIA_ENTITY_ID;

// Same format Zoho's embed snippet uses: {orgId:"...", entityId:"..."}
export const ziaAgentsAttr = `{orgId:"${ZIA_ORG_ID}", entityId:"${ZIA_ENTITY_ID}"}`;
