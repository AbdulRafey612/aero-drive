// vite.config.js
import { defineConfig } from "file:///C:/Users/Armghan%20Khalid/Videos/JS/aero-drive/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Armghan%20Khalid/Videos/JS/aero-drive/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///C:/Users/Armghan%20Khalid/Videos/JS/aero-drive/node_modules/unocss/dist/vite.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Armghan Khalid\\Videos\\JS\\aero-drive";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [react(), UnoCSS()],
    server: {
      port: 3e3
    },
    esbuild: {
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment"
    },
    main: "src/index.jsx",
    base: "./",
    resolve: {
      alias: {
        "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
      }
    }
    // Use Babel to transpile your code
    // This will enable support for JSX syntax
    // as well as any other ES6+ syntax that
    // may not be natively supported by the browser
    // or the version of Node.js you are using
    //   optimizeDeps: {
    //     include: ["@babel/preset-react"],
    //   },
    // dependencies :{
    // }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBcm1naGFuIEtoYWxpZFxcXFxWaWRlb3NcXFxcSlNcXFxcYWVyby1kcml2ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQXJtZ2hhbiBLaGFsaWRcXFxcVmlkZW9zXFxcXEpTXFxcXGFlcm8tZHJpdmVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FybWdoYW4lMjBLaGFsaWQvVmlkZW9zL0pTL2Flcm8tZHJpdmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBsdWdpbnM6IFtyZWFjdCgpLFVub0NTUygpXSxcclxuICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgcG9ydDozMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlc2J1aWxkOiB7XHJcbiAgICAgICAgICAgIGpzeEZhY3Rvcnk6IFwiUmVhY3QuY3JlYXRlRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBqc3hGcmFnbWVudDogXCJSZWFjdC5GcmFnbWVudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBtYWluIDogJ3NyYy9pbmRleC5qc3gnLFxyXG4gICAgICAgIGJhc2U6ICcuLycsXHJcbiAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAgIFwifi9cIjogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIil9L2BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIC8vIFVzZSBCYWJlbCB0byB0cmFuc3BpbGUgeW91ciBjb2RlXHJcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgZW5hYmxlIHN1cHBvcnQgZm9yIEpTWCBzeW50YXhcclxuICAgICAgICAgIC8vIGFzIHdlbGwgYXMgYW55IG90aGVyIEVTNisgc3ludGF4IHRoYXRcclxuICAgICAgICAgIC8vIG1heSBub3QgYmUgbmF0aXZlbHkgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXHJcbiAgICAgICAgICAvLyBvciB0aGUgdmVyc2lvbiBvZiBOb2RlLmpzIHlvdSBhcmUgdXNpbmdcclxuICAgICAgICAvLyAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAgIC8vICAgICBpbmNsdWRlOiBbXCJAYmFiZWwvcHJlc2V0LXJlYWN0XCJdLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyBkZXBlbmRlbmNpZXMgOntcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVSxTQUFTLG9CQUFvQjtBQUNqVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUM5QixTQUFPO0FBQUEsSUFDSCxTQUFTLENBQUMsTUFBTSxHQUFFLE9BQU8sQ0FBQztBQUFBLElBQzFCLFFBQVE7QUFBQSxNQUNKLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0YsTUFBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDeEM7QUFBQSxJQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVlKO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
