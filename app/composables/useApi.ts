// app/composables/useApi.ts

import axios, { type AxiosRequestConfig } from 'axios'
import { useI18n } from 'vue-i18n'
import { useCookie } from '#imports'
import { toastShowError } from '~~/functions/toast'

export interface RespApi<T = any> {
  error: boolean
  message: string
  data: T
}

export function useApi() {
  const { t, locale } = useI18n()
  const config = useRuntimeConfig()
  const BASE_API: string = config.public.baseApi || ""
  const parsedTimeout = Number(config.public.TIME_OUT_AXIOS)
  const TIME_OUT_AXIOS: number = !isNaN(parsedTimeout) && parsedTimeout > 0
    ? parsedTimeout
    : 30000


  if (!BASE_API) {
    toastShowError(t('error.title'), t('error.e001') || 'API não configurada')
    throw new Error("BASE_API não definida em useRuntimeConfig(). Verifique o .env")
  }

  // 🔑 Captura o UUID do WebSocket
  const clientUuid = useCookie('client_uuid').value || ""

  const axiosInstance = axios.create({
    baseURL: BASE_API,
    timeout: TIME_OUT_AXIOS,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Envia o UUID do WebSocket como header em todas as requisições
      'X-Client-UUID': clientUuid,
    },
  })

  async function request<T = any>(
    endpoint: string,
    options: AxiosRequestConfig = {},
    auth: boolean = false
  ): Promise<T | null> {
    const fullUrl = `${auth ? '/auth' : '/out'}/${endpoint}`
    const method = options.method?.toUpperCase() || 'GET'

    if (['POST', 'PUT'].includes(method) && typeof options.data === 'object') {
      options.data = {
        ...options.data,
        lang: locale.value,
      }
    }

    if (auth) {
      const token = useCookie('jwt_token').value
      options.headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        'X-Client-UUID': clientUuid, // refaz o header caso options sobrescreva
      }
    } else {
      options.headers = {
        ...(options.headers || {}),
        'X-Client-UUID': clientUuid, // para rotas públicas também
      }
    }

    try {
      const { data } = await axiosInstance<T>(fullUrl, options)
      return data
    } catch (err: any) {
      const message =
        err?.response?.data?.statusMessage ||
        err?.response?.data?.message ||
        'error.e000'

      toastShowError(t('error.title'), t(message) || t('error.e000'))
      console.error('❌ Erro na API:', message)
      return null
    }
  }

  return { request }
}
