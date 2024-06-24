---
tags: 
created-at: 
score-type:
---
<%* 
tp.hooks.on_all_templates_executed(async () => {
	const file = tp.file.find_tfile(tp.file.path(true))
	const tag = await tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", "")))
	await app.fileManager.processFrontMatter(file, (frontmatter) => {
		frontmatter["tags"] = tag
		frontmatter["created-at"] = tp.date.now()
	})
})
%>
### Description


### Contacts


## Obstacles


### Reward


### Details | Notes


### Reasons