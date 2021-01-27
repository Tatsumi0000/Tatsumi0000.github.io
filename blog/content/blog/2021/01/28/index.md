---
title: bitriseのxcode-test@2の設定を見直して40%近く早くした
date: "2021-01-28T18:45:00.000Z"
description: "色々ブログを改良しました。記事にタグ付け、h1タグを目次として出力、tailwindCSS、PurgeCSS、FontAwesome、ページネーションの導入をしました。"
tags: ["bitrise", "Xcode", "テスト"]
---

## bitriseを使った
今まで個人開発でTravis CIや、GitHub Actionsを使ったCI/CDはしたことがありましたが、iOSアプリを開発するに当たり、bitriseを使うことになりました。そこで、一度のCIの時間が20分近くかかっておりどうにか早くしようと頑張ってみました。といってもモバイルチームの方にいただいたアドバイスをそのまま試しただけですが。

## 高速化した方法
そもそもCIの時間がかかっていた問題は、`xcode-test@2`というstepでした。ここだけで19分近くかかっていました。ここは、初期設定からなにもいじらずにそのままにしていました。モバイルチームの方にビルドログなどを調査していただいた結果、`xcode-test@2`を`Workflow Editor`で開いて、`Debug`セクションの、`Should run a build before testing?`の設定を`no`にしました。

## 何をしているか
明日書く。