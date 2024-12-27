概要
---
- [［試して理解］Linuxのしくみ ―実験と図解で学ぶOS、仮想マシン、コンテナの基礎知識](https://gihyo.jp/book/2022/978-4-297-13148-7) 用のディレクトリ
- [サポートページ](https://gihyo.jp/book/2022/978-4-297-13148-7/support)

学習用のコンテナの立ち上げ方
---
### 1.  Dockerコンテナを立ち上げる
```
docker container run --name ch1 --rm -it --mount type=bind,source="$(pwd)/sources",target=/my-work linux-ubuntu:20.04 bash
```

### 2. `psmisc`のインストール
```
apt install -y psmisc
```

### 3. `man`のインストール
```
<!-- unminimizeは基本yesでOK manも含めると数分かかるので気長に待つ -->
unminimize
apt install man
```

### 4. ユーザをグループに追加
```
sudo adduser `id -un` libvirt
sudo adduser `id -un` libvirt-qemu
sudo adduser `id -un` kvm
```

作成したファイルへ実行権限をつける
---
`chmod +x {ファイル名}`
