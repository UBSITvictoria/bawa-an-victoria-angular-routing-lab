import { RenderMode, ServerRoute } from '@angular/ssr';
import { FormsModule } from '@angular/forms';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
