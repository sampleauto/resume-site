<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
</script>

<template>
  <div class="container mx-auto p-8">
    <Card>
      <CardContent>
        <div class="flex mt-4 mx-4">
          <div class="text-center w-[50%]">
            <img
              src="/images/Sam.png"
              alt="Profile Picture"
              class="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h1 class="text-4xl font-bold mb-2">Samuel Pilato</h1>
            <p class="text-lg text-muted-foreground mb-4">
              Senior Software Engineer
            </p>
          </div>
          <div class="w-[50%] mx-4 text-justify">
            <p class="text-md text-muted-foreground mb-8">
              Welcome to my resume website. Here you can find information about
              my professional experience, education, and personal projects I'm
              currently working on. This website was built using Vue and Nuxt,
              stylized using Tailwind, and hosted on Google Cloud Platform. It
              is also under active development, so check back often for updates.
            </p>
            <div class="flex justify-center space-x-4">
              <NuxtLink to="experience" class="text-blue-500 hover:underline"
                >Experience</NuxtLink
              >
              <NuxtLink to="education" class="text-blue-500 hover:underline"
                >Education</NuxtLink
              >
              <NuxtLink to="about" class="text-blue-500 hover:underline"
                >About Me</NuxtLink
              >
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <!-- <Separator class="mt-8" /> -->
  </div>
</template>
