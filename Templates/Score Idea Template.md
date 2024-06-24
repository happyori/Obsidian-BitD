---
tags: 
created-at: 
score-type:
---
<%* 
tp.hooks.on_all_templates_executed(async () => {
	const score_types = [ "Assault", "Stealth", "Transport", "Social", "Deception", "Occult" ];
	const tag = await tp.user.select_from_tags(tp, tag => score_types.contains(tag));
	const changeset = {
		tags: tag,
		"created-at": tp.date.now()
	};
	await tp.user.update_frontmatter(tp, changeset);
})
%>
### Description


### Contacts


## Obstacles


### Reward


### Details | Notes


### Reasons