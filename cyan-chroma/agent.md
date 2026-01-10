# agent.md

## Project Knowledge Base -- Interior Designer Website (Astro)

### 🎯 Cel projektu

Stworzenie estetycznej, szybkiej i SEO-friendly strony internetowej dla
projektantki wnętrz. Strona ma charakter wizytówki / portfolio (nie SPA,
nie aplikacja webowa).

Inspiracja wizualna: - minimalistyczne strony projektantów wnętrz - duże
zdjęcia, dużo whitespace - osobne podstrony (nie jedna długa strona)

------------------------------------------------------------------------

## 🧠 Kontekst technologiczny

### Stack

-   Astro (SSG -- Static Site Generation)
-   HTML / CSS
-   Minimalny JavaScript
-   Brak Reacta / Angulara
-   Brak backendu

Opcjonalnie: - Formularz: Formspree / EmailJS - Hosting: GitHub Pages /
Netlify / Vercel

------------------------------------------------------------------------

## 🧭 Filozofia projektu

-   **Content \> Framework**
-   **Design \> Logika**
-   **SEO i performance są ważniejsze niż architektura**
-   Zero overengineeringu

Nie używać: - Angulara - SPA - client-side routing - ciężkich bibliotek
JS

------------------------------------------------------------------------

## 🗂 Struktura projektu

src/
  assets/
    astro.svg
    background.svg
  components/
    Welcome.astro
  layouts/
    Layout.astro
  pages/
    index.astro
    about.astro
    offer.astro
    portfolio.astro
    contact.astro
  styles/
    global.scss

------------------------------------------------------------------------

## 🛣 Routing (Astro)

-   Routing oparty o pliki
-   Każdy plik w `src/pages` = jedna podstrona
-   Brak routera, brak konfiguracji

------------------------------------------------------------------------

## 🧱 Layout

-   Wspólny head, nawigacja, footer
-   Slot na treść strony

------------------------------------------------------------------------

## 🧩 Komponenty

-   Statyczne
-   Minimalny JS
-   Bez globalnego stanu

------------------------------------------------------------------------

## 🔍 SEO

-   Unikalny title
-   Meta description
-   Jeden H1
-   Alt w obrazach

------------------------------------------------------------------------

## ⚡ Performance

-   Minimalny JS
-   Optymalizacja obrazów
-   Lighthouse 90+

------------------------------------------------------------------------

## ❌ Czego NIE robić

-   SPA
-   Frameworki frontendowe
-   Overengineering
