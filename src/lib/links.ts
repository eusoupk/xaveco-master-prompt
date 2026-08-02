export const CHECKOUT_URL = 'https://pay.hotmart.com/V106597454H?off=agei56h5';
export const APP_LOGIN_URL = 'https://desenrola-comigo.lovable.app/login';

/** Redireciona para o checkout Hotmart (mesma aba: evita bloqueio de popup no in-app browser). */
export function goToCheckout() {
  try {
    window.location.href = CHECKOUT_URL;
  } catch {
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  }
}
