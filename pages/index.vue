<template>
  <div data-test-component="true">
    <div class="bg-nav-color">
      <!-- Hero -->
      <LandingPageHero />
    </div>

    <!-- Benefits -->
    <LandingPageBenefits />
    <!-- Pricing -->
    <LandingPagePricing />
    <!-- About us -->
    <div class="bg-grey-200">
      <LandingPageAboutUs />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing-page-layout",
});
</script>

<style></style>
