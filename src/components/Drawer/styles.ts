import { styled } from "@/utils";

export const wrapper = styled(`
  w-full
  fixed
  left-0
  top-[65px]
  inline lg:hidden
  bg-neutral-950/90
  animate-[appear_0.125s_ease-out]
`);

export const content = styled(`
  w-64
  min-h-[calc(100dvh-65px)]
  border-r
  border-neutral-700/80
  flex
  flex-col
  items-center
  gap-4
  bg-neutral-950
  -translate-x-full
  animate-[slide-x_0.25s_0.125s_ease-out_forwards]
`);

export const button = styled(`
  px-3
  py-2
  border-2
  border-white
  rounded-md
  outline-none
  text-white
  text-sm
  font-normal
  tracking-wider
`);
