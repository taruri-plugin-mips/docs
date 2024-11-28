# FAQ

::: tip
在这里我们会记录一些常见问题的解决方案。

如果你有任何问题，可以在 [GitHub Discussions](https://github.com/taruri-plugin-mips/.github/discussions/new?category=q-a) 中向我们提问，一起来增加这个文档的内容。
:::

## 在 LoongArch 上运行是否需要设置多个 npm 仓库源？

> 需要的，因为我们需要安装一些特殊的依赖。
>
> 具体步骤为：
> ```txt
> # .npmrc
> registry=https://registry.loongnix.cn:4873;https://registry.npmmirror.com
> ```
>
> 这样会先安装 loong64 架构下的 npm 包，如果没有找到，就会去 npm 官方源下载。

## 在 LoongArch 下出现无法正确安装 Rust 依赖的问题？

> 这大概率是因为 loong64 架构的部分依赖与其他的系统版本不同，所以请使用 `cargo update` 命令进行更新。

## 在 LoongArch 下无法直接运行 Tauri 的问题？

> 暂时纪录一下，使用 pnpm 的 [patchedDependencies](https://pnpm.io/zh/package_json#pnpmpatcheddependencies)
>
> 将 rollup 和 tauri 的依赖进行源码修改。
>
> 我们需要先修改 `package.json` 文件
>
> ```json
> {
>   "name": "tauri-template",
>   "type": "module",
>   "version": "0.0.0",
>   "private": true,
>   "devDependencies": {
>     "@tauri-apps/cli": "1.6.3",
>     "@rollup/rollup-linux-loong64-gnu": "4.25.0",
>     "@tauri-apps/cli-linux-loong64-gnu": "1.6.3"
>   },
>    "pnpm": {
>     "patchedDependencies": {
>       "@tauri-apps/cli@1.6.3": "patches/tauri-apps-cli@1.6.3.> patch",
>       "rollup@4.25.0": "patches/rollup@4.25.0.patch"
>     }
>   },
> }
> ```

## 出现例如 `version 'GLIBC_2.xx' not found` 的问题？

> 核心库如 `glibc` 经常与旧系统的兼容性出现问题。因此，我们必须使用打算支持的最旧的基础系统来构建 `Tauri` 应用程序。相对较旧的系统，如 Ubuntu 18.04 ，比 Ubuntu 22.04 更适合，因为在 Ubuntu 22.04 上编译的二进制文件对 `glibc` 版本的要求更高，所以在旧系统上运行时，我们会遇到这个错误。
>
> 具体可以看这些链接：
> - [tauri-apps/tauri#1355](https://github.com/tauri-apps/tauri/issues/1355)
> - [rust-lang/rust#57497](https://github.com/rust-lang/rust/issues/57497)

## 我们应该使用 `Node` 还是 `Cargo` ?

> 如果我们正在开发，那么可以使用 `Node` 来进行预览和开发。
>
> 如果我们正在编译，那么可以使用 `Cargo` 来进行编译。
