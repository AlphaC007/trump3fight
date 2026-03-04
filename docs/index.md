# The $TRUMP Thesis Lab

<div class="hero-shell">
  <div class="hero-kicker">EVIDENCE-FIRST BULL-THESIS RESEARCH</div>
  <div class="hero-title">$TRUMP Path to $100</div>
  <div class="hero-subtitle">Bull-first interpretation with explicit invalidation boundaries.</div>
  <div class="hero-actions">
    <a class="cta-btn cta-primary" href="cio-reports/latest/">Read Today’s CIO Hub</a>
    <a class="cta-btn cta-secondary" href="trends/">Open Trend Dashboard</a>
  </div>
</div>

## Research Position

This site tracks whether the **$TRUMP to $100 thesis** remains valid under transparent, falsifiable rules.

- This is **research**, not investment advice.
- Facts, interpretation, and uncertainty are separated.
- Bull-first framing is always constrained by invalidation triggers.

---

## Trend Analysis (Live)

We track price structure, Bull Probability, and holder concentration continuously.

**Current quick view (auto-updated):**
- Price: <span id="home-price">--</span>
- Bull Probability: <span id="home-bull">--</span>
- Top 10 Holder Concentration: <span id="home-top10">--</span>

➡️ Open full interactive dashboard: [Trend Analysis](trends.md)

<div id="home-trend-mini" style="margin-top:10px; width:100%; height:150px;"></div>

<script src="assets/js/echarts.min.js"></script>
<script>
(async function () {
  const box = document.getElementById('home-trend-mini');
  if (!box || !window.echarts) return;
  try {
    const res = await fetch('assets/data/trends.json', { cache: 'no-cache' });
    if (!res.ok) return;
    const payload = await res.json();
    const points = payload.points_daily || payload.points_raw || [];
    if (!points.length) return;

    const last = points[points.length - 1] || {};
    const priceEl = document.getElementById('home-price');
    const bullEl = document.getElementById('home-bull');
    const top10El = document.getElementById('home-top10');

    if (priceEl && Number.isFinite(last.price_usd)) {
      priceEl.textContent = `$${Number(last.price_usd).toFixed(4)}`;
    }
    if (bullEl && Number.isFinite(last.bull_probability_pct)) {
      bullEl.textContent = `${Number(last.bull_probability_pct).toFixed(2)}%`;
    }
    if (top10El && Number.isFinite(last.top10_holder_pct)) {
      top10El.textContent = `${Number(last.top10_holder_pct).toFixed(2)}%`;
    }

    const labels = points.map(p => p.day || p.ts || '');
    const price = points.map(p => p.price_usd ?? null);
    const chart = echarts.init(box);
    chart.setOption({
      grid: { left: 10, right: 10, top: 15, bottom: 20 },
      xAxis: { type: 'category', data: labels, show: false },
      yAxis: { type: 'value', show: false, scale: true },
      tooltip: { trigger: 'axis' },
      series: [{
        type: 'line',
        data: price,
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2 },
        areaStyle: { opacity: 0.12 }
      }]
    });
    window.addEventListener('resize', () => chart.resize());
  } catch (_) {}
})();
</script>

---

## Method & Trust

This project is built on three pillars:

1. **Data Integrity**: continuously refreshed, verifiable multi-source inputs.
2. **Transparent Methodology**: scenario model and assumptions are public.
3. **Falsifiability**: thesis remains valid only while triggers remain unconfirmed.

Read: [Trust & Verification](trust.md)

---

## For Agents

We provide machine-readable entry points for AI systems:

- Agent entry page: [For Agents](for-agents.md)
- LLM contract: [llms.txt](llms.txt)
- Agent index JSON: [agent-index.json](agent-index.json)
- Latest thesis hub: [CIO Intelligence Hub](cio-reports/latest.md)

---

*Daily gratitude to mothers: before every empire of thought, there is a mother's hand; before every law of reason, there is mercy. From that sacrifice, life receives its covenant — and in this work, with gratitude to zlf, we renew the duty to be worthy of it.*
