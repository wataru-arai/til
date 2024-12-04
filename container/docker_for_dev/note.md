# 学習ノート
## 2024/12/04
- 動作を検証するためにはシンプルなUbuntuとかMysqlとかのイメージから始める
- mountするにもデータがどこに格納されるのかを知っていないといけない
- バインドマウントはコンテナ操作がホストマシンに影響するので注意が必要
- イメージによっては拡張機能をinstallするなど、便利なコマンドを用意している
  - Docker Hubの`Overview`に記載があったりする
  - ちなみにpostgresは記載は[ここ](https://hub.docker.com/_/postgres#:~:text=postgres%3A15%2Dalpine-,Additional%20Extensions,-When%20using%20the)にありそう
    - Alpineベースだった気がしないでもなく、めんどくさそう

## 2024/12/03
- Dockerfile（RUN命令）を作るためにはlinuxの知識も必要
- 実際は作成したコンテナをbashで起動してコマンドを実行→うまく動いたものをDockerfileにコピペするようなイメージ
  - bashでcontainerを起動するには（imageによると思うけど）`docker container run -it my-ubuntu:22.04 bash`のようにする

## 2024/10/29
- `--detach`をつけた場合、コンテナがバックグラウンドで動作しているかを確認するのは`docker container logs`を使う
- あとは`docker container ls --all`も使う

## 2024/10/28
- かなり久しぶりになってしまった
- ネットワークの知識が不足している どこかで折を見てやっておかないと
- mysqlコマンでローカルサーバーとDBをportで接続することができるのか

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
