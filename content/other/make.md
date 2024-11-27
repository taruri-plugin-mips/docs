# 在 Linux 上编译安装 Node.js

如果你的系统没有办法通过类似 nvm 的方式进行 Node.js 的安装，
那么你可以通过源码编译的方式安装 Node.js。

## 下载 Node.js 源码

首先我们需要下载源码，可以在 [Node.js 的官方仓库](https://nodejs.org/download/source-code) 中下载我们所需要的版本。

:::tip
本节安装的 node 版本为 `18.20.5`，下载的目录为 `Downloads` 。
:::

```bash
wget https://nodejs.org/dist/v18.20.5/node-v18.20.5.tar.gz
```

## 解压缩 `.tar.gz` 文件

```bash
# 解压缩
tar -zvxf node-v18.20.5.tar.gz

# 进入解压后的目录
cd node-v18.20.5
```

## 生成 MakeFile

> 可能需要跟着提示安装 `Python3`

```bash
./configure
```

## 编译

```bash
make
```

## 把编译产出部署到系统目录下

```bash
sudo make install
```
