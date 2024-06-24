---
tags: <% tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>
created-at: <% tp.date.now() %>
---
### Summary Bullet points
- 

<% await tp.file.rename(`Notes on ${tp.date.now("MMM Do YYYY")}`) %>