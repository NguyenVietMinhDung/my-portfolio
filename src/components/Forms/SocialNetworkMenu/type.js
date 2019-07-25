export type SocialNetworkItem = {
  name: string,
  url: string,
  iconUrl: string,
};

export type SocialNetworkMenuProps = {
  items: Array<SocialNetworkItem>,
};
