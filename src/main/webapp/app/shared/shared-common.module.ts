import { NgModule } from '@angular/core';

import { JhipsterProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterProjectSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterProjectSharedCommonModule {}
