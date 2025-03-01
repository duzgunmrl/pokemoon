import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // ✅ Importe tous les composants
import * as directives from 'vuetify/directives';

export default createVuetify({
  components, // ✅ Active tous les composants Vuetify
  directives,
  theme: { defaultTheme: 'light' },
});
