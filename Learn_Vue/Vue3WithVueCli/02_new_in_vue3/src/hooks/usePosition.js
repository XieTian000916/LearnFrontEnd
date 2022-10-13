import { reactive, onMounted, onUnmounted } from "vue";
export default function () {
  let position = reactive({
    x: 0,
    y: 0,
  });

  function showPosition(event) {
    position.x = event.pageX;
    position.y = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", showPosition);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", showPosition);
  });

  return position;
}
