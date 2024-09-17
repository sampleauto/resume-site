<script setup lang="ts"></script>

<template>
  <div class="min-w-full h-2/5 mb-4">
    <Card>
      <CardHeader>
        <CardTitle> Certifications </CardTitle>
        <CardDescription> Certifications and courses </CardDescription>
      </CardHeader>
      <CardContent>
        <Card class="w-full">
          <CardHeader>
            <CardTitle> Certified SCRUM Developer </CardTitle>
            <CardDescription class="flex">
              <div>
                International Scrum Institute |
                <a
                  href="https://www.scrum-institute.org/badges/49916683035902"
                  class="hover:underline"
                  target="_blank"
                  >Badge Link</a
                >
              </div>
              <div class="ml-auto">April 2023</div>
            </CardDescription>
          </CardHeader>
          <CardContent class="flex">
            <Card class="w-2/3">
              <CardHeader>
                <CardTitle> Description </CardTitle>
              </CardHeader>
              <CardContent>
                This certificate is designed to help you prepare for a role as a
                developer in a SCRUM environment. This course covers a wide
                range of topics including SCRUM practices, code design,
                development, testing, and other development activities.
              </CardContent>
            </Card>
            <Card class="w-1/3 ml-4">
              <CardHeader>
                <CardTitle> Skills </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="mt-2">
                  <strong>Skills:</strong>
                  Problem-Solving, Communication, Project Management,
                  Development
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
</template>
