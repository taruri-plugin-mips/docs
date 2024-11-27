# MIPS

> 在本章节会详细的描述如何在 mips 架构下的国产linux 操作系统。

:::warning

MIPS 是非常困难的。我们可以用 一无所有 来形容。所以我们的描述也相对简单。

如果我们想采用一套代码多端编译的方式，在 Linux 的这些平台之下，MIPS就是我们的短板。

:::

## 安装 node

我们可以在 [龙芯的开源社区](https://www.loongnix.cn/zh/) 中发现，他们维护过一段时间的 MIPS 架构下的 Node.js [预构建二进制文件](http://ftp.loongnix.cn/os/loongnix/20/mips64el/pool/main/n/nodejs/)。
不过 他们 只提供到了 [14.16.1](https://nodejs.org/zh-cn/blog/release/v14.16.1)。

众所周知现有的前端框架和依赖基本都建立于 18.x 以上的版本。
这就导致了我们没有办法在 MIPS 架构下进行预览和开发。

当然我们可以[手动编译](/other/make)较高版本的 Node.js，但是这个过程非常的漫长且复杂，同时我们受到系统的限制，我们并没有办法编译过高版本，最高只能编译到 18.x。

## 安装 rust

Rust 是支持 MIPS 架构的，这在我们查找资料中不免可以发现，很多人都在 MIPS 架构下使用 Rust 进行开发。
那么我们可以先来尝试使用 [rustup](https://github.com/rust-lang/rustup) 来进行安装 Rust。

当然我们会发现无法安装成功，这是因为 MIPS 架构下的 Rust 并不是一等公民。
如果我们想知道一些具体的细节，可以查看这些地方来了解前因后果：

- [MIPS 编译器的讨论](https://rust-lang.zulipchat.com/#narrow/stream/131828-t-compiler/topic/MIPS.20failure.20on.20CI)  <sup>放弃的源头</sup>
- [rust-lang/compiler-team#648](https://github.com/rust-lang/compiler-team/issues/648)  <sup>对于放弃的讨论和最终论述</sup>
- [rust-lang/rust#115238](https://github.com/rust-lang/rust/pull/115238)  <sup>处理方案</sup>

这些事情都在告诉我们，我们没有办法平滑的安装使用 Rust 了，当然我们现在需要使用其他的方法来安装使用 Rust。
我们可以发现 [cross-rs](https://github.com/cross-rs) 社区在长期的维护着这些非一等公民的架构。

我们就可以实现曲线救国的方式来安装 Rust。



