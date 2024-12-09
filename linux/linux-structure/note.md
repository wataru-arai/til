# 学習ノート
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