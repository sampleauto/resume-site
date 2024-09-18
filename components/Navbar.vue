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
import { Icon } from "@iconify/vue";

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "PCBuildHub",
    href: "https://pcbh.sampleauto.net",
    description: "A tool to assist in building a PC. (WIP)",
  },
  {
    title: "DMScreen",
    href: "https://dmscreen.sampleauto.net",
    description:
      "A passion project for DnD to show basic character info on cards for DM use. (WIP)",
  },
  {
    title: "Cherry On Top Events",
    href: "https://cherryontopevents.org",
    description:
      "A website for people to get info on my wife's event planning business. (WIP)",
  },
  {
    title: "Proposal Website",
    href: "",
    description:
      "A website I made to propose to my wife shortly after graduation. (No link)",
  },
];

const links: { title: string; href: string; icon: string }[] = [
  {
    title: "GitHub",
    href: "https://github.com/sampleauto",
    icon: "mdi-github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/samuelpilato/",
    icon: "mdi-linkedin",
  },
];
</script>

<template>
  <div class="container flex">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NuxtLink to="/">
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              sampleauto.net
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <NavigationMenu class="ml-auto">
      <NavigationMenuList>
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
                            src="/images/Sam.png"
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
                <NuxtLink to="/education">
                  <NavigationMenuLink as-child>
                    <span
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        Education
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
                        Click here to learn about my degree and studies.
                      </p>
                    </span>
                  </NavigationMenuLink>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">
                  <NavigationMenuLink as-child>
                    <span
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
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <li v-for="project in projects" :key="project.title">
                <NavigationMenuLink as-child>
                  <a
                    v-if="project.href !== ''"
                    :href="project.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ project.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ project.description }}
                    </p>
                  </a>
                  <span
                    v-else
                    :href="project.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ project.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ project.description }}
                    </p>
                  </span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid w-[250px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[350px]"
            >
              <li v-for="link in links" :key="link.title">
                <NavigationMenuLink as-child>
                  <a
                    v-if="link.href !== ''"
                    :href="link.href"
                    target="_blank"
                    class="flex items-center justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <Icon :icon="link.icon" height="28px" />
                    <div class="text-md font-medium leading-none ml-1 pb-1">
                      {{ link.title }}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NuxtLink
            to="/files/Samuel_Pilato_Resume.pdf"
            external
            target="_blank"
          >
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              Resume
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <DarkmodeButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
