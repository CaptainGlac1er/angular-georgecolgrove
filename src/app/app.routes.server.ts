import {RenderMode, ServerRoute} from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
    { path: 'experiences/:company', renderMode: RenderMode.Server },
    { path: 'projects/:project', renderMode: RenderMode.Server },
    { path: '**', renderMode: RenderMode.Prerender }
]