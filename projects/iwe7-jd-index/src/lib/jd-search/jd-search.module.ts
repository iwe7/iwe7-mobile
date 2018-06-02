import { JdSearchViewComponent } from './jd-search-view/jd-search-view';
import { JdSearchThemeDirective } from './jd-search-theme/jd-search-theme';
import { JdSearchLayoutComponent } from './jd-search-layout/jd-search-layout';
import { JdSearchContainerComponent } from './jd-search-container/jd-search-container';
import { NgModule } from '@angular/core';

import { JdSearchComponent } from './jd-search';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [JdSearchComponent, JdSearchContainerComponent, JdSearchLayoutComponent, JdSearchThemeDirective, JdSearchViewComponent],
    declarations: [JdSearchComponent, JdSearchContainerComponent, JdSearchLayoutComponent, JdSearchThemeDirective, JdSearchViewComponent],
    providers: [],
})
export class JdSearchModule { }
