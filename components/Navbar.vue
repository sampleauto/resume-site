<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects: { title: string, href: string, description: string }[] = [
    {
        title: 'PCBuildHub',
        href: 'https://pcbh.sampleauto.net',
        description: 'A tool to assist in building a PC. (WIP)',
    },
    {
        title: 'DMScreen',
        href: 'https://dmscreen.sampleauto.net',
        description: 'A passion project for DnD to show basic character info on cards for DM use. (WIP)',
    }
]
</script>

<template>
  <div class="container flex pl-10">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NuxtLink to="/">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              sampleauto.net
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Introduction</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
            >
              <li class="row-span-3">
                <NuxtLink to="/">
                  <NavigationMenuLink as-child>
                    <span
                      class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div class="text-center">
                        <Avatar size="lg">
                          <AvatarImage
                            src="/_nuxt/assets/Sam.png"
                            alt="@radix/vue"
                            size="lg"
                          />
                          <AvatarFallback>Sam</AvatarFallback>
                        </Avatar>
                      </div>
                      <div class="mb-2 mt-4 text-lg font-medium">
                        sampleauto.net
                      </div>
                      <p class="text-sm leading-tight text-muted-foreground">
                        This website was built using Vue and Nuxt, stylized
                        using Tailwind.
                      </p>
                    </span>
                  </NavigationMenuLink>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/experience">
                  <NavigationMenuLink as-child>
                    <span
                      href="/docs"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        Experience
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
                        Click here to learn about my work experience as a
                        developer.
                      </p>
                    </span>
                  </NavigationMenuLink>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="about">
                  <NavigationMenuLink as-child>
                    <span
                      href="/about"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        About Me
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
                        Click here to find out what I do outside of work.
                      </p>
                    </span>
                  </NavigationMenuLink>
                </NuxtLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/_nuxt/assets/resume.pdf"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    download="Samuel_Pilato_Resume.pdf"
                  >
                    <div class="text-sm font-medium leading-none">Resume</div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      Click here to download a copy of my current resume.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li v-for="project in projects" :key="project.title">
              <NavigationMenuLink as-child>
                <a
                  :href="project.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">{{ project.title }}</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {{ project.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <DarkmodeButton />
  </div>
</template>
