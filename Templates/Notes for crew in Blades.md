---
tags:
created-at: 
---
### Summary Bullet points
- 

<%* 
tp.hooks.on_all_templates_executed(async () => {
	const tag = await tp.user.select_from_tags(tp, tag => tag.contains("Notes"))
	const changeset = {
		tags: tag,
		"create-at": tp.date.now()
	};
	await tp.user.update_frontmatter(tp, changeset);
})
%>
<% await tp.file.rename(`Notes on ${tp.date.now("MMM Do YYYY")}`) %>