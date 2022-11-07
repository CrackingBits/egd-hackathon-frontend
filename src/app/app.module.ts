import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeCs from '@angular/common/locales/cs';
import { forwardRef, NgModule, Provider } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { loadMessages, locale } from 'devextreme/localization';
import DataGrid from 'devextreme/ui/data_grid';
import { environment } from '../environments/environment';
import { ApiModule } from './api-swagger/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ApiInterceptor } from './shared/services/api.interceptor';

// eslint-disable-next-line @typescript-eslint/no-var-requires
declare var require: any;
const messagesCs = require('devextreme/localization/messages/cs.json');
loadMessages(messagesCs);
locale('cs'); // locale(navigator.language);
registerLocaleData(localeCs, 'cs');

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true,
};

@NgModule({
  declarations: [AppComponent, SignInComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    ApiModule.forRoot({ rootUrl: environment.api }),
    AngularFireAuthModule,
    //    AngularFirestoreModule,
    //    AngularFireStorageModule,
    //    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NgbModule,
  ],
  providers: [ApiInterceptor, API_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // https:js.devexpress.com/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#defaultOptionsrule
    const dataGrid: any = DataGrid;
    dataGrid.defaultOptions({
      //      device: { deviceType: 'desktop' },
      options: {
        onToolbarPreparing(e: any) {
          if (!e.toolbarOptions.hideRefreshInItems) {
            // https:www.devexpress.com/Support/Center/Question/Details/T682324/datagrid-use-default-and-custom-options
            if (e && e.toolbarOptions && e.toolbarOptions.items) {
              e.toolbarOptions.items.push({
                widget: 'dxButton',
                options: {
                  icon: 'refresh',
                  onClick: e.toolbarOptions.customRefresh
                    ? e.toolbarOptions.customRefresh
                    : () => {
                        e.component.state({});
                        e.component.clearSelection();
                      },
                },
                location: 'after',
              });
            }
          }
        },
        filterRow: { visible: false, applyFilter: 'auto' },
        filterPanel: { visible: false },
        searchPanel: { visible: true },
        headerFilter: { visible: true, allowSearch: true },
        showBorders: true,
        columnMinWidth: 30,
        allowColumnReordering: true,
        // https:js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#state
        columnAutoWidth: false,
        allowColumnResizing: true,
        rowAlternationEnabled: true,
        columnHidingEnabled: true,
        paging: { pageSize: 10 },
        pager: {
          showPageSizeSelector: true,
          showInfo: true,
          allowedPageSizes: [10, 20, 50, 100, 500],
        },
        grouping: { autoExpandAll: false },
        groupPanel: { visible: false },
        selection: { mode: 'none' },
        sorting: { mode: 'multiple' },
        columnChooser: { enabled: true, mode: 'select' },
        export: {
          enabled: true,
          fileName: 'export',
          allowExportSelectedData: false,
        },
        stateStoring: {
          enabled: false,
          type: 'localStorage',
          savingTimeout: 1000,
        },
        dateSerializationFormat: 'yyyy-MM-ddTHH:mm:ssZ',
        editing: {
          mode: 'popup',
          popup: {
            width: 'auto',
            height: 'auto',
          },
          form: {
            colCount: 1,
          },
        },
      },
    });
  }
}
