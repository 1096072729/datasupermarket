

  <template
        
        >
  <sub-menu
    v-if="item.children && item.children.length>0"
    :cur="item"
    :pre_url="resolvePath(cur.path)"
  />
  <menu-item
    v-else
    :cur="item"
    :pre_url="resolvePath(cur.path)"
  />
</template>

<script>
export default {
  name: 'MenuItem',
props: {
  item:{}
}
}
</script>


<style lang="scss" scoped>
</style>