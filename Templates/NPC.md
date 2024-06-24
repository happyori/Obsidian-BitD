---
tags:
  - NPC
age: 
friends-with: 
enemies-with: 
profession:
---
# Description
### Looks


### Goals


### Preferred Methods


### Profession


### Traits, Interests, Quirks
#### Trait

#### Interests

#### Quirk


---
# Notes
<%*
tp.hooks.on_all_templates_executed(async () => {
	const name = await tp.system.prompt("What is the NPC's name", "")
	const age = await tp.system.prompt("What is the NPC's age?", 20)
	await tp.file.rename(name);
	const changeset = { "age": Number(age) };
	await tp.user.update_frontmatter(tp, changeset);
});
%>