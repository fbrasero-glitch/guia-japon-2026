# Guía: Configuración de Persistencia Compartida (Supabase)

Para que los checks que hagas tú se vean en los móviles de los demás, sigue estos 3 pasos sencillos. Es gratis y te llevará menos de 5 minutos.

## 1. Crear el Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com/) y regístrate gratis con tu cuenta de GitHub.
2. Crea un **New Project**. Ponle un nombre (ej. `Japon2026`) y una contraseña para la base de datos.
3. Espera un minuto a que se termine de configurar el servidor.

## 2. Crear la Tabla de Datos
1. En el menú de la izquierda, haz clic en **SQL Editor**.
2. Haz clic en **New Query** y pega este código exactamente:

```sql
create table travel_checks (
  key text primary key,
  value text,
  updated_at timestamp with time zone default now()
);

-- Habilitar permisos para que cualquiera con la clave pueda escribir
alter table travel_checks enable row level security;
create policy "Permitir todo" on travel_checks for all using (true);
```

3. Pulsa el botón **Run**. Ya tienes tu base de datos lista.

## 3. Conectar la Web
1. Ve a **Project Settings** (el icono de la rueda abajo a la izquierda) y luego a **API**.
2. Copia la **Project URL** y la **anon public key**.
3. Abre el archivo `index.html` de tu proyecto y, **antes de todas las etiquetas `<script>`**, añade este código con tus claves:

```html
<script>
  // CONFIGURACIÓN DE SUPABASE
  const SUPABASE_URL = 'pega_aquí_tu_url';
  const SUPABASE_KEY = 'pega_aquí_tu_key';
  
  // No tocar lo de abajo
  window.supabase = window.supabaseJs.createClient(SUPABASE_URL, SUPABASE_KEY);
</script>
```

---
SUPABASE_KEY = sb_publishable_2YmXljKcXIsAXTZ8_XG9SA_V2sniyXQ 
SUPABASE_URL = https://bgnrjfanmheylutlroia.supabase.co

¡Listo! Una vez hecho esto y subido a Netlify, cualquier cambio que haga cualquiera se guardará en la nube y lo verán todos al instante.
