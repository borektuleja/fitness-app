import { styled } from "@/utils";

export const wrapper = styled(`
  w-full
  grid
  auto-cols-max
`);

export const head = styled(`
  contents
`);

export const body = styled(`
  contents
`);

export const tr = styled(`
  contents
`);

export const th = styled(`
  p-4
  border-y
  [&:first-child]:border-l
  [&:first-child]:rounded-tl-lg
  [&:last-child]:border-r
  [&:last-child]:rounded-tr-lg
  border-neutral-700/80
  text-white
  text-sm
  font-medium
  tracking-wider
`);

export const td = styled(`
  p-4
  border-b
  [&:first-child]:border-l
  [&:last-child]:border-r
  border-neutral-700/80
  flex
  justify-center
  text-white
  text-sm
  font-normal
  tracking-wider
`);
