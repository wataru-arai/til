# 学習ノート
## 2024/10/09
- dockerを理解するコツ
  - プロセス・コマンド
    - [なるほどUnixプロセス ― Rubyで学ぶUnixの基礎 - 達人出版会](https://tatsu-zine.com/books/naruhounix) 関連して読むと良さそう
  - コンテナ・イメージ・Dockerfile
- コンテナ = ホストマシン上の「領域」
  - 「1つのコマンドを実行するために1つ作成する」？
    - lsコマンドを実行するためのコンテナも作れる
    - まだちょっと腹落ちできてないかも
- イメージはレイヤから成り立つ コンテナはイメージから作る
  - 複数のレイヤー → イメージ → コンテナ
- Dockerfileでイメージにレイヤーを追加する
- 頭の中のイメージとしてはこんな感じ？
  - コンテナ
    - イメージ + DockerFile
      - レイヤー（PHP）
      - レイヤー（Ubuntu）
      - レイヤー（php.ini）
      - レイヤー（git） ← DockerFileで追加されたレイヤー
