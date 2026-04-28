<template>
  <div class="mb-2">
    <h1 class="text-base font-bold">Båt ID: {{ boat.id }}</h1>
    <p class="text-base">Din dashboard</p>
  </div>

  <Button label="Show" size="small" @click="showText = !showText"></Button>
  <div v-if="showText">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus leo. Sed sapien eros, hendrerit congue metus id, ullamcorper
      cursus est. Vestibulum consectetur tristique enim, sit amet semper nulla sodales ac. Nam non porta tellus. Aliquam erat volutpat.
      Suspendisse potenti. Etiam malesuada ligula sit amet ipsum tempus tempor. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Etiam interdum quis felis quis bibendum. Proin vulputate, nulla eu ullamcorper tempor, dolor magna
      interdum augue, at porta orci ante eu quam. Nullam pulvinar, lectus et vehicula facilisis, magna mauris tristique turpis, vel varius
      velit nunc convallis nunc. Nunc non faucibus est, eu finibus felis. In et venenatis nisl. Donec lacus turpis, lobortis sit amet erat
      eu, pretium euismod felis. Donec facilisis est est, sed tempus orci sagittis vel. Sed ultricies nunc sit amet nibh ultricies
      facilisis. Sed posuere nulla vitae ligula porttitor vehicula. Proin in tellus vel ante fringilla varius. Maecenas mattis justo vel
      odio consectetur, ut pulvinar ex mattis. Aenean iaculis urna in neque consequat, nec dignissim felis placerat. Vestibulum a ultricies
      libero. Nunc eget metus felis. Curabitur fermentum dui vulputate metus pulvinar, eu tincidunt sapien ultricies. Nulla facilisi.
      Curabitur sed varius elit, sed dapibus urna. Fusce sit amet lobortis sem. Quisque dolor tortor, volutpat nec eleifend ac, aliquet sit
      amet tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis malesuada nunc quis feugiat. Quisque consectetur,
      neque eget volutpat lacinia, erat eros ultricies neque, eget tincidunt dolor risus eu tellus. Duis convallis turpis eget orci
      facilisis, et mollis enim varius. Pellentesque in condimentum lorem, non accumsan turpis. Praesent tempus faucibus tellus, eu aliquam
      mi bibendum non. Nunc porta fringilla sapien nec lacinia. Fusce molestie, lectus ut aliquet lobortis, justo nisi mollis diam, eget
      dictum urna ex condimentum nibh. Donec vehicula molestie eros, vel hendrerit nibh pretium ut. Nulla bibendum eros felis, efficitur
      aliquet ipsum iaculis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eleifend in
      nisl vel interdum. Integer ultrices, urna ac bibendum eleifend, urna massa aliquam massa, sed commodo lacus augue et ante. Fusce
      sagittis ornare elit vel interdum. Vestibulum feugiat, lacus in elementum laoreet, elit odio consequat turpis, eu viverra enim tellus
      id massa. Nunc consequat et quam vel rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Quisque nec mollis enim. Nunc pharetra tristique lacinia. Integer cursus, mauris id congue aliquam, lorem enim elementum
      ex, ut fermentum nulla ex et est. Vivamus et dui odio. Proin orci odio, imperdiet at vehicula sed, maximus eget ipsum. Proin fermentum
      porttitor mi. Praesent auctor urna sit amet erat imperdiet tempor. Ut ut nulla bibendum, malesuada ipsum id, hendrerit erat. Morbi
      ornare ante vulputate eros egestas, non efficitur leo aliquam. Nulla gravida dictum odio. Cras velit urna, congue vel vestibulum in,
      tristique et eros. Nullam consequat auctor porttitor. Sed eget consequat nisi. In hac habitasse platea dictumst. Ut est libero,
      accumsan nec commodo eu, dapibus vel leo. Integer rhoncus purus id orci pulvinar tempus. Etiam vehicula nunc non leo vestibulum
      varius. Phasellus placerat odio sed mauris consequat sagittis. Vestibulum auctor mauris vel viverra mattis. Morbi sodales in dolor et
      ultricies. Vestibulum in blandit libero. Pellentesque accumsan quam elit, eget tempus est lacinia dapibus. Suspendisse pulvinar felis
      et mi mattis venenatis. Quisque ut laoreet ante, vitae molestie orci. Maecenas quis lobortis turpis. In hac habitasse platea dictumst.
      Fusce eleifend at neque vel interdum. Pellentesque sed dignissim nulla, vel lacinia sapien. Aliquam id orci justo. Sed sit amet nisi
      non lectus dignissim interdum pretium a justo. Suspendisse magna purus, vestibulum quis leo sed, posuere placerat dui. Donec molestie
      tortor a elit congue, vitae pulvinar nunc varius. Pellentesque ullamcorper magna eget felis venenatis suscipit quis nec nisi.
      Curabitur porta congue ligula sodales euismod. Vivamus sed nunc vel velit cursus aliquet in tristique purus. Fusce mattis dapibus
      imperdiet. Aliquam erat volutpat. Integer lorem augue, congue quis magna eget, luctus dictum diam. Morbi viverra, tellus vitae semper
      pulvinar, nulla ante ullamcorper ipsum, non rutrum nunc nisi nec purus. Suspendisse molestie purus non varius interdum. Vivamus in
      vehicula leo, ac scelerisque elit. Mauris porta placerat turpis ut egestas. Nam porttitor dui ac quam tincidunt, nec porttitor turpis
      suscipit. Vestibulum gravida purus arcu, vitae euismod magna commodo sit amet. Pellentesque ac porttitor lacus. Nunc urna arcu,
      consequat id scelerisque sed, scelerisque eget libero. Mauris sed leo congue, ultrices nisl a, porta arcu. Suspendisse varius nulla id
      scelerisque finibus. Sed dictum id metus et ullamcorper. Morbi vulputate interdum ligula mattis aliquam. Proin faucibus erat metus, et
      maximus metus lobortis a. Vestibulum non velit non ante consectetur laoreet. Nam semper nulla sit amet justo rutrum, varius sagittis
      diam mattis. Etiam semper cursus volutpat. Nam in bibendum augue. Maecenas a dictum velit, a commodo dolor. Praesent at enim nec ante
      efficitur vehicula. Sed ut odio mauris. Donec porttitor ligula elit, ac luctus mi vestibulum vel. Praesent pretium vel ex eget
      egestas. Nam consectetur feugiat hendrerit. Mauris eleifend justo non nibh consequat, id pulvinar lectus venenatis. Maecenas feugiat
      ultricies mattis. Mauris tincidunt leo ullamcorper tristique placerat. In nisi quam, convallis at egestas lobortis, imperdiet sit amet
      lectus. Vestibulum eget mauris egestas, tempor justo ut, luctus orci. Ut congue maximus odio sed mollis. Nunc a lacus ac odio pretium
      porttitor. Sed vitae felis vitae dui sodales vestibulum vel at eros. Praesent nec bibendum arcu, mollis imperdiet augue. Nam eget
      tempor libero. Mauris justo neque, ultrices aliquam tristique et, placerat non urna. Pellentesque in molestie magna. In porttitor
      imperdiet hendrerit. Curabitur varius turpis a lacus euismod viverra et vitae eros. Suspendisse gravida tortor nec metus interdum
      porta. Etiam iaculis mauris magna, in vestibulum mauris pharetra quis. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Pellentesque pellentesque urna id sapien mattis, et hendrerit massa sagittis. Nullam tempor est eu hendrerit
      semper. Donec non urna at lacus scelerisque vulputate euismod tempor erat. Maecenas pulvinar eu ipsum eget congue. Nulla eu purus
      molestie, ultrices nisl at, aliquam justo. Quisque id libero iaculis, ornare augue accumsan, pretium nisl. Vestibulum a ex fringilla
      ipsum suscipit volutpat. Suspendisse at leo at justo eleifend laoreet. Nam at enim non nulla vehicula ultrices a non justo. Quisque
      eget sapien in turpis suscipit tempor. Integer maximus sed ex non vehicula. Aliquam ultricies vulputate lectus, sit amet ultrices
      lacus laoreet varius. Curabitur elementum faucibus feugiat. Sed suscipit orci nec nibh tristique, sed consectetur libero lacinia.
      Donec nec suscipit metus, et suscipit mi. Sed vulputate lorem nec ante placerat, vitae pretium ante tempus. In non lacus nulla. Morbi
      mollis congue fringilla. Curabitur ut justo vitae quam faucibus lacinia. Integer ex turpis, rhoncus ac massa a, fringilla mattis urna.
      Aenean sed massa efficitur eros molestie tempus. Nullam sed sagittis tortor. In hac habitasse platea dictumst. Donec sodales nisi nec
      ultrices rutrum. Donec eros libero, egestas ac gravida ac, malesuada nec tellus. Suspendisse molestie eu eros a scelerisque.
      Pellentesque quis sem nunc. Cras diam nulla, imperdiet vel blandit eu, efficitur hendrerit erat. Donec egestas elit vel eleifend
      porttitor. Donec imperdiet nisi elit, in varius ante fermentum et. Cras nibh velit, porta vel viverra id, pulvinar eu lorem. Sed
      consequat tellus posuere mi porta interdum. Fusce a nulla vel diam viverra lobortis. Sed vel hendrerit est, eu vulputate elit.
      Phasellus fringilla ornare lectus, vel dignissim nunc porttitor consectetur. Sed ligula purus, volutpat condimentum tellus vitae,
      convallis efficitur felis. Mauris ut libero laoreet, tincidunt massa sed, lacinia tortor. Cras quis varius nisi, hendrerit tincidunt
      velit. Nulla varius nisi quis odio interdum, ac ullamcorper erat finibus. Duis at leo velit. Sed dapibus nibh eros, at facilisis quam
      vehicula non. Maecenas pharetra commodo blandit. Aliquam sit amet vestibulum turpis. Sed non elementum nisl. Cras laoreet, urna in
      finibus ultricies, diam odio imperdiet tortor, ut sollicitudin justo justo ut augue. Praesent elementum volutpat nisi, quis ornare dui
      lobortis non. Suspendisse sodales nec mi vel vestibulum. Vivamus nec magna non ipsum malesuada fermentum. Nam lobortis massa ut leo
      blandit maximus. Donec non arcu eleifend, fringilla urna sit amet, interdum diam. Morbi eu lacus quam. Sed ut quam volutpat, suscipit
      tortor vel, placerat libero. Nulla facilisi. Curabitur condimentum ut nibh eu laoreet. Morbi hendrerit porta diam vel tempus. Mauris
      vitae mattis dui. Integer arcu eros, congue a tortor vel, congue euismod mauris. Nullam egestas ut risus tincidunt dictum. Sed aliquam
      pharetra semper. Sed nunc mauris, sodales eu nisi vel, ornare porttitor tortor. Nunc congue libero vel risus viverra, sed iaculis
      metus vehicula. Ut elementum blandit blandit. Maecenas laoreet urna pharetra, egestas felis vitae, dapibus lectus. Donec cursus, nunc
      sed facilisis viverra, mi urna facilisis metus, quis iaculis eros elit nec risus. Nam eget ex neque. Maecenas eu neque odio. Curabitur
      finibus lacus ante, ut sollicitudin nibh interdum nec. Suspendisse fermentum venenatis odio. Sed a lacus lorem. Nam tempor aliquet
      est, et tempor dui egestas ut. Suspendisse ipsum ante, dignissim eu nisi nec, interdum sagittis mauris. Nullam bibendum, dui sit amet
      suscipit posuere, diam metus pellentesque lectus, sit amet rhoncus ante nunc at quam. Pellentesque fringilla pulvinar ullamcorper.
      Curabitur vel dolor egestas, auctor massa efficitur, tincidunt est. Aenean at ipsum id turpis bibendum sagittis eu porttitor tellus.
      Nulla bibendum enim non euismod efficitur. Nunc rhoncus lectus nec quam pulvinar vehicula. Vestibulum at finibus augue. Integer at
      erat ex. Aenean nunc lacus, convallis quis dignissim eu, luctus ac justo. Sed ut nisl neque. Sed congue tortor ac ullamcorper
      condimentum. Nulla sagittis non erat sit amet scelerisque. Praesent et dolor faucibus erat blandit tincidunt sed vitae purus. Fusce ac
      tincidunt elit. Integer sit amet augue nec nisi consequat gravida. Sed a feugiat turpis, sed sagittis nisi. Ut sollicitudin ultrices
      consequat. Donec posuere lobortis est, eu fringilla lorem varius ac. Pellentesque volutpat magna vel dapibus posuere. Curabitur
      malesuada imperdiet lacus in auctor. Praesent pulvinar tempor volutpat. Morbi accumsan arcu id eros feugiat venenatis. Sed dapibus
      iaculis mi sed porta. Integer malesuada porta elit, ultrices facilisis sem aliquet nec. Aliquam sit amet accumsan ante. Proin non
      malesuada ligula, ac tempus ante. Etiam neque nibh, semper sit amet est quis, molestie rhoncus sapien. Nam nunc nibh, tempus id
      ultrices in, pretium quis quam. Maecenas bibendum accumsan ornare. Curabitur mollis nibh at rutrum fringilla. In id risus ut tortor
      mollis posuere molestie sit amet urna. Sed finibus nulla velit, a mattis ante convallis vitae. Aenean eu finibus urna. Suspendisse
      euismod non erat eget faucibus. Donec eu tortor ac erat finibus elementum. Mauris et erat ac augue porttitor hendrerit. Morbi
      ultricies elementum est at consectetur. Nam sollicitudin interdum pellentesque. Aenean volutpat gravida turpis non vulputate. Vivamus
      lorem tortor, venenatis venenatis nibh a, consequat sagittis dolor.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Boat } from '../types/types'
import { ref } from 'vue'

const showText = ref(false)

const props = defineProps<{
  boat: Boat
}>()
</script>

<style scoped></style>
