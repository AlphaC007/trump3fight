/**
 * Fix for ECharts on MkDocs Material instant navigation.
 *
 * Problem: navigation.instant loads pages via XHR, so inline <script> tags
 * in trends.md do not re-execute on SPA navigation.
 *
 * Solution: this file is loaded via extra_javascript (persists across SPA
 * navigations) and uses document$ observable to detect page switches,
 * then re-initializes the chart.
 */
(function () {
  function loadEChartsAndInit() {
    if (typeof initTrendChart !== "function") return;
    if (window.echarts) {
      initTrendChart();
      return;
    }
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js";
    s.onload = function () { initTrendChart(); };
    document.head.appendChild(s);
  }

  // MkDocs Material exposes document$ as an RxJS observable on instant nav
  var sub = setInterval(function () {
    if (typeof document$ !== "undefined" && document$.subscribe) {
      clearInterval(sub);
      document$.subscribe(function () {
        if (document.getElementById("trend-chart")) {
          // Small delay to let the DOM settle after SPA swap
          setTimeout(loadEChartsAndInit, 100);
        }
      });
    }
  }, 200);
})();
