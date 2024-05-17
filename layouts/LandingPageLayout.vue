<template>
  <div>
    <div class="bg-nav-color">
      <LandingPageHeader />

      <!-- Hero -->
      <LandingPageHero />
    </div>
    <!-- Benefits -->
    <LandingPageBenefits />
    <slot />
    <LandingPageFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
