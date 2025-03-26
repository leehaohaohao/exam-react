# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
<div className="introduction-description">
                    <p className={`text-segment ${visibleSegments.includes(0) ? 'visible' : ''}`}>
                        第一次做这种交互式网站，希望你能喜欢。
                    </p>
                    <p className={`text-segment ${visibleSegments.includes(1) ? 'visible' : ''}`}>
                        平常负责的都是底层开发，更注重背后的实现逻辑，而不是这种页面的布局设计这种。
                    </p>
                    <p className={`text-segment ${visibleSegments.includes(2) ? 'visible' : ''}`}>
                        由于技术有限，部分页面存在卡顿现象，暂时无法解决，也因为效果还可以，所以就先这样了。
                    </p>
                    <p className={`text-segment ${visibleSegments.includes(3) ? 'visible' : ''}`}>
                        由于服务器带宽很低，所以图片等资源加载很慢，如果可以耐心等待一下或者先简单看一遍，第二遍有缓存会更有体验感。
                    </p>
                    <p className={`text-segment ${visibleSegments.includes(4) ? 'visible' : ''}`}>
                        温馨提示:有彩蛋的哦,不止1个哦。
                    </p>
                    <p className={`text-segment ${visibleSegments.includes(5) ? 'visible' : ''}`}>
                        另外关于页面里提供有相关图片、网页图片等资源下载链接。
                    </p>
                </div>