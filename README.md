# Siman B2B Website

双语 B2B 外贸独立站，基于 React + Vite 构建，可输出静态文件部署到任意服务器或静态托管平台。

## 本地预览

```bash
pnpm install
pnpm run dev
```

## 生成部署文件

```bash
pnpm run build
```

构建产物位于 `dist/`，把 `dist/` 目录中的文件上传到服务器站点根目录即可访问。

## 素材处理

原始素材位于 `source-assets/raw/`，页面使用的轻量素材位于 `public/assets/site/`。如需重新生成轻量素材：

```bash
python3 scripts/prepare_assets.py
```
