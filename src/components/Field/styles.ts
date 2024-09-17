import { styled } from "@/utils";

export const wrapper = styled(`
  border
  border-neutral-700/80
  rounded-lg
  flex
  bg-neutral-700/20
  transition
  hover:border-neutral-500/80
  focus-within:border-neutral-500/80
`);

export const icon = styled(`
  p-2
  border-r
  border-neutral-700/80
  flex-shrink-0
  text-neutral-400
`);

export const input = styled(`
  px-2
  outline-none
  flex-grow
  text-white
  bg-transparent
  text-sm
  font-normal
  tracking-wider
  placeholder:text-neutral-400
`);
