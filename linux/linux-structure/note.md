# 学習ノート
## 2024/12/28
- Docker環境だとSMTがオフにできなかった ディレクトリ自体が存在しない？

```
root@7d37253841ae:/my-work# cat /sys/devices/system/cpu/smt/control
cat: /sys/devices/system/cpu/smt/control: No such file or directory
```

- [「［試して理解］Linux のしくみ【増補改訂版】」の実験環境を Docker で作成する方法と詰まったこと（M1Mac）](https://zenn.dev/msksgm/articles/20230814-linux-in-practice-2nd-docker#%E6%80%A7%E8%83%BD%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6) によると仮想ハードウェアが存在しないから、らしい
- ChatGPT先生は以下のようにおっしゃっている

```
コンテナ内で使用される /sys はホストのカーネル情報を参照しています。ただし、ホストから必要な情報が明示的にマウントされていない場合、一部のファイルやディレクトリが存在しないことがあります。
```
- ただ、ホストマシン側の設定がよくわからんかったので一旦スルーする
- こういうカーネルの挙動とかを学ぶためにはやっぱり仮想化コンテナだと厳しいような気もしてきている
  - 今はまだ浅パチャなのでコンテナでもいいか、という感じ

## 2024/12/14
- pstreeコマンドを実行しようとするが、`bash: pstree: command not found`になる
  - どうやらDockerは軽量化のために初期状態では最低限のコマンドしかインストールされていないらしい
    - [“pstree”を使ってあるプロセスの子プロセス・孫プロセスを確認する | ゲンゾウ用ポストイット](https://genzouw.com/entry/2019/04/09/091427/1327/#:~:text=%E6%99%AE%E9%80%9A%E3%81%ABCD/DVD%E3%81%8B%E3%82%89%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%97%E3%81%9FLinux%E3%83%87%E3%82%A3%E3%82%B9%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%B8%88%E3%81%BF%E3%81%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%81%8C%E3%80%81%20Docker%20%E7%92%B0%E5%A2%83%E3%81%AF%E8%BB%BD%E9%87%8F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E5%BF%85%E8%A6%81%E6%9C%80%E4%BD%8E%E9%99%90%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%97%E3%81%8B%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%99%E3%80%82)
      - Dockerだと起動時に指定したコマンド`bash`が親プロセスになる
        - Dockerのコンテナはは1つのコマンドを実行するための領域らしいので、なるほどとなった
    - 逆にいうとこういうプロセスの仕組みを学ぶにはやっぱり物理マシンがいるのかもなーと思い始めた RasberryPieとかでうまく環境作ったりできないものだろうか
    –　[「［試して理解］Linux のしくみ【増補改訂版】」の実験環境を Docker で作成する方法と詰まったこと（M1Mac）](https://zenn.dev/msksgm/articles/20230814-linux-in-practice-2nd-docker#:~:text=Docker%20%E3%81%AE%20Ubuntu%20%E3%81%AF%E8%BB%BD%E9%87%8F%E5%8C%96%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E4%B8%80%E9%83%A8%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%8C%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%84%E3%81%A7%E3%81%99%E3%80%82)
  - そもそもDockerのUbuntuは軽量化のためにいろんなものが削ぎ落とされているらしい
    - [DockerのUbuntuをunminimizeで通常に戻す #Docker - Qiita](https://qiita.com/ssc-ynakamura/items/d69307a3d94bf81c363d)
  - unminimizeすると容量が大きくなるそうなので、もはや`pstree`や`man`はDockerfileではなく直接コンテナ上でinstallする
    - `apt install -y psmisc`
    - `unminimize`, `apt install man`
  - もはや起動時のスクリプトを作ってコンテナ起動時に実行してもらった方がいい気がしてきた
    - ただ、そうなると起動時のスクリプトをバインドマウントする必要がある
    - 実験用のスクリプトファイルもバインドマウントしたいので、複数バインドマウントする必要がある
      - わざわざdocker-composeを書くのも面倒なのでこの方向で整理したさある
    - でも起動時に実行権限つけてあげないといけないからあかんか、うーむ
  - とりあえずいつかやりたくなった時のためにリンクだけ貼っておく
    - [サーバ起動時に任意のスクリプトを実行する(dockerコンテナを起動する) #Docker - Qiita](https://qiita.com/zoe302/items/558404a3c6fad1c78e2f)
    - [Ubuntu 22.04で起動時に特定のコマンドを実行する方法](https://zenn.dev/zuzuzu/articles/ubuntu_startup_command)
    - [docker runで-vオプションで複数のマウントを設定する | codit](https://codit.pages.dev/codes/wn2rlkmpr4spwne75n82/)
  - あんまり本の内容は消化できなかったけど、いい寄り道ができたからいいか

## 2024/12/13
- p28まで読了

## 2024/12/09
- 第一章まで読了

## 2024/12/08
- Linuxの仕組みとは関係ないが、バインドマウントしてコードを実行することができた
  - 学んだことを実践できて嬉しさがある
- 本の内容を進めるなかで参考になったリンク
  - straceコマンドは別途`apt-get`でinstallが必要
    - [『試して理解 Linuxのしくみ』の実験プログラムをVS CodeのRemote - Containersで動かす - kdnakt blog](https://kdnakt.hatenablog.com/entry/how-linux-works)
  - pythonのコードを実行するにはファイルに読み取り・実行権限の付与が必要
    - [読み取り権限がなく実行権限だけのファイルが実行できる仕組みをstraceで追ってみた · DQNEO日記](https://dqn.sakusakutto.jp/2014/03/linux_permission_strace.html)
## 2024/12/08
- `--detach`を指定していると`-it`でホストマシンの標準出力につながらないので注意が必要