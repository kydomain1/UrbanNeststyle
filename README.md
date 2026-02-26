# UrbanNeststyle - 综合生活方式博客网站

一个优雅的静态博客网站，采用莫兰迪色系设计，涵盖时尚、美容、家居、旅游、金融和美食六大生活方式分类。

## 🌟 功能特点

### 设计特色
- **莫兰迪色系**：低饱和度的柔和色彩搭配
- **甜美风格**：圆润边角、温馨可爱的设计元素
- **响应式设计**：完美适配桌面、平板和移动设备
- **平滑动画**：优雅的过渡效果和交互动画
- **优化图片**：高质量Unsplash图片，与内容深度匹配
- **法律页面**：完整的隐私政策和服务条款

### 核心功能
- **六大分类**：Fashion & Accessories, Health & Beauty, Home & Garden, Travel & Accommodation, Finance & Insurance, Food & Beverages
- **专用搜索页面**：独立的搜索结果页面，支持URL参数
- **高级搜索**：搜索关键词高亮显示，分类筛选
- **社交媒体链接**：真实的社交媒体平台链接，安全可靠访问

### 内容亮点
- **6篇精品文章**：每个分类一篇高质量内容
- **深度匹配图片**：所有图片都与文章内容高度吻合，来源真实可靠
- **产品推荐**：每篇文章包含相关产品测评
- **专业作者**：多位领域专家的深度见解
- **实用建议**：可操作的生活方式建议

## 📁 项目结构

```
UrbanNeststyle/
├── index.html              # 主页
├── about.html               # 关于页面
├── contact.html             # 联系页面
├── search.html              # 搜索结果页面
├── css/
│   ├── main.css            # 主样式文件
│   └── article.css         # 文章页面样式
├── js/
│   ├── main.js             # 主JavaScript文件
│   ├── search.js           # 搜索页面功能
│   ├── search-redirect.js  # 通用搜索重定向
│   └── search-redirect-articles.js  # 文章页搜索重定向
├── images/                 # 图片资源目录
├── articles/               # 文章页面
│   ├── spring-fashion-accessories-2025.html
│   ├── natural-skincare-routines-guide.html
│   ├── scandinavian-living-room-budget.html
│   ├── tuscany-boutique-hotels.html
│   ├── investment-strategies-young-professionals.html
│   └── artisan-coffee-trends-2025.html
├── privacy-policy.html      # 隐私政策页面
├── terms-of-service.html    # 服务条款页面
└── README.md
```

## 🚀 快速开始

### 本地部署
1. 将项目文件下载到本地目录
2. 使用任意Web服务器（如Live Server、XAMPP等）启动项目
3. 在浏览器中访问 `index.html`

### 文件服务器
1. 将所有文件上传到Web服务器
2. 确保保持文件夹结构完整
3. 访问网站域名即可浏览

## 📱 响应式断点

- **桌面端**: > 1024px - 完整布局
- **平板端**: 768px - 1024px - 适配布局
- **移动端**: < 768px - 垂直堆叠布局

## 🎨 设计系统

### 颜色调色板
- **主色调**: #B4A7C1 (柔和紫色)
- **辅助色**: #A7C4A0 (薄荷绿)
- **强调色**: #E4C2C6 (柔和粉色)
- **背景色**: #F5F1EB (温暖米色)
- **文字色**: #5A5A5A (柔和灰色)

### 字体系统
- **主字体**: Inter
- **字重**: 300, 400, 500, 600, 700
- **大小**: 0.75rem - 2.25rem

## 🔧 自定义指南

### 添加新文章
1. 在 `articles/` 目录创建新的HTML文件
2. 在 `js/main.js` 的 `articlesData` 数组中添加文章数据
3. 使用现有文章模板保持设计一致性

### 修改颜色主题
在 `css/main.css` 的 `:root` 选择器中修改CSS变量：
```css
:root {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_COLOR;
    /* 其他颜色变量 */
}
```

### 更新联系信息
编辑 `contact.html` 中的联系方式和地址信息。

## 📈 SEO优化

- **语义化HTML**：使用正确的HTML5标签
- **Meta标签**：每个页面都有独特的title和description
- **图片优化**：使用Unsplash高质量图片
- **性能优化**：CSS和JavaScript文件优化

## 🌐 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📞 技术支持

如需技术支持或定制开发，请联系：
- 邮箱：hello@urbanneststyle.com
- 电话：+1 (555) 123-4567

## 📄 许可证

本项目仅供学习和演示使用。图片资源来源于Unsplash，遵循其使用条款。

---

**UrbanNeststyle** - 发现你的生活美学 ✨
