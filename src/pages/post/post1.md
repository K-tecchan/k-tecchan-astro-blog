---
layout: ../../layouts/MarkdownPostLayout.astro
title: first-post
---

aaaaaaaa
```js
const first = () => {
  setTimeout(() => console.log("task1 done"), 2000);
  console.log("function first done");
};

const second = () => console.log("function second done");

first();
second();
```

```ts
const hoge: string = "hogee";
```

```py {.main}
def hoge() {
  return 'hoge'
}

for i in range(10):
  print('hoge')
```

> hogeeeeee
