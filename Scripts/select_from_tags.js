async function select_from_tags(tp, filter = () => true) {
  let tags = Object.keys(app.metadataCache.getTags());
  tags = tags.map(x => x.replace("#", "")).filter(filter);
  return await tp.system.suggester(item => item, tags);
}

module.exports = select_from_tags;
