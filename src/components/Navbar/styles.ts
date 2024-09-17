import { styled } from "@/utils";

export const wrapper = styled(`
  sticky
  inset-0
  px-4
  py-3
  border-b
  border-neutral-700/80
  flex
  justify-center
  backdrop-blur-lg
`);

export const content = styled(`
  container
  flex
  justify-between
  items-center
`);

export const header = styled(`
  flex
  items-center
`);

export const icon = styled(`
  p-2
  flex-shrink-0
`);

export const h = styled(`
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-sky-500
  to-rose-500
  text-xl
  uppercase
  font-bold
  tracking-wide
`);

export const button = styled(`
  px-3
  py-2
  border-2
  border-white
  rounded-md
  outline-none
  hidden lg:inline
  text-white
  text-sm
  font-normal
  tracking-wider
`);
