export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				module: 'readonly',
				require: 'readonly',
			},
		},
		rules: {
			semi: ['error', 'never'],  // ❌ sem ponto e vírgula
			indent: ['error', 'tab'],  // ✅ usa tabulação
		},
	},
]
