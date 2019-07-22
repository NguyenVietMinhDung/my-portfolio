export type SocialNetworkItem = {
  name: string,
  url: string,
  iconUrl: string,
};

export type SocialNetworkMenuProps = {
  socialNetworks: Array<SocialNetworkItem>,
};
