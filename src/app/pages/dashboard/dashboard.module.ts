import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { DashboardComponent } from "./dashboard.component";

import { VisitorsModule } from "../../widgets/visitors/visitors.module";
import { QuickStatsModule } from "../../widgets/quick-stats/quick-stats.module";
import { SalesStatisticsModule } from "../../widgets/sales-statistics/sales-statistics.module";
import { GrowthRateModule } from "../../widgets/growth-rate/growth-rate.module";
import { FeaturedPostModule } from "../../widgets/featured-post/featured-post.module";
import { TodoModule } from "../../widgets/todo/todo.module";
import { PastDaysModule } from "../../widgets/past-days/past-days.module";
import { RecentPostsModule } from "../../widgets/recent-posts/recent-posts.module";
import { PieGridsModule } from "../../widgets/pie-grids/pie-grids.module";

const DASHBOARD_ROUTE = [{ path: "", component: DashboardComponent }];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FormsModule,
        QuickStatsModule,
        SalesStatisticsModule,
        GrowthRateModule,
        FeaturedPostModule,
        TodoModule,
        PastDaysModule,
        RecentPostsModule,
        VisitorsModule,
        PieGridsModule,
        RouterModule.forChild(DASHBOARD_ROUTE),
        BsDropdownModule.forRoot()
    ]
})
export class DashboardModule { }
