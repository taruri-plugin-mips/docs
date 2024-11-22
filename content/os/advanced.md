# 高级功能

在现在我们已经不需要参照上面的方法进行最终的编译。

我们发现了一个非常简单的方案，只需要我们的系统支持 rust 就可以实现编译。

## 前提

我们现在开发机器中编译好前端模块，然后将「项目 连同 dist 目录」一起拷贝到目标机器中。

## 安装环境

::: code-group

```bash [ARM]
# 安装 rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# 安装 tauri-cli
cargo install tauri-cli --version "1.6.0"

# 来到项目目录的 src-tauri 目录
cd src-tauri

# 运行 tauri
cargo tauri build
```

```bash [AMD]
# 安装 rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# 安装 tauri-cli
cargo install tauri-cli --version "1.6.0"

# 来到项目目录的 src-tauri 目录
cd src-tauri

# 运行 tauri
cargo tauri build
```

```bash [LoognArch]
# 安装 rust
curl https://github.com/taruri-plugin-mips/.github/releases/download/0.0.1/rust-loong64-install.sh | sh

# 安装 tauri-cli
cargo install tauri-cli --version "1.6.0"

# 来到项目目录的 src-tauri 目录
cd src-tauri

# 运行 tauri
cargo tauri build
```

```bash [MIPS]
# 安装 rust
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# 可能会安装失败，可能 Cross 还没有支持最新版
rustup install 1.71

# 设置默认版本

rustup default 1.71

# 安装 tauri-cli
cargo install tauri-cli --version "1.6.0"

# 来到项目目录的 src-tauri 目录
cd src-tauri

# 运行 tauri
cargo tauri build
```

:::

就可以实现编译了。
