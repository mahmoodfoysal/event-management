import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,

  // Ignore files/folders
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // 🔥 Add this block
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
