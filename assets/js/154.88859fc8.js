(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{561:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"起因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),t("p",[s._v("上周我把系统从"),t("code",[s._v("Ubuntu 20.04")]),s._v("升级到了"),t("code",[s._v("22.04.1")]),s._v("，升级后发现一些问题，其中包括我一直在使用的"),t("code",[s._v("JetBrains Toolbox")]),s._v("无法运行了。鉴于我又是一个 Linux 小白，只能是找找有没有人同我一样遇到问题，自己解决问题目前还达不到这个状态。")]),s._v(" "),t("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("其实官网上面已经有相关问题了"),t("a",{attrs:{href:"https://toolbox-support.jetbrains.com/hc/en-us/community/posts/5302950817042-Ubuntu-22-04-Toolbox-IntelliJ-Idea-update",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu 22.04 - Toolbox - IntelliJ Idea update"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("怎么解决呢，其实就是在"),t("code",[s._v("Ubuntu 22.04")]),s._v("或者更高版本的系统千万不要安装"),t("code",[s._v("fuse")]),s._v("，官方称这可能会影响系统。只需要安装"),t("code",[s._v("libfuse2")]),s._v("即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libfuse2\n└─"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("git:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libfuse2\nReading package lists"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Done\nBuilding dependency tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Done\nReading state information"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Done\nThe following packages were automatically installed and are no longer required:\n  app-install-data-partner g++-9 genisoimage gnome-screenshot libamtk-5-0 libamtk-5-common libboost-thread1.71.0 libbrlapi0.7 libcbor0.6 libextutils-pkgconfig-perl\n  libffi7 libheimbase1-heimdal libisl22 libjsoncpp1 libmpdec2 libobjc-9-dev libpcre2-posix2 libperl5.30 libprotobuf17 libsane libsnmp35 libssl1.1 libstdc++-9-dev\n  libtepl-4-0 libvpx6 libwebp6 libwmf0.2-7 libxmlb1 ltrace lz4 ncal perl-modules-5.30 popularity-contest python-pip-whl python3-entrypoints python3-simplejson\n  xul-ext-ubufox\nUse "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo apt autoremove'")]),s._v(" to remove them.\nThe following NEW packages will be installed:\n  libfuse2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" upgraded, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" newly installed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" to remove and "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" not upgraded.\nNeed to get "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90.3")]),s._v(" kB of archives.\nAfter this operation, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("330")]),s._v(" kB of additional disk space will be used.\nGet:1 http://cn.archive.ubuntu.com/ubuntu jammy/universe amd64 libfuse2 amd64 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.9")]),s._v(".9-5ubuntu3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90.3")]),s._v(" kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nFetched "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90.3")]),s._v(" kB "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 1s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.0")]),s._v(" kB/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSelecting previously unselected package libfuse2:amd64.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Reading database "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("260059")]),s._v(" files and directories currently installed."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPreparing to unpack "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("./libfuse2_2.9.9-5ubuntu3_amd64.deb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nUnpacking libfuse2:amd64 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.9")]),s._v(".9-5ubuntu3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSetting up libfuse2:amd64 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.9")]),s._v(".9-5ubuntu3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nProcessing triggers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" libc-bin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.35")]),s._v("-0ubuntu3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("问题解决：")]),s._v(" "),t("div",{staticClass:"center-container"},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xingcxb/blog_img@blog1/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/JetBrains/Snipaste_2022-08-31_18-25-05.png",alt:"Toolbox"}})])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);