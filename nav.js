/*!
 * micah.vip 全站统一导航 (nav.js)  v22
 * 改这里一处 = 6 个站顶部导航全生效
 *
 * v32（2026-09-17）：移动端适配 —— VIA / ZMK / EC tools 依赖 Web HID/USB，
 *  手机平板浏览器用不了 ⇒ 视口 ≤1024px 时隐藏这三个链接（Shop/Docs/GitHub/
 *  主题保留）。⚠ 不能靠 branding.css 的 media query：这些链接的显示靠
 *  inline style（display:inline-block!important），样式表 important 压不过
 *  inline important，只能 JS 改写内联 display。matchMedia change 监听 ⇒
 *  旋转屏幕/分屏实时切换，无需刷新。静态块（zmk）由 manageStatic() 接管
 *  后同样处理（选择器同时覆盖 .micah-links-r 和 #micah-nav-static .links-r）。
 * v20 改动（2026-09-15）：
 *  - 链接**围绕 logo 聚拢**（左组 justify-self:end + 右组 justify-self:start），
 *    logo 严格几何居中；不再贴左右两侧边。
 *  - 字体加粗 700 → 800。
 *  - logo 路径改 `https://micah.vip/assets/logo.png`（服务器统一资源文件夹，
 *    ⚠ 换 logo 只需覆盖该文件，6 个站同时生效）。
 * v21（2026-09-15）：⚠ 修 bug —— 内联 style 串里 font-family 用了**双引号**，
 *  拼进 `style="…"` 属性时把属性提前截断（HTML 属性定界符就是双引号）⇒
 *  `font:800 16px/1.4 -apple-system,` 变成非法声明被丢弃 ⇒ 动态挂载的 5 个站
 *  字重实际仍是 400（只有 zmk 的静态 <style> 块正常）。改为**单引号**。
 * v22（2026-09-15）：换正式 logo（`菜籽猫注册logo4.png` → `assets/logo.png`，1319²、
 *  md5 fecec8db）。logo URL 统一带 `?v=<NAV_VERSION>` ⇒ **以后换 logo 只覆盖
 *  `assets/logo.png` 再把 NAV_VERSION 抬一位即可**，缓存自动失效；`manageStatic()`
 *  会把静态 HTML 里那张图重写成同一 URL（zmk 的 HTML 不用跟着改）。
 * v23（2026-09-15）：用户反馈"太小看不清" —— 根因是源图四周 85% 都是透明留白
 *  （1319² 画布，内容只有 704×202），40px 高里实际可见仅 ~6px。已把 `assets/logo.png`
 *  换成裁掉透明边的版本（756×254，md5 见部署记录），显示高度 40px → 48px
 *  （nav 仍是 64px）。以后**提供 logo 请直接给裁好的图**，别带大片留白。
 * v24（2026-09-15）：Shop 后台（PrestaShop /adminxxx/）也被 sub_filter 注入导航，
 *  且新建商品弹窗是 iframe —— 导航横在弹窗中间挡住发布入口。`init()` 前加
 *  `isAdminPath()` 排除：路径以 /admin 开头或命中后台特征元素就不挂载。
 * v26（2026-09-15）：修"跳过去卡一下" —— 其实是**首屏抖 64px**：v25 把
 *  body padding 改成条件生效后，页面会先按无导航布局渲染、再被推下 64px
 *  （实测 docs 本地 71ms→173ms / 4G 152ms→280ms，h1.top 112→176）。
 *  nginx 已在 </head> 前内联同步 style+script（按 pathname 给 <html> 打
 *  `.micah-no-nav`），这里加 `syncAdminClass()` 做**双向兜底**。
 * v27（2026-09-15）：① GitHub 改指 github.com/micahyy，和「主题」一起变成
 *  **图标按钮钉在视口最右**（36px 圆角、黑底白字反色填充）；② 主题按钮
 *  之前只改一个没有任何样式的 data-theme 属性 ⇒ 点了毫无反应。现在：
 *  VitePress 站（docs）切原生 html.dark；其它站切 html.micah-dark，
 *  由 branding.css v8 的反色规则实现深色模式。偏好存 localStorage
 *  （micah-theme）+ cookie（domain=.micah.vip，跨子域共享）。
 * v28（2026-09-15）：导航文字统一英文 —— 删「主页」链接（点 logo 即回主页）、
 *  「EC 校准」→「EC tools」、aria/title 提示语一并英文化。
 * v29（2026-09-15）：主题全站统一 —— cookie(micah-theme, domain=.micah.vip) 是
 *  **唯一事实源**：① 加载时无条件按 cookie 应用（VitePress 的
 *  vitepress-theme-appearance 只做首次迁移，不再抢先）；② docs 站监听 html
 *  class 变化，VitePress 自带切换按钮也回写 cookie ⇒ 任何入口切换、6 站同步。
 * v30（2026-09-15）：深色模式导航原生化 —— 导航颜色全部改走 CSS 变量
 *  （--micah-nav-*，浅色默认值写死在 inline style），branding.css v11 在
 *  html.micah-dark / html.dark 下覆盖变量 + 豁免导航反色 ⇒ docs(html.dark)
 *  导航跟随深色；图标按钮不再被反色成"白块白图标"。
 *  另修 zmk「无法点击」：zmk 页面 hit test 全灭（elementsFromPoint 全返回
 *  <html>，连新建的干净 fixed div 都命不中），坐标接管只兜 <a> 漏了主题
 *  <button> —— 补 button 分发（带 __micahSynthetic 标记防递归）。
 * v31（2026-09-15）：修"VIA / ZMK 页面与导航颜色互反" —— 两站都是
 *  **自带深色设计**的页面（body 背景天生深色）：浅色主题下"白导航+深页面"；
 *  深色主题下反色规则又把页面反成浅色、"深导航+浅页面"。adaptNativeDark()
 *  自动探测（浅色状态下 body 背景亮度 < 0.26）：① html 加 .micah-nav-dark
 *  （branding.css v12 的导航深色变量同样作用于它）② body 直接子元素打
 *  .micah-no-invert 豁免反色（页面保持原生深色）⇒ 这类页面永远"深页面+
 *  深导航"，主题按钮只影响其它站与本站导航图标。只在浅色状态下探测，
 *  防止反色体系自己设的黑色 body 被误判成"原生深色"。
 *  v31 补丁：透明背景（rgba(0,0,0,0)，如 micah.vip 主页）不算数，防误伤。
 */
(function () {
  'use strict';
  var NAV_VERSION = '20260917-32';
  var LOGO_SRC = 'https://micah.vip/assets/logo.png?v=' + NAV_VERSION;
  var _inited = false;

  // nav 容器 inline style（cssText + !important = cascade 最高优先级）
  var NAV_STYLE = 'position:fixed!important;top:0!important;left:0!important;right:0!important;' +
    'bottom:auto!important;width:100%!important;height:64px!important;' +
    'min-width:100%!important;max-width:100%!important;' +
    'min-height:64px!important;max-height:64px!important;' +
    'margin:0!important;padding:0!important;border:0!important;background:transparent!important;' +
    'z-index:2147483647!important;display:block!important;overflow:visible!important;' +
    'visibility:visible!important;opacity:1!important;pointer-events:auto!important;' +
    'transform:none!important;';

  // 三列 grid：1fr auto 1fr —— logo 严格居中，两侧链接组紧贴
  // ⚠ position:fixed + left/right 拉伸：branding.css 的 #micah-nav 规则会与
  //   all:unset 冲突（内层变 shrink-to-fit），fixed 双向拉伸最稳
  var NAV_INNER_STYLE = 'all:unset;display:grid!important;grid-template-columns:1fr auto 1fr!important;' +
    'align-items:center!important;position:fixed!important;top:0!important;left:0!important;right:0!important;' +
    'bottom:auto!important;width:auto!important;' +
    'height:64px!important;padding:0 24px!important;background:var(--micah-nav-bg,#fff)!important;' +
    'border-bottom:2px solid var(--micah-nav-border,#111)!important;' +
    "font:800 16px/1.4 -apple-system,'PingFang SC','Microsoft YaHei','Inter',sans-serif!important;" +
    'color:var(--micah-nav-fg,#111)!important;box-sizing:border-box;margin:0!important;';

  var LINK_BASE = 'all:unset;display:inline-block!important;cursor:pointer!important;text-decoration:none!important;' +
    'padding:8px 14px!important;border-radius:6px!important;font:inherit!important;color:inherit!important;' +
    'background:transparent!important;border:0!important;transition:background .12s,color .12s!important;';

  // 围绕 logo 聚拢：左组贴 logo 左侧（end）
  var LINKS_L_STYLE = 'all:unset;display:flex!important;gap:4px!important;justify-self:end!important;';
  var LINKS_R_STYLE = 'all:unset;display:flex!important;gap:4px!important;';
  // 右列包一层并拉满整列：文本链接贴 logo，GitHub/主题两个图标按钮钉到视口最右
  var LINKS_R_WRAP_STYLE = 'all:unset;display:flex!important;align-items:center!important;gap:4px!important;';
  var LINKS_RR_STYLE = 'all:unset;display:flex!important;gap:8px!important;margin-left:auto!important;';
  var LOGO_A_STYLE = 'all:unset!important;display:flex!important;align-items:center!important;' +
    'justify-self:center!important;cursor:pointer!important;margin:0 20px!important;';
  var LOGO_IMG_STYLE = 'height:48px!important;width:auto!important;display:block!important;border:0!important;' +
    'filter:var(--micah-nav-logofilter,none)!important;';

  // GitHub / 主题：36px 圆角、黑底白字（v30 颜色走变量，深色下 branding.css v11 覆盖）
  var GITHUB_URL = 'https://github.com/micahyy';
  var ICON_BTN_STYLE = 'width:36px!important;height:36px!important;padding:0!important;' +
    'display:inline-flex!important;align-items:center!important;justify-content:center!important;' +
    'background:var(--micah-nav-iconbg,#111)!important;color:var(--micah-nav-iconfg,#fff)!important;' +
    'border-radius:10px!important;line-height:1!important;';
  var GITHUB_SVG = '<svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';
  var SUN_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var MOON_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';

  function link(label, href, attrs, extraStyle) {
    return '<a href="' + href + '" ' + attrs + ' style="' + LINK_BASE + (extraStyle || '') + '">' + label + '</a>';
  }

  function btn(label, attrs, extraStyle) {
    return '<button type="button" ' + attrs + ' style="' + LINK_BASE + (extraStyle || '') + '">' + label + '</button>';
  }

  // 把元素送进 top-layer 并置顶（hide+show 重新入栈；不支持则降级为普通 fixed）
  function toTopLayer(el) {
    if (!el || typeof el.showPopover !== 'function') return;
    try {
      try { if (el.matches(':popover-open')) el.hidePopover(); } catch (e) {}
      el.showPopover();
    } catch (e) {
      el.removeAttribute('popover');
    }
  }

  // 监听 dialog[open]：有弹窗打开就把 nav 重新送回 top-layer 顶端。
  // v30：init 时立即检查一次 —— zmk 的 dialog 在 HTML 里静态就带着 open，
  // 不会触发 mutation，之前 nav 从未重排，被压在弹窗 backdrop 之下。
  function watchDialogs(el) {
    if (typeof window.MutationObserver !== 'function') return;
    var pending = false;
    function bump() {
      if (!el.isConnected) return;
      if (document.querySelector('dialog[open]')) toTopLayer(el);
    }
    var mo = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        bump();
      });
    });
    mo.observe(document.documentElement, {
      childList: true, subtree: true, attributes: true, attributeFilter: ['open']
    });
    bump();
  }

  // zmk 站：HTML 预埋了 <nav id="micah-nav-static">，接管它而不是重复挂载
  function manageStatic() {
    var el = document.getElementById('micah-nav-static');
    if (!el) return false;
    // 静态 HTML 里那张 logo 也统一挂上 ?v=<NAV_VERSION>，换 logo 时缓存一起失效
    var img = el.querySelector('img');
    if (img && img.getAttribute('src') !== LOGO_SRC) img.setAttribute('src', LOGO_SRC);
    // GitHub 指向自愈（防旧版静态块残留 micahvip）
    var gh = el.querySelector('a[href*="github.com"]');
    if (gh && gh.getAttribute('href') !== GITHUB_URL) gh.setAttribute('href', GITHUB_URL);
    bindEvents(el);
    el.setAttribute('popover', 'manual');
    toTopLayer(el);
    watchDialogs(el);
    bindCoordinateTakeover(el);
    if (document.body) document.body.classList.add('micah-has-nav'); // 让 branding.css 的 body padding 生效
    console.log('[micah-nav ' + NAV_VERSION + '] 接管静态 nav-static（popover top-layer）');
    return true;
  }

  function build() {
    var div = document.createElement('div');
    div.id = 'micah-nav-popover';
    div.setAttribute('aria-label', 'micah.vip main navigation');
    div.style.cssText = NAV_STYLE;
    div.innerHTML =
      '<nav id="micah-nav-inner" style="' + NAV_INNER_STYLE + '">' +
        '<div class="micah-links-l" style="' + LINKS_L_STYLE + '">' +
          link('Shop', 'https://shop.micah.vip', '', '') +
          link('Docs', 'https://docs.micah.vip', '', '') +
        '</div>' +
        '<a class="micah-logo" href="https://micah.vip" aria-label="CZMao home" style="' + LOGO_A_STYLE + '">' +
          '<img src="' + LOGO_SRC + '" alt="CZMao" style="' + LOGO_IMG_STYLE + '">' +
        '</a>' +
        '<div class="micah-links-r-wrap" style="' + LINKS_R_WRAP_STYLE + '">' +
          '<div class="micah-links-r" style="' + LINKS_R_STYLE + '">' +
            link('VIA', 'https://via.micah.vip', '', '') +
            link('ZMK', 'https://zmk.micah.vip', '', '') +
            link('EC tools', 'https://key.micah.vip/calibration.html', '', '') +
          '</div>' +
          '<div class="micah-links-rr" style="' + LINKS_RR_STYLE + '">' +
            link(GITHUB_SVG, GITHUB_URL, 'class="micah-icon-btn" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener"', ICON_BTN_STYLE) +
            btn(MOON_SVG, 'id="micah-theme-toggle" class="micah-icon-btn" aria-label="Toggle theme" title="Toggle theme"', ICON_BTN_STYLE) +
          '</div>' +
        '</div>' +
      '</nav>';
    return div;
  }

  /* ===== 主题（深/浅色）=====
   * 旧版只改一个没有任何 CSS 消费的 data-theme 属性 ⇒ 点了毫无反应。
   * 现在：VitePress 站（docs）切原生 html.dark；其它站切 html.micah-dark，
   * 由 branding.css 的反色规则实现深色。偏好写 localStorage + cookie
   * （domain=.micah.vip ⇒ 6 个站共享）。 */
  function isVitePress() {
    return !!document.querySelector('.VPApp, .VPNavBar, .VPContent');
  }
  function isDarkNow() {
    var h = document.documentElement;
    return h.classList.contains('dark') || h.classList.contains('micah-dark');
  }
  function applyTheme(dark) {
    var h = document.documentElement;
    if (isVitePress()) {
      h.classList.toggle('dark', dark);
      h.classList.remove('micah-dark');
      try { localStorage.setItem('vitepress-theme-appearance', dark ? 'dark' : 'light'); } catch (e) {}
    } else {
      h.classList.toggle('micah-dark', dark);
    }
  }
  function setStoredTheme(dark) {
    try { localStorage.setItem('micah-theme', dark ? 'dark' : 'light'); } catch (e) {}
    try {
      document.cookie = 'micah-theme=' + (dark ? 'dark' : 'light') +
        ';path=/;max-age=31536000;domain=.micah.vip;SameSite=Lax';
    } catch (e) {}
  }
  function getStoredTheme() {
    var m = null;
    try { m = document.cookie.match(/(?:^|;\s*)micah-theme=(dark|light)(?=:|;|$)/); } catch (e) {}
    if (m) return m[1] === 'dark';
    try {
      var v = localStorage.getItem('micah-theme');
      if (v === 'dark' || v === 'light') return v === 'dark';
    } catch (e) {}
    return null;
  }
  function applyStoredTheme() {
    var stored = getStoredTheme();
    // v29：VitePress 本地偏好只在 cookie 尚未建立时迁移一次，之后 cookie 说了算
    if (isVitePress() && stored === null) {
      var vp = null;
      try { vp = localStorage.getItem('vitepress-theme-appearance'); } catch (e) {}
      if (vp === 'dark' || vp === 'light') {
        setStoredTheme(vp === 'dark');
        stored = vp === 'dark';
      }
    }
    if (stored === null) return;
    applyTheme(stored);
  }
  // v29：docs 站监听 html class —— VitePress 自带的主题按钮切了 html.dark
  // 也回写 cookie，保证任何入口切换后全站一致（自身 applyTheme 触发时写同值，无回环）
  function watchVitePressTheme() {
    if (!isVitePress() || typeof MutationObserver !== 'function') return;
    var h = document.documentElement;
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(function () {
        setStoredTheme(h.classList.contains('dark'));
        updateThemeBtn();
      }, 50);
    }).observe(h, { attributes: true, attributeFilter: ['class'] });
  }
  function updateThemeBtn() {
    var b = document.getElementById('micah-theme-toggle');
    if (!b) return;
    var dark = isDarkNow();
    b.innerHTML = dark ? SUN_SVG : MOON_SVG;
    b.title = dark ? 'Switch to light' : 'Switch to dark';
    b.setAttribute('aria-label', b.title);
  }

  /* ===== 原生深色页面自适应（v31）=====
   * VIA / ZMK 这类自带深色设计的页面（body 背景天生深色）不能走"反色=深色
   * 模式"路线：浅色主题"白导航+深页面"、深色主题"深导航+被反浅的页面"。
   * 探测（只在浅色状态下，防反色体系设的黑 body 误判）：body 背景亮度低 ⇒
   * html 加 .micah-nav-dark（导航深色变量）+ body 直接子元素打 .micah-no-invert
   * （豁免反色，页面保持原生深色）。幂等；MutationObserver 兜 SPA 重建节点。 */
  var _nativeDarkInited = false;
  function pageLooksDark() {
    try {
      var m = getComputedStyle(document.body).backgroundColor
        .match(/rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)(?:\D+([\d.]+))?\)/);
      if (!m) return false;
      if (m[4] !== undefined && parseFloat(m[4]) < 0.5) return false; // 透明背景不判
      return (0.2126 * m[1] + 0.7152 * m[2] + 0.0722 * m[3]) < 66; // ~0.26 * 255
    } catch (e) { return false; }
  }
  function tagBodyChildren() {
    var body = document.body;
    if (!body) return;
    for (var i = 0; i < body.children.length; i++) {
      var c = body.children[i];
      if (c.id === 'micah-nav-popover' || c.id === 'micah-nav-static') continue;
      if (!c.classList.contains('micah-no-invert')) c.classList.add('micah-no-invert');
    }
  }
  function adaptNativeDark() {
    if (_nativeDarkInited || !document.body) return;
    if (isDarkNow()) return; // 深色状态下 body 被反色体系设黑，探测必误判
    if (!pageLooksDark()) return;
    _nativeDarkInited = true;
    document.documentElement.classList.add('micah-nav-dark');
    tagBodyChildren();
    if (typeof MutationObserver === 'function') {
      new MutationObserver(tagBodyChildren).observe(document.body, { childList: true });
    }
    console.log('[micah-nav ' + NAV_VERSION + '] 原生深色页面：导航锁定深色 + 页面豁免反色');
  }
  function bindEvents(root) {
    var themeBtn = root.querySelector('#micah-theme-toggle');
    if (themeBtn && !themeBtn.__micahBound) {
      themeBtn.__micahBound = true;
      themeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        applyTheme(!isDarkNow());
        setStoredTheme(isDarkNow());
        updateThemeBtn();
      }, true);
    }
    updateThemeBtn();
  }

  /* ===== VIA 首屏海报层盖住工具栏（v27）=====
   * via 是 React 单页：顶栏用"绝对定位 + top:auto"（跟着 body 的 64px 留白下移），
   * 首屏海报层却是"绝对定位 + top:50px"（不跟着下移）⇒ 海报反盖住顶栏和整站，
   * 什么都点不了（实测点 Github 链接 URL 不变）。修法：把 #root 下"显式 top、
   * 且盖进 64px 预留带"的绝对定位子元素整体下推 64px；React 重渲染会重建节点，
   * 所以挂 MutationObserver 反复兜。 */
  function fixAbsOverlays() {
    if (location.hostname !== 'via.micah.vip') return;
    var root = document.getElementById('root');
    if (!root) return;
    Array.prototype.forEach.call(root.children, function (el) {
      if (el.__micahShifted) return;
      var cs;
      try { cs = getComputedStyle(el); } catch (e) { return; }
      if (cs.position !== 'absolute' || cs.top === 'auto') return;
      var r = el.getBoundingClientRect();
      if (r.top < 64 && r.height > 100) {
        el.style.marginTop = '64px';
        el.__micahShifted = true;
      }
    });
  }
  function watchAbsOverlays() {
    if (location.hostname !== 'via.micah.vip') return;
    var root = document.getElementById('root');
    if (!root || typeof MutationObserver !== 'function') return;
    new MutationObserver(function () { fixAbsOverlays(); })
      .observe(root, { childList: true, subtree: false });
  }

  function mount() {
    var body = document.body;
    if (!body) return;

    body.classList.add('micah-has-nav'); // branding.css 的 body padding 只在这里生效
    var existing = document.getElementById('micah-nav-popover');
    if (existing) {
      if (existing.parentNode !== body) body.appendChild(existing);
      existing.style.cssText = NAV_STYLE;
      var nav = existing.querySelector('#micah-nav-inner');
      if (nav) nav.style.cssText = NAV_INNER_STYLE;
      bindEvents(existing);
      existing.setAttribute('popover', 'manual');
      toTopLayer(existing);
      return;
    }
    var div = build();
    body.insertBefore(div, body.firstChild);
    bindEvents(div);
    div.setAttribute('popover', 'manual');
    toTopLayer(div);
    watchDialogs(div);
    bindCoordinateTakeover(div);
  }

  // modal dialog（showModal 的 backdrop）开着时，Chrome 命中测试拿不到 nav
  // （实测 elementFromPoint 返回 <html>，连 top-layer popover 也一样）。
  // 兜底：document capture click —— 点击落在 nav 区域且 nav 不可正常命中时，
  // 遍历 nav 链接矩形手动导航（dialog 正常交互不受影响）。
  function bindCoordinateTakeover(el) {
    if (el.__micahTakeover) return;
    el.__micahTakeover = true;
    document.addEventListener('click', function (e) {
      if (e.__micahSynthetic) return; // 自己分发的合成点击，防递归
      if (e.button !== undefined && e.button !== 0) return;
      var r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      var t = document.elementFromPoint(e.clientX, e.clientY);
      if (t && el.contains(t)) return; // nav 正常可命中，浏览器自己处理 <a href>
      // v30：hit test 失灵时（实测 zmk 整页 elementsFromPoint 只返回 <html>），
      // 坐标接管此前只兜 <a> 链接 —— 主题按钮是 <button>，点在它上面毫无反应。
      // 命中矩形后手动分发合成 click（标记 __micahSynthetic 防 takeover 递归）。
      var themeBtn = el.querySelector('#micah-theme-toggle');
      if (themeBtn) {
        var br = themeBtn.getBoundingClientRect();
        if (e.clientX >= br.left && e.clientX <= br.right && e.clientY >= br.top && e.clientY <= br.bottom) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
          var ev = new MouseEvent('click', { bubbles: true, cancelable: true });
          ev.__micahSynthetic = true;
          themeBtn.dispatchEvent(ev);
          return;
        }
      }
      var links = el.querySelectorAll('a[href]');
      for (var i = links.length - 1; i >= 0; i--) {
        var lr = links[i].getBoundingClientRect();
        if (e.clientX >= lr.left && e.clientX <= lr.right && e.clientY >= lr.top && e.clientY <= lr.bottom) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
          window.location.href = links[i].href;
          return;
        }
      }
    }, true);
  }

  // 后台/iframe 不挂导航：PrestaShop 后台目录固定以 /admin 开头（/adminxxx/...），
  // 且新建商品等弹窗是 admin 路径下的 iframe —— 之前导航被 sub_filter 注入后
  // 横在后台弹窗中间，挡住发布商品入口（v24 修）。前端正常页面不受影响。
  function isAdminPath() {
    if (location.pathname.toLowerCase().indexOf('/admin') === 0) return true;
    try {
      if (document.querySelector('#header_infos, .prestashop-bo, body.admin, #employee-nav')) return true;
    } catch (e) {}
    return false;
  }

  // 后台判定结果与 <html> 上的 .micah-no-nav 类**双向同步**（配合 branding.css v26）：
  // 内联脚本只按 pathname 判断，可能漏判（后台 URL 不规整）或误判（前台路径碰巧以
  // /admin 开头），这里用 isAdminPath() 的完整判定（含后台特征元素）兜底。
  function syncAdminClass() {
    var html = document.documentElement;
    if (isAdminPath()) html.classList.add('micah-no-nav');
    else html.classList.remove('micah-no-nav');
  }

  /* ===== 工具链接移动端隐藏（v32）=====
   * VIA / ZMK / EC tools 需要 Web HID/USB，移动端浏览器不可用 —— 视口
   * ≤1024px 隐藏。JS 改内联 display（inline important 样式表压不住，见文件头）。
   * 同时覆盖动态版（.micah-links-r）与 zmk 静态版（#micah-nav-static .links-r）。 */
  var MQ_NARROW = window.matchMedia('(max-width: 1024px)');
  function applyToolVis() {
    var hide = MQ_NARROW.matches;
    var links = document.querySelectorAll(
      '.micah-links-r a, #micah-nav-static .links-r a');
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = hide ? 'none' : 'inline-block';
    }
  }
  function watchToolVis() {
    applyToolVis();
    if (watchToolVis.__done) return;
    watchToolVis.__done = true;
    if (MQ_NARROW.addEventListener) MQ_NARROW.addEventListener('change', applyToolVis);
    else if (MQ_NARROW.addListener) MQ_NARROW.addListener(applyToolVis); // 老 Safari
  }

  function init() {
    adaptNativeDark(); // 放最前：_inited 不拦它，load/500ms/2s 重试覆盖晚渲染的 SPA
    if (_inited || !document.body) {
      if (_inited) return;
      setTimeout(init, 50);
      return;
    }
    _inited = true;
    syncAdminClass();
    if (isAdminPath()) {
      console.log('[micah-nav ' + NAV_VERSION + '] 后台管理页，跳过挂载');
      return;
    }
    applyStoredTheme();
    watchVitePressTheme();
    if (manageStatic()) { watchToolVis(); return; }
    mount();
    watchToolVis();
    fixAbsOverlays();
    watchAbsOverlays();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
  window.addEventListener('load', init);
  setTimeout(init, 500);
  setTimeout(init, 2000);
})();
