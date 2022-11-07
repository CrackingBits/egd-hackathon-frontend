import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  ApplicationConfig,
  APP_CONFIG,
} from 'src/app/shared/models/app-config';
import { environment } from 'src/environments/environment';
import { CommunityManagerOverviewComponent } from './community-manager-overview.component';

describe('CommunityManagerOverviewComponent', () => {
  let component: CommunityManagerOverviewComponent;
  let fixture: ComponentFixture<CommunityManagerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
      ],
      declarations: [CommunityManagerOverviewComponent],
      providers: [{ provide: APP_CONFIG, useValue: ApplicationConfig }],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityManagerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
