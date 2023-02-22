<template>
<div class="text-2xl text-gray-900 text-center"> this is what i do </div>

<ul class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
" id="tabs-tabJustify" role="tablist">
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#front-exp" class="nav-link w-full block font-medium
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
      hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
      id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#front-exp" role="tab"
      aria-controls="front-exp">front</a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#back-exp" class="nav-link w-full block font-medium
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
      hover:border-transparent hover:bg-gray-100 focus:border-transparent"
      id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#back-exp" role="tab"
      aria-controls="back-exp" aria-selected="false">back</a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#cloud-exp" class="nav-link w-full block font-medium
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
      hover:border-transparent hover:bg-gray-100 focus:border-transparent"
      id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#cloud-exp" role="tab"
      aria-controls="cloud-exp" aria-selected="false">cloud</a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#IaC-exp" class="nav-link w-full block font-medium
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
      hover:border-transparent hover:bg-gray-100 focus:border-transparent"
      id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#IaC-exp" role="tab"
      aria-controls="IaC-exp" aria-selected="false">IaC</a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContentJustify">
  <div class="tab-pane fade show active" id="front-exp" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
    <FrontExperience />
  </div>
  <div class="tab-pane fade" id="back-exp" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
    <BackExperience />
  </div>
  <div class="tab-pane fade" id="cloud-exp" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
    <CloudExperience />
  </div>
  <div class="tab-pane fade" id="IaC-exp" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
    <IaCExperience />
  </div>
</div>
</template>

<script>

import FrontExperience  from "~/components/molecules/experience/front.vue"
import BackExperience  from "~/components/molecules/experience/back.vue"
import CloudExperience  from "~/components/molecules/experience/cloud.vue"
import IaCExperience from "~/components/molecules/experience/iac.vue"
export default defineComponent({
  name: "tabs",
  components: {
    FrontExperience,
    BackExperience,
    CloudExperience,
    IaCExperience
  }
})
</script>