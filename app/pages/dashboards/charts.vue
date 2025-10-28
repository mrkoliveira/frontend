<script setup lang="ts">
	definePageMeta({
		title: 'Apex Charts',
		preview: {
			title: 'Chart examples',
			description: 'For data visualization',
			categories: ['dashboards'],
			src: '/img/screens/dashboards-charts.png',
			srcDark: '/img/screens/dashboards-charts-dark.png',
			order: 26
		}
	})
</script>

<template>
	<div class="px-4 md:px-6 lg:px-8 pb-20">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Line Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartLine />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Line Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartLineMulti />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Stepline Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartLineStep />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Area Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartArea />
			</BaseCard>
			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Multiple Area</span>
					</BaseHeading>
				</div>
				<DemoDemoChartAreaMulti />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Bar Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBar />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Multiple Bars</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBarMulti />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Stacked Bars</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBarStacked />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Range Column</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBarRange />
			</BaseCard>

			<BaseCard class="p-6">
				<!-- Title -->
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Horizontal Bar</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBarHorizontal />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Horizontal Multiple</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBarHorizontalMulti />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Bubble Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartBubble />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Timeline Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartTimeline class="2xl:col-span-2" />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Scatter Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartScatter />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Pie Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartPie />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Donut Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartDonut />
			</BaseCard>

			<BaseCard class="p-6">
				<!-- Title -->
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Radial Bar</span>
					</BaseHeading>
				</div>
				<DemoDemoChartRadial />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Radial Multiple</span>
					</BaseHeading>
				</div>
				<DemoDemoChartRadialMulti />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Radial Gauge</span>
					</BaseHeading>
				</div>
				<DemoDemoChartRadialGauge />
			</BaseCard>

			<BaseCard class="p-6">
				<div class="mb-6">
					<BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-white">
						<span>Gauge Chart</span>
					</BaseHeading>
				</div>
				<DemoDemoChartRadialGaugeAlt />
			</BaseCard>
		</div>
	</div>
</template>
