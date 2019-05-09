<template>
  <div class="uni-component-config--container">
    <vi-title title="入口列表" del="1"></vi-title>
    <ul class="entry-list">
      <li
        v-for="(item, idx) in defaultList"
        :key="item.name"
        class="entry-list-item"
      >
        <vi-form-item label="Logo 图片">
          <div class="upload-img">
            <image
              v-if="item.imgUrl"
              :src="item.imgUrl"
              key="has-label"
              class="entry-list-item--logo"
            />
            <i
              v-else
              key="no-label"
              class="entry-list-item--logo"
            ></i>
            <el-button type="text" class="upload-button" @click="uploadLogo(idx)">上传图片</el-button>
          </div>
        </vi-form-item>
        <vi-form-item label="名称">
          <vi-input class="entry-list-item--name" :value="defaultList[idx].name" @input="onInput(idx, $event)" />
        </vi-form-item>
        <vi-form-item label="跳转标识">
          <vi-input class="entry-list-item--link" :value="defaultList[idx].link" @input="onInput(idx, $event)" />
        </vi-form-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'uni-component-config--container',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      currentUseComponent: 'currentUseComponent',
      defaultList: 'entryList/list'
    }),
  },
  methods: {
    ...mapActions({
      changeEntryName: 'entryList/changeEntryName',
      uploadEntryLogo: 'entryList/uploadEntryLogo'
    }),
    onInput(idx, value) {
      this.changeEntryName({
        idx,
        value
      })
    },
    uploadLogo(idx) {
      const list = [
        'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
      ]

      this.uploadEntryLogo({
        idx,
        img: list[idx]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.uni-component-config--container {
  .entry-list-item {
    display: flex;
    flex-flow: column;
    margin-bottom: 16px;
  }
  .entry-list-item--input__wrapper {
    display: flex;
    flex-flow: column;
  }
  .entry-list-item--logo {
    flex: none;
    width: 48px;
    height: 48px;
    background: #eee;
    border-radius: 50%;
    margin-right: 8px;
  }
  .entry-list-item--name {
    text-align: left;
  }
  .upload-img {
    display: flex;
    align-items: center;
  }
}
</style>
