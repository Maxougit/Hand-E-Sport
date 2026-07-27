import next from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "public/**"],
  },
  ...next,
];

export default config;
