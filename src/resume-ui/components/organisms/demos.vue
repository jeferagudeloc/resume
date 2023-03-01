<template>
<div>
<div class="text-2xl text-gray-900 text-center"> this is what i do </div>
    <FrontExperience />
    <!--BackExperience /-->
    <!--CloudExperience /-->
    <!--IaCExperience /-->
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