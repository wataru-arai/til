FROM ubuntu:20.04

# see: https://qiita.com/mochi_yu2/items/af80a3adc7ff70e58807

RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
RUN apt-get update
RUN apt-get install -y binutils build-essential golang sysstat python3-matplotlib python3-pil fonts-takao fio qemu-kvm virt-manager libvirt-clients virtinst jq libvirt-daemon-system strace
