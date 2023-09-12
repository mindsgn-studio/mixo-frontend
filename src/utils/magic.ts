import { Magic } from 'magic-sdk';

export const initMagic = async () => {
  const magic = await new Magic(`${process.env.NEXT_PUBLIC_MAGIC_PUBLISH_KEY}`);
  return magic;
};
