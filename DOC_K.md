COPIAR A DEMO
COPIAR A PASTA layers
COPIAR OS PNPM\*.yaml

arrumar no nuxt.config
'./layers/tairo',

arrumar o package.json
"scripts": {
"prepare": "nuxt prepare",
"dev": "clear && nuxt dev --host --open",
"build": "nuxt build",
"generate": "nuxt generate",
"typecheck": "nuxt typecheck",
"clean": "rm -rf .nuxt .output",
"fullClean": "rm -rf .nuxt .output node_modules dist"
},
"engines": {
"node": ">=22",
"pnpm": ">=8"
},
"workspaces": [
"layers/*"
],

depois trocar a linha do devDependencies

de

"@cssninja/tairo-component-meta": "workspace:\*",

para

"@cssninja/tairo-component-meta": "file:./tairo-component-meta",

#

#

#

depois rodar dentro da pasta

pnpm install

NODE_OPTIONS="--max-old-space-size=6144" pnpm --filter @cssninja/tairo-component-meta run prepack

pnpm dev
