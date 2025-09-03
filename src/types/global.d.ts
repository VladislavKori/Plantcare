declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe?: {
          user: {
            id: number;
            first_name: string;
            last_name: string;
            username: string;
            language_code: string;
            allows_write_to_pm: boolean;
            photo_url: string;
          }
        };
        themeParams: {
          bg_color: string;
          text_color: string;
          secondary_bg_color: string;
        }
      }
    };
  }
}

export { };