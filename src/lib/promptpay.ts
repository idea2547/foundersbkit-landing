/**
 * PromptPay EMVCo QR Code Payload Generator
 * Generates QR data string compatible with Thai banking apps
 */

function crc16ccitt(data: string): number {
  let crc = 0xFFFF;
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
    }
    crc &= 0xFFFF;
  }
  return crc;
}

function pad2(n: number): string {
  return n.toString().padStart(2, '0');
}

function encodeTLV(id: string, value: string): string {
  const len = value.length;
  return id + pad2(len) + value;
}

/**
 * Build PromptPay payload string
 * @param promptpayId - Phone number (e.g. "0812345678") or National ID (e.g. "1234567890123")
 * @param amount - Amount in THB
 */
export function buildPromptPayPayload(promptpayId: string, amount: number): string {
  // Format phone number for EMVCo standard
  // Thai phone: 0812345678 → 0066812345678 (00 + country code 66 + number without leading 0)
  let id = promptpayId.replace(/[-\s]/g, '');
  if (id.startsWith('0') && id.length === 10) {
    // Thai mobile number: strip leading 0, prepend 0066
    id = '0066' + id.substring(1);
  }
  
  // Merchant Account Information (tag 26)
  const aid = 'A000000677010111'; // PromptPay AID
  const merchantAccount = encodeTLV('00', aid) + encodeTLV('01', id);
  const tag26 = encodeTLV('26', merchantAccount);

  // Build payload without CRC
  let payload = '';
  payload += encodeTLV('00', '01');         // Payload Format Indicator
  payload += encodeTLV('01', amount > 0 ? '12' : '11');  // 12 = dynamic (amount set), 11 = static
  payload += tag26;                          // Merchant Account
  payload += encodeTLV('52', '0000');        // Merchant Category Code
  payload += encodeTLV('53', '764');         // Transaction Currency (764 = THB)
  
  if (amount > 0) {
    const amountStr = amount.toFixed(2);
    payload += encodeTLV('54', amountStr);  // Transaction Amount
  }
  
  payload += encodeTLV('58', 'TH');         // Country Code
  
  // CRC placeholder, then compute
  payload += '6304';
  const crc = crc16ccitt(payload);
  payload += crc.toString(16).toUpperCase().padStart(4, '0');
  
  return payload;
}

/**
 * Generate PromptPay QR as data URL
 * Uses a simple SVG-based QR renderer (no dependency needed)
 */
export async function generatePromptPayQRDataURL(promptpayId: string, amount: number): Promise<string> {
  const payload = buildPromptPayPayload(promptpayId, amount);
  
  // Use the QR Code API (free, no key needed) as fallback
  // Or we can render client-side with a simple approach
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(payload)}&bgcolor=ffffff&color=000000&margin=8`;
  
  return qrApiUrl;
}

/**
 * Pricing constants
 */
export const PRICES = {
  light: { usd: 67, thb: 1490 },
  kit: { usd: 197, thb: 4900 },
  founding: { usd: 497, thb: 16900, originalUsd: 997, originalThb: 34900 },
  velocity: { usd: 1500, thb: 49000 },
} as const;

export const PROMPTPAY_ID = '0811255047';

/**
 * Stripe Payment Links (created in Stripe Dashboard)
 * These are direct checkout links — no server-side API key needed
 */
export const STRIPE_LINKS: Record<string, string> = {
  // Main page tiers
  light: 'https://buy.stripe.com/foundersb-light',   // TODO: create in Stripe Dashboard
  kit: 'https://buy.stripe.com/foundersb-kit',       // TODO: create in Stripe Dashboard
  founding: 'https://buy.stripe.com/foundersb-founding', // TODO: create in Stripe Dashboard
  velocity: '',  // Velocity uses email inquiry
  // Distribution page tiers (from clean version)
  audit: 'https://buy.stripe.com/cNi4gy7b4fr91p81u34ow0m',
  sprint: 'https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n',
  partner: 'https://buy.stripe.com/8x2dR82UOa6P3xggoX4ow0o',
};
