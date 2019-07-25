import type { SocialNetworkItem } from '../SocialNetworkMenu/type';

export type HeaderProps = {
  socialNetworks: Array<SocialNetworkItem>,
  name: string,
  description: string,
  avatarUrl: string,
  btnTxt: string,
};
