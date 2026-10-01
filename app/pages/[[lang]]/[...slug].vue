<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
definePageMeta({ layout: false })
const route = useRoute()
const { data: page } = await useAsyncData(() => `legal-${route.path}`, () => queryCollection('docs').path(route.path).first())
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
useSeoMeta({ title: () => `${page.value?.title} · route`, description: () => page.value?.description })
const menu = ref(false)
const menuElement = ref<HTMLElement | null>(null)
onClickOutside(menuElement, () => menu.value = false)
const toc = computed(() => page.value?.body?.toc?.links || [])
watch(() => route.path, () => menu.value = false)
</script>
<template>
  <div class="legal-site">
    <header class="legal-header"><div class="legal-bar">
      <NuxtLink to="/" class="legal-brand"><span class="legal-icon">r</span>route</NuxtLink>
      <div ref="menuElement" class="legal-menu"><button type="button" :aria-expanded="menu" aria-controls="legal-outline" @click="menu = !menu" @keydown.esc="menu = false">☰ <span>目录</span></button>
        <nav v-if="menu" id="legal-outline" aria-label="文档与章节目录" @keydown.esc="menu = false">
          <NuxtLink to="/privacy" @click="menu = false">隐私政策</NuxtLink><NuxtLink to="/terms" @click="menu = false">用户协议</NuxtLink>
          <hr><a v-for="item in toc" :key="item.id" :href="`#${item.id}`" @click="menu = false">{{ item.text }}</a>
        </nav>
      </div>
    </div></header>
    <main class="legal-main"><ContentRenderer v-if="page" :value="page" /></main>
    <footer class="legal-footer"><div class="legal-footer-card"><NuxtLink to="/" class="legal-brand"><span class="legal-icon">r</span>route</NuxtLink><nav><NuxtLink to="/privacy">隐私政策</NuxtLink><NuxtLink to="/terms">用户协议</NuxtLink></nav></div><p>route · 法律文档</p><p>更新于 2026 年 10 月 1 日 · 文档草稿</p></footer>
  </div>
</template>
