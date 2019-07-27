import type { SocialNetworkItem } from '../../Commons/SocialNetworks/type';

export type HeaderProps = {
  socialNetworks: Array<SocialNetworkItem>,
  name: string,
  description: string,
  avatarUrl: string,
  btnTxt: string,
};
