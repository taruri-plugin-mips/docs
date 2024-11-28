# 主要功能

:::tip
在这里我们将会详细的描述一下我们所要做的主要功能。和一些基础概念的说明。
:::

## 一套配置可以运用在多种环境

我们计划设计出一套可以区分 CPU 架构的插件，让我们可以非常轻松根据不同的 CPU 架构来进行编译。

## 运行时

我们在这里把编译/运行时框架们对于不同 CPU 架构所需要的特殊依赖称为了运行时。

例如我们在使用 electron 时，我们在 `npm install` 的时候会自动从 `github/electron` 的 [release](https://github.com/electron/electron/releases/tag/v33.2.0) 中下载对应的依赖，而在这里我们就将这个特殊的依赖包称为 运行时。

而我们在使用 tauri 时，我们其实也有这一步。我们可以看到在 [@tauri-app/cli](https://github.com/tauri-apps/tauri/blob/dev/packages/cli) 的 [`packages.json`](https://github.com/tauri-apps/tauri/blob/dev/packages/cli/package.json#L26-L39) 中。这些会在我们安装 `@tauri-app/cli` 的时候自动下载对应 CPU 架构的依赖。

## 插件的开发思路

编写 tauri/build 的插件，完成对于不同 CPU 架构的编译。
