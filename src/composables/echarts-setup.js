// src/echarts-setup.js
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, BarChart } from "echarts/charts";
import {
   ToolboxComponent,
   TooltipComponent,
   LegendComponent,
   DatasetComponent,
   GridComponent,
} from "echarts/components";

export function setupECharts() {
   // Register necessary ECharts components globally
   use([
      ToolboxComponent,
      TooltipComponent,
      LegendComponent,
      DatasetComponent,
      GridComponent,
      LineChart,
      BarChart,
      CanvasRenderer,
   ]);
}
