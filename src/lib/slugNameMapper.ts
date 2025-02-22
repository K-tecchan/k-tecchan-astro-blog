// key = スラッグ、value = 表示名
export const slugNameMapper = {
  astro: "Astro",
  linux: "Linux",
  note: "note",
  book: "book",
  oss: "OSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  rust: "Rust",
  mdx: "mdx",
  network: "network",
  test: "test",
  vitest: "Vitest",
  git: "Git",
  jest: "Jest",
} as const;

export type SlugType = keyof typeof slugNameMapper;