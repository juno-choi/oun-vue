<template>
    <div class="max-w grid lg:grid-cols-3 grid-cols-1 content-center">
        <div></div>
        <div
            class="max-w rounded overflow-hidden shadow-lg bg-blue-400 text-white "
            on:click={routineClick}
        >
            <div class="px-6 py-4 text-center content-center">
            <div class="text-3xl font-bold leading-8 tracking-tight sm:text-4xl mb-2">
                🏃‍♂️ {routineName}
            </div>
            <div class="text-4xl font-bold leading-8 tracking-tight mb-2 mt-10">
                {setCnt}
            </div>
            <div
                class="text-xl sm:text-2xl font-bold leading-8 tracking-tight mb-2 mt-10"
            >
                터치하면 카운터가 올라가요! {routineStr}
            </div>
            <div class="text-4xl font-bold leading-8 tracking-tight mb-2 mt-10">
                루틴 소요 시간 : {hour} h : {minute} m : {second} s
            </div>
            </div>
            <div class="px-6 pt-4 pb-2">
            {#each routineList as { routine }}
                <span
                class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2"
                >#{routine}</span
                >
            {/each}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'routineStart'
}
</script>