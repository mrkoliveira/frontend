<script setup lang="ts">
	definePageMeta({
		title: 'List Widgets',
		preview: {
			title: 'List Widgets',
			description: 'For page compositions',
			categories: ['dashboards', 'widgets'],
			src: '/img/screens/dashboards-widgets-lists.png',
			srcDark: '/img/screens/dashboards-widgets-lists-dark.png',
			order: 29
		}
	})
</script>

<template>
	<div class="px-4 md:px-6 lg:px-8 pb-20">
		<div class="grid gap-4 sm:grid-cols-3">
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Members</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoUserList rounded="lg" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Members</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoUserList rounded="full" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<DemoDemoFileListTabbed rounded="full" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>My Tasks</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTodoListCompact color="success" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>My Tasks</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTodoListCompact color="info" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard rounded="lg" class="p-4 md:p-6">
					<DemoDemoTodoListTabbed rounded="sm" color="primary" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Latest comments</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoCommentListCompact />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Topics</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTopicListCompact rounded="lg" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Topics</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTopicListCompact rounded="full" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Timeline</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTimelineCompact rounded="sm" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Timeline</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTimelineCompact rounded="lg" />
				</BaseCard>
			</div>
			<!-- Column -->
			<div class="relative">
				<!-- Widget -->
				<BaseCard class="p-4 md:p-6" rounded="lg">
					<!-- Title -->
					<div class="mb-8 flex items-center justify-between">
						<BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
							<span>Timeline</span>
						</BaseHeading>
						<BaseButton variant="default" size="sm" rounded="md"> View all </BaseButton>
					</div>
					<DemoDemoTimelineCompact rounded="full" />
				</BaseCard>
			</div>
		</div>
	</div>
</template>
