(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{560:function(a,r,e){"use strict";e.r(r);var t=e(0),s=Object(t.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"缘起"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缘起"}},[a._v("#")]),a._v(" 缘起")]),a._v(" "),r("p",[a._v("之前一直使用 "),r("code",[a._v("go")]),a._v(" 的 "),r("code",[a._v("wails")]),a._v(" 去开发桌面客户端，结果 "),r("code",[a._v("v3")]),a._v(" 一直难产，实在是等不下去了，今年正好瞅了瞅 "),r("code",[a._v("Rust")]),a._v("，作为练手的项目还是桌面客户端更让我提兴趣，挑了挑最终选择了"),r("a",{attrs:{href:"https://github.com/tauri-apps/tauri",target:"_blank",rel:"noopener noreferrer"}},[r("code",[a._v("Tauri")]),r("OutboundLink")],1),a._v(" 毕竟有开源基金的支持还是比野路子发展的更稳定一些。另外 "),r("code",[a._v("Tauri")]),a._v(" 也支持了手机端的开发，目前 "),r("code",[a._v("V2")]),a._v(" 已经发布了 "),r("code",[a._v("RC")]),a._v(" 版本，更让我兴趣大增。")]),a._v(" "),r("p",[a._v("因为之前有 "),r("code",[a._v("wails")]),a._v(" 的一丢丢经验，所以直接从 "),r("code",[a._v("Tauri V2")]),a._v(" 开始直接进行开发操作。")]),a._v(" "),r("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),a._v(" "),r("h2",{attrs:{id:"必备网址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#必备网址"}},[a._v("#")]),a._v(" 必备网址")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rust"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://tauri.app/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tauri"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"快速开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),r("p",[a._v("分别执行下面的命令")]),a._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("cargo")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" create-tauri-app\n"),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("cargo")]),a._v(" create-tauri-app "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rc")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("p",[a._v("第一个命令是安装 "),r("code",[a._v("tauri cli")]),a._v("。第二个命令是用于创建一个项目，会有以下选项提供选择：")]),a._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("✔ Project name \n✔ Identifier \n✔ Choose "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" language to use "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" your frontend \n✔ Choose your package manager \n✔ Choose your UI template \n✔ Choose your UI flavor \n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br")])]),r("h2",{attrs:{id:"使用-rustrover-tarui-组合进行开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-rustrover-tarui-组合进行开发"}},[a._v("#")]),a._v(" 使用 "),r("code",[a._v("RustRover")]),a._v(" "),r("code",[a._v("+")]),a._v(" "),r("code",[a._v("Tarui")]),a._v(" 组合进行开发")]),a._v(" "),r("p",[a._v("其实官网上面已经有详细的说明了，"),r("a",{attrs:{href:"https://v2.tauri.app/zh-cn/develop/debug/rustrover/",target:"_blank",rel:"noopener noreferrer"}},[a._v("在 RustRover 中调试"),r("OutboundLink")],1),a._v("，考虑到我这个老人家更喜欢手把手的教程，所以就直接把经验贴出来，直接看吧。")]),a._v(" "),r("h3",{attrs:{id:"打开项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打开项目"}},[a._v("#")]),a._v(" 打开项目")]),a._v(" "),r("p",[a._v("创建完项目后，使用 "),r("code",[a._v("RustRover")]),a._v(" 启动项目时会提示存在两个 "),r("code",[a._v("Cargo.toml")]),a._v(" 文件，选择 "),r("code",[a._v("src-tauri")]),a._v(" 目录下的那个。")]),a._v(" "),r("h3",{attrs:{id:"配置调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置调试"}},[a._v("#")]),a._v(" 配置调试")]),a._v(" "),r("h4",{attrs:{id:"cargo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cargo"}},[a._v("#")]),a._v(" "),r("code",[a._v("Cargo")])]),a._v(" "),r("ol",[r("li",[r("p",[a._v("在主菜单中转到 "),r("strong",[a._v("Run|编辑配置")])])]),a._v(" "),r("li",[r("p",[a._v("在 "),r("code",[a._v("Run/Debug Configurations")]),a._v(" 对话框中创建 "),r("code",[a._v("Cargo")])])]),a._v(" "),r("li",[r("p",[a._v("修改参数")]),a._v(" "),r("p",[a._v("a. 名称：这个随意如果为了方便识别可以考虑变更为 "),r("code",[a._v("Run Tauri App")])]),a._v(" "),r("p",[a._v("b. 命令：在 "),r("code",[a._v("run")]),a._v(" 后面追加 "),r("code",[a._v("--no-default-features")])])])]),a._v(" "),r("h4",{attrs:{id:"npm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" "),r("code",[a._v("npm")])]),a._v(" "),r("blockquote",[r("p",[a._v("如果在 "),r("code",[a._v("src-tauri")]),a._v(" 目录下的 "),r("code",[a._v("tauri.conf.json")]),a._v(" 这个文件中存在 "),r("code",[a._v('"beforeBuildCommand": "yarn build"')]),a._v(" 的话，可以参考下面这个教程\n"),r("code",[a._v("npm")]),a._v("、"),r("code",[a._v("pnpm")]),a._v("、"),r("code",[a._v("yarn")]),a._v(" 都是支持的，这里以 "),r("code",[a._v("yarn")]),a._v(" 为例。")])]),a._v(" "),r("ol",[r("li",[r("p",[a._v("在主菜单中转到 "),r("strong",[a._v("Run|编辑配置")])])]),a._v(" "),r("li",[r("p",[a._v("在 "),r("code",[a._v("Run/Debug Configurations")]),a._v(" 对话框中创建 "),r("code",[a._v("npm")])])]),a._v(" "),r("li",[r("p",[a._v("修改参数")]),a._v(" "),r("p",[a._v("a. 脚本：添加 "),r("code",[a._v("dev")])])])]),a._v(" "),r("h3",{attrs:{id:"运行项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[a._v("#")]),a._v(" 运行项目")]),a._v(" "),r("p",[r("strong",[a._v("先")]),a._v("启动 "),r("code",[a._v("npm")]),a._v("，再启动 "),r("code",[a._v("Run Tauri App")]),a._v("，否则会造成有窗口没有内容的情况")])],1)}),[],!1,null,null,null);r.default=s.exports}}]);