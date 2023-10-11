import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// first, bring the federation plug-in
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "whatever-remote-app",
			// the remote entry to be exposed for other consumers
			filename: "remoteEntry.js",
			// Modules to expose
			exposes: {
				// the component that is exposed to be consumed
				"./Button": "./src/components/Button.jsx",
			},
			// what libraries the this spa depends on are shared
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
