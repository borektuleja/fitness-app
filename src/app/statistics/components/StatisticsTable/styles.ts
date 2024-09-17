import { styled } from "@/utils";

export const wrapper = styled(`
  w-full
  flex
  flex-col
  items-center
  gap-4
`);

export const settings = styled(`
  w-full
  max-w-3xl
  border
  border-neutral-700/80
  rounded-lg
  flex
  justify-between
  items-center
`);

export const icon = styled(`
  p-2
  flex-shrink-0
  text-neutral-400
  cursor-pointer
`);

export const label = styled(`
  text-neutral-400
  text-sm
  font-medium
  tracking-wider
`);
