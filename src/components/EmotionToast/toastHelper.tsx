// src/components/EmotionToast/toastHelper.ts
import { useEmotionToast } from './useEmotionToast'

export const useToastHelper = () => {
  const { showToast } = useEmotionToast()

  return {
    showSuccessToast: (msg: string) =>
      showToast({ type: 'success', message: msg }),

    showErrorToast: (msg: string) =>
      showToast({ type: 'error', message: msg }),

    showWarningToast: (msg: string) =>
      showToast({ type: 'warn', message: msg }),

    showInfoToast: (msg: string) =>
      showToast({ type: 'info', message: msg }),

    showGPTToast: (msg: string) =>
      showToast({ type: 'gpt', message: msg }),

    // 필요 시 사용자 정의
    showCustomToast: (msg: string) =>
      showToast({ type: 'custom', message: msg }),
  }
}
