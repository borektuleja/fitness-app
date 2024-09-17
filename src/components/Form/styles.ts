import { styled } from "@/utils";

export const wrapper = styled(`
  w-full
  max-w-xl
  flex
  flex-col
  gap-4
`);

export const message = styled(`
  h-[24px]
  text-red-400
  text-base
  text-center
  font-normal
  tracking-wider
  data-[success=true]:text-green-400
`);
