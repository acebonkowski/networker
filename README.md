# networker

Prototype code for a LinkedIn CRM and outreach assistant. It includes a
minimal Chrome extension and a Node.js server leveraging the OpenAI API.

## Chrome Extension
- Located in the `extension/` folder.
- Adds a service worker (`background.js`) and a content script
  (`content.js`) that captures basic contact info on LinkedIn pages.
- Load the folder as an unpacked extension in Chrome for testing.

## Server
- Located in the `server/` folder.
- Express server with an endpoint `/categorize` that demonstrates how to
  call the OpenAI API to categorize a chat message.
- Install dependencies with `npm install` and start with `node server.js`.

This is an early scaffold and does not implement full CRM functionality,
but provides a starting point for building an AI‑powered LinkedIn agent.
