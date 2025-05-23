import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];