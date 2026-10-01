# route 法律文档

纯 HTML/CSS 的隐私政策与用户协议站点，无运行依赖，无构建步骤。

- `index.html`：文档入口
- `privacy.html`：隐私政策
- `terms.html`：用户协议
- `assets/style.css`：共享响应式及打印样式

## 本地预览

在仓库目录运行 `python3 -m http.server 8080`，访问 http://localhost:8080/ 。

## GitHub Pages

在 Settings → Pages 中选择 Deploy from a branch，选择 `main` 和 `/ (root)`，保存。
本仓库名称不是 `HorrySnake.github.io`，因此是项目站点，默认地址为：

- https://horrysnake.github.io/route.github.io/
- https://horrysnake.github.io/route.github.io/privacy.html
- https://horrysnake.github.io/route.github.io/terms.html

上述地址仅在 Pages 启用并部署完成后可用。所有内部链接均为相对链接，兼容项目子路径和自定义域名。

## 正式使用前

当前法律文本为明确标注的草稿，不应直接作为正式隐私政策或用户协议提交到 App Store。请核实并填写：运营主体、联系地址及邮箱、数据类型和用途、系统权限、SDK 及隐私政策链接、存储地点与期限、用户权利和账号注销流程、适用年龄、付费与订阅、适用法律及生效日期。删除不适用条款；核实后再移除草稿提示及 `noindex` 标签。页面没有捏造 App 的隐私行为。

文本结构参考 Apple 官方资料，不表示已满足所有法律或审核要求：

- https://developer.apple.com/app-store/review/guidelines/#privacy
- https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

手机端目录位于顶部菜单栏右侧，点击展开，选择章节后自动收起；支持 Escape 和点击空白处关闭。

本网站无 Cookie、浏览器存储、分析脚本、外部字体或第三方前端依赖。托管服务商的访问日志处理仍可能适用。
