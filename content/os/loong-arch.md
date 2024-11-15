# LoongArch

> 在本章节会详细的描述在 Loong64 架构下的国产 linux 操作系统如何使用 tauri

## 安装 nodejs


快速的安装 [node.js](https://nodejs.org)

你可能会好奇为什么 龙芯的开源社区 中推荐使用 nvm，但是在我的尝试中，是无法有对应的架构安装的。所以我依旧推荐使用预构建二进制文件的方式进行安装。

### 建立 文件夹

```bash
cd /usr/local

mkdir nodejs
```

### 下载 nodejs

下载想要版本和架构的[预构建二进制文件](https://github.com/taruri-plugin-mips/.github/releases/download/0.0.1/node-loong64.tar.xz)

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

### 下载 rustup 脚本

可以通过这个[链接](https://github.com/taruri-plugin-mips/.github/releases/download/0.0.1/rust-loong64-install.sh)下载 rustup 脚本

假设我们下载在了 `/Download` 目录下

### 运行脚本

```bash
sh /Download/rust-loong64-install.sh
```

此命令将下载以上脚本并开始安装用来安装最新版 Rust 的 rustup 工具。 我们可能需要输入密码。 若安装成功，终端将显示以下内容：

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

## FAQ

### 设置多个npm仓库源

```txt
# .npmrc
registry=https://registry.loongnix.cn:4873;https://registry.npmmirror.com
```

这样会先安装 loong64 架构下的 npm 包，如果没有找到，就会去 npm 官方源下载。

### 安装 loong64 架构下的 WASM 运行时。

```bash
pnpm add -D @rollup/rollup-linux-loong64-gnu
pnpm add -D @tauri-apps/cli-linux-loong64-gnu
```

### 出现无法正确安装 rust 依赖的问题

这大概率是因为 loong64 架构的部分依赖与其他的系统版本不同，所以请使用 `cargo update` 命令进行更新。

### 修改源码

暂时纪录一下，使用 pnpm 的 [patchedDependencies](https://pnpm.io/zh/package_json#pnpmpatcheddependencies)

将 rollup 和 tauri 的依赖进行源码修改。

我们需要先修改 `package.json` 文件

```json
{
  "name": "tauri-template",
  "type": "module",
  "version": "0.0.0",
  "private": true,
  "devDependencies": {
    "@tauri-apps/cli": "1.6.3",
    "@rollup/rollup-linux-loong64-gnu": "4.25.0",
    "@tauri-apps/cli-linux-loong64-gnu": "1.6.3"
  },
   "pnpm": {
    "patchedDependencies": {
      "@tauri-apps/cli@1.6.3": "patches/tauri-apps-cli@1.6.3.patch",
      "rollup@4.25.0": "patches/rollup@4.25.0.patch"
    }
  },
}
```

