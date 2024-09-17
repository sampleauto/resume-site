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
const defaultValue = "developer";
</script>

<template>
  <div class="min-w-full h-2/5 mb-4">
    <Card>
      <CardHeader>
        <CardTitle> Certifications </CardTitle>
        <CardDescription> Certifications and courses </CardDescription>
      </CardHeader>
      <CardContent class="h-full">
        <Accordion
          type="single"
          class="w-full"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionItem value="developer" key="developer">
            <AccordionTrigger class="flex">
              <div>Certified SCRUM Developer</div>
              <div
                class="ml-auto mr-2 font-normal text-sm text-muted-foreground"
              >
                April 2023
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Card class="w-full border-none">
                <CardHeader>
                  <CardTitle> International Scrum Institute </CardTitle>
                  <CardDescription>
                    <a
                      href="https://www.scrum-institute.org/badges/49916683035902"
                      class="hover:underline"
                      target="_blank"
                      >Badge Link</a
                    >
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="pt-6 md:flex min-h-full">
                    <div class="w-full md:w-[55%] mr-8 mt-[-20px] text-justify">
                      This certificate is designed to help you prepare for a
                      role as a developer in a SCRUM environment. This course
                      covers a wide range of topics including SCRUM practices,
                      code design, development, testing, and other development
                      activities.
                    </div>
                    <div class="md:w-1/3 mt-2 md:mt-[-20px]">
                      <strong>Skills:</strong>
                      Problem-Solving, Communication, Project Management,
                      Development
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
