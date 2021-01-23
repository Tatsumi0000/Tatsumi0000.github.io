---
title: ブログを改良しました
date: "2021-01-23T18:45:00.000Z"
description: "色々ブログを改良しました。記事にタグ付け、h1タグを目次として出力、tailwindCSS、PurgeCSS、FontAwesome、ページネーションの導入をしました。"
tags: ["語り", "tailwindCSS", "Gatsby"]
---

## ブログ改良しました

色々ブログを改良しました。記事にタグ付け、h1タグを目次として出力、tailwindCSS、PurgeCSS、FontAwesome、ページネーションの導入をしました。

この中でも特に、tailwindCSSの導入にはかなり苦労しました。このブログはgatsby-starter-blogをもとに改良しているのですが、単純にtailwindCSSを導入しただけでは、レイアウトがグチャグチャになってしまいました。CSSの読み込ませる順番を変えたり、新しくCSSファイルを作成してtailwindCSSを上書きしたりしました。ブログの記事を表示する箇所だとなぜか、ディスクリプションが出てこなかったりしたので、[こちら](https://github.com/andrezzoid/gatsby-starter-blog-tailwindcss)のリポジトリにある、`markdown.css`を参考に書き換えました。

## 入れ子のディスクリプションだと下に不自然な空白があく
ただし、このままだと入れ子になったディスクリプションだと下に空白が空いてしまいました。そこで、以下のようにすることで解決しました。
```css{9-11}:title=markdown.css
.markdown ul {
    @apply list-disc mb-8;
}

.markdown ol {
    @apply list-decimal mb-8;
}

.markdown li > ul {
    margin-bottom: 0;
}
```
こうすることで、空白を無理やり消しました。CSSは難しいです。