import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { VisionAndMissionComponent } from './vision-and-mission/vision-and-mission.component';
import { TeamComponent } from './team/team.component';
import { QualityPolicyComponent } from './quality-policy/quality-policy.component';
import { SkillingTrainingComponent } from './skilling-training/skilling-training.component';
import { CousultancyServicesComponent } from './cousultancy-services/cousultancy-services.component';
import { FranchiseeBusinessComponent } from './franchisee-business/franchisee-business.component';
import { SoftwareSolutionComponent } from './software-solution/software-solution.component';
import { PhotoGallaryComponent } from './photo-gallary/photo-gallary.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { CenterGorakhpurComponent } from './center-gorakhpur/center-gorakhpur.component';
import { CenterVaranasiComponent } from './center-varanasi/center-varanasi.component';
import { CenterChandauliComponent } from './center-chandauli/center-chandauli.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { MediaComponent } from './media/media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'newupdates', component:NewsUpdatesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'visionandmission', component: VisionAndMissionComponent},
  {path: 'team', component: TeamComponent},
  {path: 'qualitypolicy', component: QualityPolicyComponent},
  {path: 'skillandtrain', component: SkillingTrainingComponent},
  {path: 'consultancy', component: CousultancyServicesComponent},
  {path: 'franchisee', component: FranchiseeBusinessComponent},
  {path: 'softwaresolution', component: SoftwareSolutionComponent},
  {path: 'photogallary', component: PhotoGallaryComponent},
  {path: 'alliances', component: AlliancesComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'centerGorakhpur', component: CenterGorakhpurComponent},
  {path: 'centerVaranasi', component: CenterVaranasiComponent},
  {path: 'centerChandauli', component: CenterChandauliComponent},
  {path: 'newsEvents', component: NewsEventComponent},
  {path: 'media', component: MediaComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
