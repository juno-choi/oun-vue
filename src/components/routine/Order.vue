<template>
<div class="bg-white py-12">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p
        class="text-3xl font-bold leading-8 tracking-tight text-gray-400 sm:text-4xl"
      >
        🏃‍♂️ 운동 루틴을 지정해주세요.
      </p>
    </div>

    <div id="routine-div" class="text-center mt-10">
      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-0"
          type="text"
          placeholder="운동을 입력해주세요."
        />
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click='routineRemove(this)'>
          -
        </button>
      </div>
    </div>
    <div class="text-center mt-4">
      <div class="items-center">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="routineAdd"
        >
          + 루틴 추가
        </button>
      </div>
    </div>

    <div class="text-center mt-10">
        <button
            class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
            @click="pre"
        >
            이전
        </button>
        <button
            class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
            @click="routineComplete"
        >
            다음
        </button>
    </div>
  </div>
</div>
</template>

<script>
import router from '@/router/router';
    
export default {
    name: 'routineOrder',
    methods: {
        routineAdd() {
            const target = document.getElementById("routine-div");
            const div = document.createElement("div");
            div.setAttribute("class", "mb-4");

            const input = document.createElement("input");
            input.setAttribute("class", "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-0");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "운동을 입력해주세요.");

            const button = document.createElement("button");
            button.setAttribute("class", "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline");
            button.setAttribute("type", "button");
            button.innerText = "-";
            button.addEventListener("click", this.routineRemove);

            div.appendChild(input);
            div.appendChild(button);
            target.appendChild(div);
        },
        routineRemove(btn) {
            // idx가 1일 경우 삭제 불가
            const length = document.getElementById("routine-div").querySelectorAll("input").length;
            if (length < 2) {
            alert("루틴을 모두 제거할 수 없습니다.");
                return;
            }

            btn.target.parentElement.remove();
        },
        routineComplete() {
            const routineList = [];
            document.getElementById("routine-div").querySelectorAll("input").forEach((input) => {
                routineList.push(input.value);
            });
            console.log(routineList);
            router.push({ name: 'setting' });
        },
        pre() {
            router.push({name: 'choice'});
        }
    }
}
</script>