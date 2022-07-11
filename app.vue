<template>
  <div>
    <Head>
      <Link rel="icon" href="/assets/favicon.ico" sizes="any" />
    </Head>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
