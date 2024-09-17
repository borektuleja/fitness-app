import { styled } from "@/utils";

export const wrapper = styled(`
  p-4
  border
  border-neutral-700/80
  rounded-lg
  flex
  flex-col
  gap-2
`);

export const header = styled(`
  flex
  gap-2
`);

export const label = styled(`
  size-8 xs:size-10
  flex
  justify-center
  items-center
  text-neutral-400
  text-base
  text-center
  font-medium
  tracking-wider
`);

export const grid = styled(`
  grid
  grid-cols-7
  grid-rows-5
  gap-2
`);

export const link = styled(`
  size-8 xs:size-10
  rounded-full
  flex
  justify-center
  items-center
  text-white
  text-xs xs:text-base
  font-bold
  tracking-wider
`);
