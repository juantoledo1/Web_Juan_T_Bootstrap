/// <reference types="astro/client" />

// Definir estilos globales
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
