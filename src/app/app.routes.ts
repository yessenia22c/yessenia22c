import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  { path: 'politicas-de-privacidad', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }
];
