# MIPS

> 在本章节会详细的描述如何在 mips 架构下的国产linux 操作系统。

:::warning

MIPS 是非常困难的。我们可以用 一无所有 来形容。所以我们的描述也相对简单。

:::

## 安装 node

我们可以在 [龙芯的开源社区](https://www.loongnix.cn/zh/)中发现，他们维护过一段时间的 MIPS 架构下的 Node.js [预构建二进制文件](http://ftp.loongnix.cn/os/loongnix/20/mips64el/pool/main/n/nodejs/)。
不过 他们 只提供到了 14.16.1。
如果我们想采用一套代码多端编译的方式，在 Linux 的这些平台之下，MIPS就是我们的短板。


## 安装 rust

我们将会在这个社区中去维护一个 mips 架构下的 rust 预构建二进制文件。

如果你需要一个最新版本的 rust，你可能需要研究一下如何在 mips 架构下手动编译 rust。

