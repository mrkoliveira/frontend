<template>
	<div class="h-screen md:flex dark:[--color-input-default-bg:var(--color-muted-950)]">
		<!-- LEFT -->
		<div class="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex">
			<div class="mx-auto max-w-xs text-center">
				<BaseHeading as="h2" size="3xl" weight="medium" class="text-white">{{ $t('lang.2') }}</BaseHeading>
				<BaseParagraph size="sm" class="text-muted-200 mb-3">{{ $t('lang.3') }}</BaseParagraph>
				<BaseButton to="/auth/login" rounded="lg" class="w-full">{{ $t('btn.accessTo') }}</BaseButton>
			</div>
			<div class="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72" />
			<div class="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48" />
			<div class="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40" />

			<div class="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72" />
			<div class="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48" />
			<div class="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40" />
		</div>
		<!-- LEFT END-->
		<!-- RIGHT -->
		<div class="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2">
			<div class="mx-auto flex w-full max-w-xs items-center justify-between">
				<NuxtLink to="/" class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300">
					<!-- Desktop 30%, Mobile 50% -->
					<AppLogo :width="'80%'" :mobileWidth="'50%'" align="left" />
				</NuxtLink>
				<div>
					<BaseThemeToggle />
				</div>
			</div>

			<!-- FORM SING IN -->
			<form method="POST" action="" class="mx-auto w-full max-w-xs" novalidate @submit.prevent="onSubmit">
				<BaseHeading as="h2" size="3xl" weight="medium"> {{ $t('page.title.signup') }} 🚀 </BaseHeading>
				<BaseParagraph size="sm" class="text-muted-400 mb-6">
					{{ $t('lang.1') }}
				</BaseParagraph>

				<div class="mb-4 space-y-3">
					<Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="username">
						<BaseField v-slot="{ inputAttrs, inputRef }" :label="$t('form.labelName')" :state="errorMessage ? 'error' : 'idle'" :error="t(errorMessage || 'none')" :disabled="isSubmitting" required>
							<TairoInput :ref="inputRef" v-bind="inputAttrs" :model-value="field.value" autocomplete="username" rounded="lg" icon="solar:user-rounded-linear" @update:model-value="handleChange" @blur="handleBlur" />
						</BaseField>
					</Field>
					<Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="email">
						<BaseField v-slot="{ inputAttrs, inputRef }" :label="$t('form.labelEmail2')" :state="errorMessage ? 'error' : 'idle'" :error="t(errorMessage || 'none')" :disabled="isSubmitting" required>
							<TairoInput :ref="inputRef" v-bind="inputAttrs" :model-value="field.value" type="email" autocomplete="current-email" rounded="lg" icon="solar:mention-circle-linear" @update:model-value="handleChange" @blur="handleBlur" />
						</BaseField>
					</Field>
					<Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="password">
						<BaseField v-slot="{ inputAttrs }" :label="$t('form.labelPassword')" :state="errorMessage ? 'error' : 'idle'" :error="t(errorMessage || 'none')" :disabled="isSubmitting" required>
							<LazyAddonInputPassword
								ref="passwordRef"
								v-bind="inputAttrs"
								:locale="loadPtBrLocale"
								:model-value="field.value"
								:error="t(errorMessage || 'none')"
								icon="solar:lock-keyhole-linear"
								:disabled="isSubmitting"
								:user-inputs="[values.username ?? '', values.email ?? '']"
								rounded="lg"
								class="rounded-s-none border-s-0 ring-0!"
								@update:model-value="handleChange"
								@blur="handleBlur"
							/>
						</BaseField>
					</Field>
					<Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="confirmPassword">
						<BaseField v-slot="{ inputAttrs, inputRef }" :label="$t('form.confirmPassword')" :state="errorMessage ? 'error' : 'idle'" :error="t(errorMessage || 'none')" :disabled="isSubmitting" required>
							<TairoInput :ref="inputRef" v-bind="inputAttrs" :model-value="field.value" type="password" rounded="lg" icon="ph:check" @update:model-value="handleChange" @blur="handleBlur" />
						</BaseField>
					</Field>
				</div>
				<div class="mb-6">
					<Field name="agree" v-slot="{ field, errorMessage, handleChange }">
						<label class="flex items-center gap-3 cursor-pointer">
							<TairoCheckboxAnimated :model-value="field.value" @update:model-value="handleChange" variant="success" />
							<BaseText class="text-muted-500 dark:text text-justify" size="sm">
								{{ $t('lang.4') }}
							</BaseText>
						</label>
						<p v-if="errorMessage" class="text-destructive-500 text-sm mt-2">
							{{ t(errorMessage) }}
						</p>
					</Field>
				</div>

				<BaseButton :disabled="isSubmitting" :loading="isSubmitting" type="submit" rounded="lg" variant="primary" class="h-11! w-full"> {{ $t('btn.createCount') }} 🤝 </BaseButton>
				<!-- No account link -->
				<p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5">
					<span>{{ $t('lang.2') }}</span>
					<NuxtLink to="/auth/" class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none">
						{{ $t('btn.accessTo') }}
					</NuxtLink>
				</p>
			</form>
			<!-- -->

			<!-- Social Sign Up Buttons -->
			<div v-if="hasLoginSocial">
				<BaseParagraph size="sm" class="text-muted-400 mb-6"> Login with social media or your credentials </BaseParagraph>
				<div class="flex flex-wrap justify-between gap-4">
					<!-- Google button -->
					<button class="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 focus-visible:nui-focus relative inline-flex grow items-center justify-center gap-2 rounded-md border bg-white px-6 py-4 dark:text-white">
						<Icon name="logos:google-icon" class="size-5" />
						<div>Login with Google</div>
					</button>
					<!-- Twitter button -->
					<button class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 focus-visible:nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded-md px-5 py-4 text-center transition-colors duration-300 md:w-auto">
						<Icon name="fa6-brands:x-twitter" class="mx-auto size-4" />
					</button>
					<!-- Linkedin button -->
					<button class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 focus-visible:nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded-md px-5 py-4 text-center transition-colors duration-300 md:w-auto">
						<Icon name="fa6-brands:linkedin-in" class="mx-auto size-4" />
					</button>
				</div>
				<!-- 'or' divider -->
				<div class="flex-100 mt-8 flex items-center">
					<hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
					<span class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light"> OR </span>
					<hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
				</div>
			</div>
			<div class="text-center">
				<BaseText size="sm" class="text-muted-400"> © {{ new Date().getFullYear() }} Tairo. All rights reserved. </BaseText>
			</div>
		</div>
		<!-- RIGHT END -->
	</div>
	<!-- componente do Loader de backend -->
	<LoaderWaitBackEnd :show="showWatingBE" />
</template>

<script setup lang="ts">
	import type { AddonInputPassword } from '#components'
	import { toTypedSchema } from '@vee-validate/zod'
	import { Field, useForm } from 'vee-validate'
	import * as z from 'zod'

	const router = useRouter()
	const toaster = useNuiToasts()
	const { t } = useI18n()

	const config = useRuntimeConfig()
	const hasLoginSocial = ref(config.public.singInSocial || false)
	const showWatingBE = ref(false)

	useHead(() => ({
		title: t('page.title.signin'),
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - ${config.public.titlePortal}` : ``
		}
	}))

	definePageMeta({
		layout: 'empty',
		title: 'Signup',
		preview: {
			title: 'Signup 1',
			description: 'For authentication and sign up',
			categories: ['layouts', 'authentication'],
			src: '/img/screens/auth-signup-1.png',
			srcDark: '/img/screens/auth-signup-1-dark.png',
			order: 157
		}
	})

	const loadPtBrLocale = async () => {
		return await import('@zxcvbn-ts/language-pt-br')
	}

	const VALIDATION_KEYS = {
		EMAIL_REQUIRED: 'form.err.emailRequired',
		USERNAME_LENGTH_MIN: 'form.err.userNameMin',
		USERNAME_LENGTH_MAX: 'form.err.userNameMax',
		PASSWORD_LENGTH_MIN: 'form.err.passwdMin',
		PASSWORD_LENGTH_MAX: 'form.err.passwdMax',
		PASSWORD_CONTAINS_EMAIL: 'form.err.passwdEmail',
		PASSWORD_MATCH: 'form.err.passwdMissMath',
		PASSWORD_1: 'form.err.passwdE1',
		PASSWORD_2: 'form.err.passwdE2',
		PASSWORD_3: 'form.err.passwdE3',
		PASSWORD_4: 'form.err.passwdE4',
		AGREE_REQUIRED: 'form.err.agree'
	}

	const zodSchema = z
		.object({
			username: z.string().min(3, VALIDATION_KEYS.USERNAME_LENGTH_MIN).max(250, VALIDATION_KEYS.USERNAME_LENGTH_MAX),
			email: z.string().email(VALIDATION_KEYS.EMAIL_REQUIRED),
			password: z
				.string()
				.min(8, VALIDATION_KEYS.PASSWORD_LENGTH_MIN)
				.max(25, VALIDATION_KEYS.PASSWORD_LENGTH_MAX)
				.regex(/[a-z]/, VALIDATION_KEYS.PASSWORD_1)
				.regex(/[A-Z]/, VALIDATION_KEYS.PASSWORD_2)
				.regex(/[0-9]/, VALIDATION_KEYS.PASSWORD_3)
				.regex(/[!@#$%^&*(),.?:{}|<>]/, VALIDATION_KEYS.PASSWORD_4),
			confirmPassword: z.string(),
			agree: z.boolean().refine((val) => val === true, {
				message: VALIDATION_KEYS.AGREE_REQUIRED
			})
		})
		.superRefine((data, ctx) => {
			if (data.password !== data.confirmPassword) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: VALIDATION_KEYS.PASSWORD_MATCH,
					path: ['confirmPassword']
				})
			}
		})

	const passwordRef = ref<InstanceType<typeof AddonInputPassword>>()
	type FormInput = z.infer<typeof zodSchema>
	const validationSchema = toTypedSchema(zodSchema)

	const initialValues = {
		username: 'minhoca',
		email: 'teste@teste.com',
		password: 'Lely#$8289',
		confirmPassword: 'Lely#$8289',
		agree: true
	} satisfies FormInput

	const { values, handleSubmit, isSubmitting, setFieldError } = useForm({
		validationSchema,
		initialValues
	})

	const { request } = useApi()

	const onSubmit = handleSubmit(async (_values) => {
		console.clear()

		showWatingBE.value = true
	})
</script>
