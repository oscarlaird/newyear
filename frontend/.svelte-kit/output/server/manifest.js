export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.ed99dd56.js","app":"_app/immutable/entry/app.63eceaed.js","imports":["_app/immutable/entry/start.ed99dd56.js","_app/immutable/chunks/index.706f880e.js","_app/immutable/chunks/singletons.c82174a5.js","_app/immutable/chunks/index.acf3d4f1.js","_app/immutable/entry/app.63eceaed.js","_app/immutable/chunks/index.706f880e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
