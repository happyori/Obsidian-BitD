async function update_frontmatter(tp, changeset) {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    for (const key in changeset) {
      const value = changeset[key];
      frontmatter[key] = value;
    }
  });
}

module.exports = update_frontmatter;
