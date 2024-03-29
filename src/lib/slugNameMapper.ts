// key = スラッグ、value = 表示名
export const slugNameMapper = {
  astro: "astro",
  linux: "Linux",
  note: "note",
  book: "book",
  oss: "OSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  rust: "Rust",
  mdx: "mdx",
  network: "network",
} as const;

export type SlugType = keyof typeof slugNameMapper;