# AMD 64

> 在本章节会详细的描述如何在 AMD64 架构下的国产linux 操作系统。

## 安装 node

快速的安装 [node.js](https://nodejs.org)

你可能会好奇为什么在国产 linux 上不能直接使用 nvm 的方式安装 node。

因为可能你的网络环境根本无法访问 nvm 的服务器，所以我们需要使用其他方式进行安装。

### 建立 文件夹

```bash
cd /usr/local

mkdir nodejs
```

### 下载 nodejs

下载想要版本和架构的[预构建二进制文件](https://nodejs.org/en/download/prebuilt-binaries)

例如我们下载到 `/Download` 目录下

我们将下载的文件进行解压

```bash
tar -xvf node-xxx-linux-arm64.tar.xz
```

假设我们解压到 `/Download/nodejs` 目录下

### 移动文件

```bash
mv /Download/nodejs/* /usr/local/nodejs
```

### 建立软连接

```bash
ln -s /usr/local/nodejs/bin/node /usr/local/bin
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```

### 测试

```bash
node -v

npm -v
```

## 安装 pnpm

```bash
npm install -g pnpm
```

### 建立软连接

```bash
ln -s /usr/local/nodejs/bin/pnpm /usr/local/bin
ln -s /usr/local/nodejs/bin/pnpx /usr/local/bin
```

### 测试

```bash
pnpm -v
```

## 安装 Rust

### 使用 Rustup

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

::: details 更多信息
我们已审计了此 Bash 脚本，它只做了该做的事情。 但是，您最好在复制粘贴运行脚本之前，看看其源代码。 这是它的源代码：rustup.sh
:::

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 `rustup` 工具。 我们可能需要输入密码。 若安装成功，终端将显示以下内容：

```bash
Rust is installed now. Great!
```

### 测试

```bash
rustc --version
```

## 安装 Tauri

### 更新 apt

```bash
sudo apt update
```

### 安装依赖

```bash
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

