const fs = require("node:fs");
const path = require("node:path");

const pluginPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "@tanstack",
  "start-plugin-core",
  "dist",
  "esm",
  "vite",
  "start-compiler-plugin",
  "plugin.js",
);

if (!fs.existsSync(pluginPath)) {
  console.warn("[patch-tanstack-start-validator] plugin file not found; skipping");
  process.exit(0);
}

let source = fs.readFileSync(pluginPath, "utf8");
const needle = [
  "\t\t\t\t\t\t\t\tawait this.environment.transformRequest(`${absPath}?${SERVER_FN_LOOKUP}`);",
  "\t\t\t\t\t\t\t\tif (serverFnsById[fnId]) return `export {}`;",
].join("\n");
const replacement = [
  needle,
  "\t\t\t\t\t\t\t\tawait this.environment.transformRequest(`${absPath}?tss-serverfn-split`);",
  "\t\t\t\t\t\t\t\tif (serverFnsById[fnId]) return `export {}`;",
].join("\n");

if (!source.includes(replacement) && source.includes(needle)) {
  source = source.replace(needle, replacement);
}

const validationImport = [
  "  const validateIdImport = ${JSON.stringify(validateServerFnIdVirtualModule)} + '?id=' + id",
  "  await import(/* @vite-ignore */ '/@id/__x00__' + validateIdImport)",
  "",
].join("\n");

if (source.includes(validationImport)) {
  source = source.replace(validationImport, "");
}

if (!source.includes(replacement)) {
  console.warn("[patch-tanstack-start-validator] expected validator block not found; skipping");
  process.exit(0);
}

if (source.includes(validationImport)) {
  console.warn("[patch-tanstack-start-validator] expected dev resolver block not patched; skipping");
  process.exit(0);
}

fs.writeFileSync(pluginPath, source);
console.log("[patch-tanstack-start-validator] patched TanStack Start dev validator");
