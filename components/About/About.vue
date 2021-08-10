<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="5" class="pa-6">
          <div>
            <title-deco :text="$t('agencyLanding.about_title')" />
            <div class="puzzle" v-if="isDesktop">
              <div class="piece-big">
                <span />
              </div>
              <div class="piece-small-top">
                <span />
              </div>
              <div class="piece-small-bottom">
                <span />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="pa-6">
          <h4 class="title-default use-text-subtitle">
            {{ $t('agencyLanding.about_subtitle') }}
          </h4>
          <counter />
          <blockquote>
            {{ $t('agencyLanding.about_quote') }}
          </blockquote>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../Title/title-style';
</style>

<script>
import Counter from '../Counter'
import TitleDeco from '../Title/WithDecoration'

export default {
  components: {
    Counter,
    TitleDeco
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
