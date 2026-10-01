# route 法律文档

基于 Docus / Nuxt Content，使用 Markdown 维护正文，深色单栏样式参考提供的截图。顶部菜单可切换文档及跳转章节。

## 开发

Node.js 22：`npm ci`，`npm run dev`。

## 静态生成

`NUXT_APP_BASE_URL=/route.github.io/ npm run generate`，产物位于 `.output/public`。

## GitHub Pages

仓库 Settings → Pages → Source 选择 **GitHub Actions**。推送 main 后工作流自动生成并部署。默认站点地址 https://horrysnake.github.io/route.github.io/ ，文档路径为 `/privacy` 和 `/terms`。旧 `.html` 地址提供兼容页面。Pages 未启用时需先启用，不能仅把源码作为分支根目录发布。

## 编辑正文

修改 `content/privacy.md`、`content/terms.md`。当前法律文本为草稿，运营主体、联系方式与真实数据处理行为仍需确认。
