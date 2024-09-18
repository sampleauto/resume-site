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
import { jobs } from "~/public/data/jobs";

const defaultValue = "Jacobs";
</script>

<template>
  <div>
    <Card class="h-full">
      <CardHeader>
        <CardTitle> Experience </CardTitle>
        <CardDescription> Non-internship job experience </CardDescription>
      </CardHeader>

      <CardContent class="h-full">
        <Accordion
          type="single"
          class="w-full"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem
            v-for="job in jobs"
            :key="job.company"
            :value="job.company"
          >
            <AccordionTrigger class="flex">
              <div>
                {{ job.company }}
              </div>
              <div
                class="ml-auto mr-2 font-normal text-sm text-muted-foreground"
              >
                {{ job.date }}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Card class="w-full border-none">
                <CardHeader>
                  <CardTitle> {{ job.title }} </CardTitle>
                  <CardDescription class="flex">
                    <div>
                      {{ job.location }}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="pt-6 md:flex min-h-full">
                    <div class="w-full md:w-[55%] mr-8 mt-[-20px] text-justify">
                      {{ job.description }}
                    </div>
                    <div class="md:w-1/3 md:mt-[-28px]">
                      <div v-for="skill in job.skills" class="mt-2">
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
      </CardContent>
    </Card>
  </div>
</template>
