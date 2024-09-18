<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { classes } from "~/public/data/classes";

const defaultValue = "Web Technologies";
</script>

<template>
  <div class="h-full">
    <Card class="h-[90%]">
      <CardHeader>
        <CardTitle> Classes </CardTitle>
        <CardDescription> Relevant Coursework </CardDescription>
      </CardHeader>
      <CardContent class="h-[90%]">
        <ScrollArea class="h-full">
        <Accordion
          type="single"
          class="w-full"
          collapsible
          :default-value="defaultValue"
        >
            <AccordionItem
              v-for="item in classes"
              :key="item.name"
              :value="item.name"
              class="mr-4"
            >
              <AccordionTrigger class="flex">
                <div>
                  {{ item.name }}
                </div>
                <div
                  class="ml-auto mr-2 font-normal text-sm text-muted-foreground"
                >
                  {{ item.date }}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card class="w-full border-none">
                  <CardHeader>
                    <CardTitle> Grade: {{ item.grade }} </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="pt-6 md:flex h-full">
                      <div
                        class="w-full md:w-[55%] mr-8 mt-[-20px] text-justify"
                      >
                        {{ item.description }}
                      </div>
                      <div class="md:w-1/3 md:mt-[-20px] mt-2">
                        <div v-for="skill in item.skills">
                          <strong>{{ skill.name }}:</strong>
                          {{ skill.items.join(", ") }}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
        </Accordion>
    </ScrollArea>
      </CardContent>
    </Card>
  </div>
</template>
