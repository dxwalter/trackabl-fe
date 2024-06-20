<template>
  <div class="flex flex-col xl:flex-row gap-1 xl:gap-12">
    <div class="donut-chart">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div
      class="chart-legend flex flex-col flex-wrap gap-4 xl:self-center h-[132px] xl:h-[150px] content-between"
      id="labels"
    >
      <div
        class="flex self-start gap-2 text-grey-500"
        v-for="(label, i) in chartData.labels"
        :key="`label-${i}`"
      >
        <div
          class="w-[8px] h-[8px] rounded-[50%] self-center"
          :style="{ backgroundColor: chartData.datasets[0].backgroundColor[i] }"
        ></div>
        <p>{{ label }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

// Plugin to draw text in the center
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = 16;

    // Text 1: All Expenses
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textBaseline = 'middle';
    const text1 = 'All Expenses';
    const textX1 = Math.round((width - ctx.measureText(text1).width) / 2);
    const textY1 = height / 2 - 20; // Adjust vertical position for the first line
    ctx.fillText(text1, textX1, textY1);

    // Text 2: £0.00
    ctx.font = `30px sans-serif`; // Slightly smaller font size
    const text2 = '£0.00';
    const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
    const textY2 = height / 2 + 10; // Adjust vertical position for the second line
    ctx.fillText(text2, textX2, textY2);
    ctx.save();
  },
};

Chart.register(centerTextPlugin);

export default defineComponent({
  name: 'DonutChart',
  components: {
    Doughnut,
  },
  setup() {
    const chartData = ref({
      labels: ['Groceries', 'Restaurant & Fast Food', 'Bar & Cafe'],
      datasets: [
        {
          data: [20, 10, 15],
          backgroundColor: ['#FF5A5F', '#EAECF0', '#EAECF0'],
          hoverBackgroundColor: ['#FF5A5F', '#FFC107', '#EAECF0'],
        },
      ],
    });

    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ₦${value.toLocaleString()}`;
            },
          },
        },
        centerText: true, // Enable the center text plugin
        customLegend: {
          afterUpdate(chart) {
            const legendContainer =
              chart.options.plugins.customLegend.legendRef;
            const ul = document.createElement('ul');
            ul.classList.add('chartjs-legend');

            chart.legend.legendItems.forEach((item) => {
              const li = document.createElement('li');
              li.classList.add('chartjs-legend-item');
              li.style.color = item.fillStyle;
              li.style.display = 'inline-block';
              li.style.marginRight = '10px';

              const colorBox = document.createElement('span');
              colorBox.classList.add('chartjs-legend-color');
              colorBox.style.backgroundColor = item.fillStyle;
              colorBox.style.display = 'inline-block';
              colorBox.style.width = '10px';
              colorBox.style.height = '10px';
              colorBox.style.marginRight = '5px';

              const text = document.createTextNode(item.text);
              li.appendChild(colorBox);
              li.appendChild(text);
              ul.appendChild(li);
            });

            while (legendContainer.firstChild) {
              legendContainer.firstChild.remove();
            }
            legendContainer.appendChild(ul);
          },
        },
      },
    });

    // const updateLegendPosition = () => {
    //   chartOptions.value.plugins.legend.position =
    //     window.innerWidth >= 768 ? 'right' : 'bottom';
    // };

    onMounted(() => {
      //   nextTick(() => {
      //     const legendContainer = document.getElementById('labels');
      //     if (!legendContainer) return;
      //     const ul = document.createElement('ul');
      //     ul.classList.add('chartjs-legend');
      //     chartData.value.labels.forEach((label, index) => {
      //       const li = document.createElement('li');
      //       li.classList.add('chartjs-legend-item');
      //       li.style.color = chartData.value.datasets[0].backgroundColor[index];
      //       li.style.display = 'flex';
      //       li.style.alignItems = 'center';
      //       li.style.marginRight = '10px';
      //       const colorBox = document.createElement('span');
      //       colorBox.classList.add('chartjs-legend-color');
      //       colorBox.style.backgroundColor =
      //         chartData.value.datasets[0].backgroundColor[index];
      //       colorBox.style.display = 'inline-block';
      //       colorBox.style.width = '10px';
      //       colorBox.style.height = '10px';
      //       colorBox.style.borderRadius = '50%';
      //       colorBox.style.marginRight = '5px';
      //       const text = document.createTextNode(label);
      //       li.appendChild(colorBox);
      //       li.appendChild(text);
      //       ul.appendChild(li);
      //     });
      //     while (legendContainer.firstChild) {
      //       legendContainer.firstChild.remove();
      //     }
      //     legendContainer.appendChild(ul);
      //   });
    });

    // watch(() => window.innerWidth, updateLegendPosition);

    return {
      chartData,
      chartOptions,
      chartData,
    };
  },
});
</script>

<style scoped>
.donut-chart {
  position: relative;
  width: 100%;
  max-width: 341px;
}

canvas {
  width: 100% !important;
  height: 341px;
}

.donut-chart .chartjs-render-monitor .chart-legend {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
}

@media (min-width: 768px) {
  .donut-chart .chartjs-render-monitor {
    display: flex;
    align-items: center;
  }
  .donut-chart .chartjs-render-monitor .chart-legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 767px) {
  .donut-chart .chartjs-render-monitor .chart-legend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
